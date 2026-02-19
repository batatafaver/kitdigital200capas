import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Preciso do Canva Pro?',
    answer: 'Não. Funciona no Canva gratuito.',
  },
  {
    question: 'Posso usar para vender capas personalizadas?',
    answer: 'Sim. Uso comercial liberado.',
  },
  {
    question: 'Como recebo o acesso?',
    answer: 'Via WhatsApp, imediatamente após a compra.',
  },
];

export function Faq() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
