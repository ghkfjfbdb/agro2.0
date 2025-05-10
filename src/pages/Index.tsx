
import { Navbar } from "@/components/Navbar";
import { EventCard } from "@/components/EventCard";
import { AgriLinks } from "@/components/AgriLinks";
import { VideoSection } from "@/components/VideoSection";
import { ApiSection } from "@/components/ApiSection";
import { Footer } from "@/components/Footer";

const events = [
  {
    title: "Festa da Colheita 2025",
    description: "Celebração anual da colheita com exposições, comidas típicas e apresentações culturais.",
    date: "25-27 Abril, 2025",
    location: "Ribeirão Preto, SP",
    imageUrl: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&auto=format&fit=crop",
    category: "Festival"
  },
  {
    title: "ExpoAgro Internacional",
    description: "A maior feira de tecnologia agrícola da América Latina com palestras e demonstrações.",
    date: "10-15 Junho, 2025",
    location: "São Paulo, SP",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop",
    category: "Exposição"
  },
  {
    title: "Simpósio de Agricultura Sustentável",
    description: "Evento focado em práticas agrícolas sustentáveis e preservação ambiental.",
    date: "5-7 Agosto, 2025",
    location: "Brasília, DF",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop",
    category: "Simpósio"
  },
  {
    title: "Feira do Pequeno Produtor",
    description: "Evento para pequenos produtores compartilharem experiências e venderem produtos.",
    date: "12-13 Setembro, 2025",
    location: "Goiânia, GO",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85933c084613?ixlib=rb-4.0.3&auto=format&fit=crop",
    category: "Feira"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-agro-green to-agro-green-light"
      >
        <div 
          className="absolute inset-0 bg-fixed opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="section-container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            Festividades & Eventos do Agro
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Descubra os principais eventos do setor agrícola, festivais e celebrações do campo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#eventos" 
              className="px-8 py-3 bg-white text-agro-green font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Ver Eventos
            </a>
            <a 
              href="#api" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Recursos para o Agro
            </a>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section id="eventos" className="bg-background">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Próximos Eventos & Festivais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore os principais eventos do setor agrícola com datas, locais e informações detalhadas
            </p>
          </div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sites do Agro Section */}
      <section id="sites" className="bg-muted">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Sites do Agronegócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Links para os principais portais e websites relacionados ao setor agrícola
            </p>
          </div>
          
          <AgriLinks />
        </div>
      </section>
      
      {/* Video Section */}
      <section className="bg-background">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Vídeo em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo audiovisual sobre o setor agrícola
            </p>
          </div>
          
          <VideoSection />
        </div>
      </section>
      
      {/* API and Programs Section */}
      <section id="api" className="bg-muted">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              APIs e Programas para o Agro
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos digitais e ferramentas para auxiliar no setor agrícola
            </p>
          </div>
          
          <ApiSection />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
