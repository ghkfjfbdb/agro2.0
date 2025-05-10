
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function VideoSection() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
      <Card className="bg-muted/50 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Conteúdo em Vídeo</CardTitle>
          <CardDescription className="text-base">
            Assista ao conteúdo do Globo Rural sobre as últimas tendências e inovações no setor agrícola.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            O programa Globo Rural é uma das maiores referências em conteúdo agrícola no Brasil,
            trazendo reportagens sobre as novidades e desafios do setor agropecuário.
          </p>
          <p>
            Fique atento: este é um exemplo de vídeo e não contém conteúdo com copyright 
            do programa. Para vídeos oficiais, acesse o site da Globo.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Nota: Para o conteúdo completo, visite o site oficial do Globo Rural.
          </p>
        </CardFooter>
      </Card>
      
      <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/H7HvT-0FHL4"
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
