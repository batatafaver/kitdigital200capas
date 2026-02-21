'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Check, Star, Gift, Users, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, FormEvent } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mainFeature = '+250 capas infantis';
const premiumFeatures = [
  'Canva grátis',
  'Uso pessoal ou comercial',
  'Acesso vitalício',
  'Suporte via WhatsApp',
  'Garantia de 7 dias',
];
const bonusFeatures = [
  'Planner Semanal Infantil',
  'Etiquetas Escolares Personalizáveis',
  'Folha de Figurinhas Divertidas',
];

export function CtaSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const paymentImage = PlaceHolderImages.find((p) => p.id === 'payment-methods');


  useEffect(() => {
    if (!localStorage.getItem('external_id')) {
      localStorage.setItem('external_id', crypto.randomUUID());
    }
  }, []);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        variant: 'destructive',
        title: 'E-mail inválido',
        description: 'Por favor, insira um e-mail válido para continuar.',
      });
      setIsLoading(false);
      return;
    }

    const external_id = localStorage.getItem('external_id');
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          external_id,
          fbp,
          fbc,
        }),
      });

      if (!response.ok) {
        // Even if the server responds with an error, we redirect to not lose the sale.
        // The error is logged on the server.
        console.warn("Falha ao registrar o lead, mas prosseguindo para o checkout.");
      }
      
      // Redirect to checkout
      window.location.href = 'https://pay.wiapy.com/6993d299f03f185bdc490c2f';

    } catch (error: any) {
       toast({
        variant: 'destructive',
        title: 'Ops! Algo deu errado.',
        description: 'Não foi possível registrar seu e-mail, mas vamos te levar ao checkout.',
      });
      // Redirect even on client-side fetch error
      setTimeout(() => {
        window.location.href = 'https://pay.wiapy.com/6993d299f03f185bdc490c2f';
      }, 1500)
    }
  };

  return (
    <section id="oferta" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline">
            Acesso Imediato ao Pacote Completo
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto items-start">
          <Card className="flex flex-col border-primary border-2 relative shadow-2xl pt-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-current" />
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle className="text-2xl font-bold">
                Pacote Premium
              </CardTitle>
              <div className="mt-2">
                <p className="text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-5xl sm:text-6xl font-extrabold text-green-600 flex items-start justify-center">
                  <span className="text-3xl font-semibold mt-1 mr-1">R$</span>
                  19
                  <span className="text-2xl font-semibold">,90</span>
                </p>
                <p className="font-semibold text-green-600">
                  Você economiza R$77,10 + Bônus Exclusivos
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-4 sm:px-6">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary p-3 rounded-lg mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span>+4.582 pessoas já garantiram suas capas!</span>
              </div>

              <ul className="space-y-3 text-left">
                <li className="flex items-center font-bold text-primary text-base bg-primary/10 p-3 rounded-lg">
                  <Star className="h-5 w-5 mr-3 shrink-0 fill-current" />
                  <span>{mainFeature}</span>
                </li>
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center font-medium">
                    <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {bonusFeatures.map((feature, index) => (
                  <li
                    key={`bonus-${index}`}
                    className="flex items-center font-medium"
                  >
                    <Gift className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span>
                      <span className="font-bold">BÔNUS:</span> {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="flex flex-col items-center p-6 pt-6">
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                 <div className="space-y-2 text-center">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Informe seu e-mail para continuar
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="seu-melhor-email@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="text-center"
                    />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-xl h-auto py-4 font-bold rounded-full shadow-lg animate-pulse-cta"
                  disabled={isLoading}
                >
                  {isLoading ? (
                      <Loader2 className="animate-spin" />
                  ) : (
                      '👉 QUERO COMPRAR AGORA'
                  )}
                </Button>
              </form>
              <div className="mt-4">
                {paymentImage && (
                  <Image
                    src={paymentImage.imageUrl}
                    alt={paymentImage.description}
                    width={351}
                    height={40}
                    className="max-w-full h-auto"
                    data-ai-hint={paymentImage.imageHint}
                  />
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                🔒 Pagamento 100% seguro • Acesso imediato
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
