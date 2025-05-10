
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AgriLinkProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}

const agriLinks: AgriLinkProps[] = [
  {
    title: "EMBRAPA",
    description: "Empresa Brasileira de Pesquisa Agropecuária",
    url: "https://www.embrapa.br/",
    icon: "🌱"
  },
  {
    title: "CONAB",
    description: "Companhia Nacional de Abastecimento",
    url: "https://www.conab.gov.br/",
    icon: "🌾"
  },
  {
    title: "Canal Rural",
    description: "Notícias, programas e informações do agronegócio brasileiro",
    url: "https://www.canalrural.com.br/",
    icon: "📺"
  },
  {
    title: "Ministério da Agricultura",
    description: "Portal do Ministério da Agricultura, Pecuária e Abastecimento",
    url: "https://www.gov.br/agricultura/pt-br",
    icon: "🏛️"
  },
  {
    title: "Agrolink",
    description: "Portal de conteúdo para o agronegócio",
    url: "https://www.agrolink.com.br/",
    icon: "🔗"
  },
  {
    title: "Globo Rural",
    description: "Notícias sobre agricultura, pecuária e meio ambiente",
    url: "https://g1.globo.com/economia/agronegocios/globo-rural/",
    icon: "🌐"
  }
];

export function AgriLinks() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {agriLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group h-full"
        >
          <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 group-hover:bg-muted/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{link.icon}</span>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{link.description}</CardDescription>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
