import { MousePointerClick, Paintbrush, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: 'Escolha seu Design',
    description:
      'Navegue pela nossa galeria e escolha o design que mais combina com você.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Personalize no Canva',
    description:
      'Abra o template no Canva e edite textos, cores e imagens com facilidade. Não precisa ser expert em design!',
  },
  {
    icon: <Download className="h-10 w-10 text-primary" />,
    title: 'Baixe e Imprima',
    description:
      'Faça o download da sua capa personalizada em alta resolução e imprima onde preferir.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            É Simples e Rápido
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Em apenas 3 passos, você tem uma capa novinha em folha.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center flex flex-col items-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 p-4 rounded-full mb-4">
                    {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
