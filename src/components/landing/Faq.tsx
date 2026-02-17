import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que eu recebo exatamente?',
    answer:
      'Você recebe um pacote com dezenas de templates de capas de caderno, em formato PDF, com links para você editar diretamente no Canva.',
  },
  {
    question: 'Preciso ter o Canva Pro?',
    answer:
      'Não! Todos os nossos templates são 100% editáveis na versão gratuita do Canva. Você não precisa de nenhuma assinatura paga.',
  },
  {
    question: 'Posso usar para fins comerciais?',
    answer:
      'Sim! Após personalizar, você pode usar as capas para seus produtos comerciais, como cadernos de brinde ou para venda.',
  },
  {
    question: 'Como recebo o acesso?',
    answer:
      'O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções e o link para baixar seus arquivos.',
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
