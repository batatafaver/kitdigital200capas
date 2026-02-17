import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';

const basicFeatures = [
  '+50 Capas de Caderno',
  'Temas variados',
  'Editável no Canva gratuito',
];
const premiumFeatures = [
  '+200 Capas de Caderno',
  'Todos os temas e personagens',
  'Bônus Exclusivos',
  'Planner Semanal',
  'Etiquetas para Material',
  'Horário de Aulas',
  'Acesso vitalício',
];

export function CtaSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline">
            Escolha o melhor plano para você
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pacote Básico</CardTitle>
              <CardDescription className="text-4xl font-bold">R$ 10</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col pt-6">
                <Button size="lg" variant="outline" className="w-full">
                    Selecionar Básico
                </Button>
                <div className="mt-4">
                    <Image
                        src="https://i.postimg.cc/c48Dp6Hp/image.png"
                        alt="Formas de pagamento aceitas"
                        width={351}
                        height={40}
                        className="max-w-full h-auto"
                    />
                </div>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-primary border-2 relative shadow-2xl">
            <div className="absolute -top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
              MAIS VENDIDO
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pacote Premium</CardTitle>
              <CardDescription className="text-4xl font-bold text-primary">R$ 19</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center font-medium">
                    <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col pt-6">
                <Button size="lg" className="w-full text-lg h-auto py-4">
                    QUERO O PACOTE PREMIUM
                </Button>
                <div className="mt-4">
                    <Image
                        src="https://i.postimg.cc/c48Dp6Hp/image.png"
                        alt="Formas de pagamento aceitas"
                        width={351}
                        height={40}
                        className="max-w-full h-auto"
                    />
                </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
