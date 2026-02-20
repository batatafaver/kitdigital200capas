import { NextResponse } from 'next/server';
import crypto from 'crypto';

function hash(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, external_id, fbp, fbc } = body;

  if (!email || !external_id) {
    return NextResponse.json(
      { error: 'Email e external_id são obrigatórios.' },
      { status: 400 }
    );
  }

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN || PIXEL_ID === 'SEU_PIXEL_ID_AQUI') {
    console.error("Variáveis de ambiente META_PIXEL_ID ou META_ACCESS_TOKEN não configuradas.");
    // In production, you might want to just return success to not block the user
    // but log the error for the developer.
    return NextResponse.json({ message: "Lead recebido, mas evento não enviado por falta de configuração." }, { status: 200 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const hashedEmail = hash(normalizedEmail);

  const eventData = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_id: external_id,
    action_source: 'website',
    user_data: {
      em: [hashedEmail],
      client_ip_address: request.headers.get('x-forwarded-for') || request.headers.get('remote-addr'),
      client_user_agent: request.headers.get('user-agent'),
      fbp: fbp || undefined,
      fbc: fbc || undefined,
    },
    custom_data: {
      content_name: 'pre-checkout',
    },
  };

  const payload = {
    data: [eventData],
    // test_event_code: 'TEST_CODE_AQUI' // Descomente para testar no Events Manager
  };

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const metaResponseData = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('Erro ao enviar evento para a Meta:', metaResponseData);
      // Don't block user flow even if Meta API fails
      return NextResponse.json({ message: 'Lead recebido, falha ao enviar para a Meta.' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Evento Lead enviado com sucesso.', trace_id: metaResponseData.trace_id }, { status: 200 });
  } catch (error) {
    console.error('Erro de rede ao contatar a API da Meta:', error);
     // Don't block user flow even if Meta API fails
    return NextResponse.json({ message: 'Lead recebido, falha de rede ao contatar a Meta.' }, { status: 200 });
  }
}
