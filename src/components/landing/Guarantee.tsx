import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-8 md:p-12 text-center border">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline">
            Sua Satisfação é Nossa Garantia!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Você tem{' '}
            <span className="font-bold text-foreground">
              7 dias de garantia incondicional
            </span>
            . Se por qualquer motivo não ficar satisfeito com o nosso pacote de
            capas, basta nos enviar um e-mail e nós devolveremos{' '}
            <span className="font-bold text-foreground">
              100% do seu dinheiro
            </span>
            , sem perguntas e sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
