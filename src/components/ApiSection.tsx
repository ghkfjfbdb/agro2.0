
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ApiItemProps {
  title: string;
  description: string;
  category: string;
  url: string;
}

const apiItems: ApiItemProps[] = [
  {
    title: "API CLIMA - INMET",
    description: "Dados meteorológicos e previsões de clima para agricultura",
    category: "Clima",
    url: "https://portal.inmet.gov.br/manual"
  },
  {
    title: "API de Preços - CONAB",
    description: "Informações sobre preços de produtos agrícolas no Brasil",
    category: "Mercado",
    url: "https://www.conab.gov.br/"
  },
  {
    title: "AGROAPI - EMBRAPA",
    description: "APIs da Embrapa com dados sobre cultivo, solo e mais",
    category: "Cultivo",
    url: "https://www.embrapa.br/agroapi"
  },
  {
    title: "Siscagef - IBGE",
    description: "Sistema de Cadastro e Georreferenciamento de Estabelecimentos Agropecuários",
    category: "Mapeamento",
    url: "https://www.ibge.gov.br/"
  }
];

const softwareItems: ApiItemProps[] = [
  {
    title: "AgroSmart",
    description: "Software de gestão agrícola com foco em produtividade",
    category: "Gestão",
    url: "#"
  },
  {
    title: "AgriNota",
    description: "Sistema para emissão de notas fiscais para o agronegócio",
    category: "Fiscal",
    url: "#"
  },
  {
    title: "AgroMeteoBot",
    description: "Alertas meteorológicos para agricultura via Telegram/WhatsApp",
    category: "Clima",
    url: "#"
  },
  {
    title: "FarmControl",
    description: "Controle de estoque e insumos para propriedades rurais",
    category: "Estoque",
    url: "#"
  }
];

export function ApiSection() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3 className="text-xl font-display font-medium">APIs para o Agronegócio</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {apiItems.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 group-hover:bg-muted/50">
                <CardHeader>
                  <Badge className="w-fit bg-primary text-primary-foreground">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Clique para acessar →
                  </p>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-display font-medium">Softwares e Programas</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {softwareItems.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 group-hover:bg-muted/50">
                <CardHeader>
                  <Badge className="w-fit bg-secondary text-secondary-foreground">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Saiba mais →
                  </p>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
