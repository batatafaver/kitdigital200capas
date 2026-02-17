import { BookCopy, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Não perca essa oportunidade</h2>
          <p className="text-muted-foreground mt-2">
            Adquira agora o acesso a centenas de capas e bônus exclusivos.
          </p>
          <Button size="lg" className="mt-6 text-lg h-auto py-4 px-10">
            GARANTIR MEU ACESSO +
          </Button>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <BookCopy className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold">Capas Infantis</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Capas Infantis. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
