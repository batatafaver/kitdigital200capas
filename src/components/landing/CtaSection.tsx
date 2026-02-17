import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const features = [
  'Acesso a todos os templates',
  'Editável no Canva gratuito',
  'Download instantâneo',
  'Uso pessoal e comercial',
  'Suporte via e-mail',
];

export function CtaSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-2xl p-8 md:p-12 text-center border">
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline">
            Adquira o Pacote Completo Agora!
          </h2>
          <p className="mt-4 text-5xl font-bold text-primary">R$ 47,90</p>
          <p className="text-muted-foreground">
            Pagamento único, acesso vitalício.
          </p>

          <ul className="mt-8 mb-10 text-left space-y-3 max-w-sm mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full md:w-auto text-lg h-auto py-4 px-10">
            Comprar Pacote Completo
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Compra 100% segura. 7 dias de garantia.
          </p>
        </div>
      </div>
    </section>
  );
}
