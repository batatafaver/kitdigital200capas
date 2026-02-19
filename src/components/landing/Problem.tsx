import { XCircle } from 'lucide-react';

const problems = [
  'Capas de caderno genéricas',
  'Criança querendo personagem específico',
  'Falta de tempo para criar algo bonito',
  'Gráfica cobrando caro',
];

export function Problem() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            <span role="img" aria-label="cross mark emoji" className="mr-2">❌</span>
            Todo ano o mesmo problema…
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-card border rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
                {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-destructive mt-0.5 shrink-0" />
                        <span className="text-lg text-muted-foreground">{problem}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-dashed">
                <p className="text-center text-lg font-semibold text-foreground">
                No final, você gasta mais ou entrega algo sem graça.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
