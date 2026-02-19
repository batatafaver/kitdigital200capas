import { CheckCircle2 } from 'lucide-react';

export function Solution() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            <span role="img" aria-label="check mark emoji" className="mr-2">✅</span>
            A solução simples e pronta
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Você recebe um kit completo com +200 capas infantis editáveis, organizadas por tema, prontas para personalizar no Canva.
          </p>
          <div className="inline-flex flex-col gap-4 items-start bg-card border-l-4 border-green-500 rounded-r-lg p-6 text-left shadow-lg">
             <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-lg text-foreground font-medium">Nada de começar do zero.</span>
             </div>
             <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-lg text-foreground font-medium">Nada de complicação.</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
