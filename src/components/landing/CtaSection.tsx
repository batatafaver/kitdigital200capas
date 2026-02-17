import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

const basicFeatures = [
  '+50 Capas de Caderno',
  'Temas variados',
  'Editável no Canva gratuito',
];

const premiumFeatures = [
  '+250 Capas de Caderno Infantil',
  '100% editável no Canva grátis',
  'Arquivos organizados por tema',
  'Planner Semanal Infantil',
  'Pack de Adesivos Divertidos',
  'Etiquetas Escolares Personalizáveis',
  'Acesso prioritário ao suporte',
  'Acesso Vitalício',
  'Suporte prioritário via WhatsApp',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pacote Básico</CardTitle>
              <CardDescription className="text-4xl font-bold">
                R$ 10
              </CardDescription>
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
              <p className="mt-2 text-xs text-muted-foreground">
                🔒 Pagamento 100% seguro • Acesso imediato
              </p>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-primary border-2 relative shadow-2xl pt-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-current" />
              MAIS ESCOLHIDO
            </div>
            <CardHeader className="text-center pt-0">
              <CardTitle className="text-2xl font-bold">
                Pacote Premium
              </CardTitle>
              <div className="mt-2">
                <p className="text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-6xl font-extrabold text-primary flex items-start justify-center">
                  <span className="text-3xl font-semibold mt-1 mr-1">R$</span>
                  19
                  <span className="text-2xl font-semibold">,90</span>
                </p>
              </div>
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
              <Button
                size="lg"
                className="w-full text-xl h-auto py-4 font-bold rounded-full shadow-lg"
              >
                QUERO O PREMIUM
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
              <p className="mt-2 text-xs text-muted-foreground">
                🔒 Pagamento 100% seguro • Acesso imediato
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}