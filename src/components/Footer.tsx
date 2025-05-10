
import { Tractor } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tractor className="h-6 w-6 text-agro-green" />
              <span className="text-lg font-display font-bold">AgroEventos</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Seu portal para eventos e festividades agropecuárias.
              Descubra os principais acontecimentos do setor agrícola.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#sites" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sites do Agro
                </a>
              </li>
              <li>
                <a href="#api" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  APIs e Programas
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: contato@agroeventos.com
              </li>
              <li className="text-sm text-muted-foreground">
                Telefone: (11) 9999-9999
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} AgroEventos. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Desenvolvido por <span className="font-medium text-primary">Eduardo Rosa Rodrigues</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
