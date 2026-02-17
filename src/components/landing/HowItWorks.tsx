import { Mail, Paintbrush, Printer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: '1. Receba por E-mail',
    description:
      'Acesso imediato aos arquivos após a confirmação da sua compra.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: '2. Edite no Canva',
    description:
      'Personalize nomes e adicione elementos. Tudo de forma fácil e na versão gratuita do Canva.',
  },
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: '3. Baixe e Imprima',
    description:
      'Salve sua arte final em alta resolução e imprima em casa ou na gráfica de sua preferência.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Muito simples de começar a utilizar!
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Em 3 passos você transforma o material escolar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center flex flex-col items-center border-dashed border-2">
              <CardHeader>
                <div className="mx-auto bg-accent p-4 rounded-full mb-4">
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
