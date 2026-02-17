import { BookCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BookCopy className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold">Capas Infantis</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button>Quero as Capas Agora</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
