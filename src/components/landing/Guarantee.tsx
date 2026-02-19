import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-8 md:p-12 text-center border">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline">
            🛡️ Risco Zero por 7 Dias
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se não gostar do material, devolvemos 100% do seu dinheiro. Sem burocracia e sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
