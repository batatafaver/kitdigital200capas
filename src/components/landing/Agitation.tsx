
import { AlertTriangle } from 'lucide-react';

const consequences = [
  'A criança não se sente representada',
  'O material perde identidade',
  'Você deixa dinheiro na mesa (se vende personalizados)',
];

export function Agitation() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">
            Se você continuar usando capas comuns...
          </h2>
          <div className="bg-card border-l-4 border-destructive rounded-r-lg p-6 text-left shadow-lg">
            <ul className="space-y-4">
              {consequences.map((consequence, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive mt-0.5 shrink-0" />
                  <span className="text-lg text-muted-foreground">{consequence}</span>
                </li>
              ))}
            </ul>
          </div>
           <p className="mt-8 text-xl font-semibold text-foreground">
            E tudo isso poderia ser resolvido em minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
