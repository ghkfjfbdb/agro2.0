
import { CalendarDays, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  category: string;
}

export function EventCard({ title, description, date, location, imageUrl, category }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <Badge 
          className="absolute top-2 right-2 bg-agro-green text-white" 
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>{date}</span>
        </CardDescription>
        <CardDescription className="flex items-center gap-1 text-sm">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto pt-2 gap-2 flex-col sm:flex-row">
        <Button className="w-full" variant="outline">Ver Detalhes</Button>
        <Button 
          className="w-full flex items-center gap-1" 
          variant="secondary"
          onClick={() => window.open("https://calendar.google.com/calendar/u/0/r/eventedit", "_blank")}
        >
          <Calendar className="h-4 w-4" />
          <span>Adicionar ao Calendário</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
