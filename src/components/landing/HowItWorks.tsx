import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const steps = [
  {
    icon: '1️⃣',
    title: 'Receba no WhatsApp',
    description: 'Após a compra, os arquivos chegam direto no seu WhatsApp.',
  },
  {
    icon: '2️⃣',
    title: 'Edite no Canva',
    description: 'Altere nome, série e cores com poucos cliques.',
    note: '👉 Não precisa Canva Pro.',
  },
  {
    icon: '3️⃣',
    title: 'Baixe e imprima',
    description: 'Alta resolução, pronta para impressão ou envio digital.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            🚀 Começar é muito fácil
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center flex flex-col items-center border-dashed border-2"
            >
              <CardHeader>
                <div className="text-5xl mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{step.description}</CardDescription>
                 {step.note && (
                   <p className="text-sm text-foreground font-semibold mt-4 bg-accent p-2 rounded-md">{step.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
