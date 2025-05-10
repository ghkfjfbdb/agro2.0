
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function VideoSection() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
      <Card className="bg-muted/50 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Conteúdo em Vídeo</CardTitle>
          <CardDescription className="text-base">
            Assista ao conteúdo sobre as últimas tendências e inovações no setor agrícola.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            O agronegócio brasileiro é um dos setores mais importantes da economia nacional,
            sendo responsável por uma parcela significativa do PIB e das exportações do país.
          </p>
          <p>
            Acompanhe informações e novidades sobre técnicas de cultivo, maquinário agrícola,
            sustentabilidade no campo e as mais recentes pesquisas para aumento de produtividade.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Nota: Para mais informações, consulte os portais oficiais do setor agropecuário.
          </p>
        </CardFooter>
      </Card>
      
      <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/oO7njNiVEqg"
          title="Vídeo sobre agricultura" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="aspect-video"
        ></iframe>
      </div>
    </div>
  );
}
