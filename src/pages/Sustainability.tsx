import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Shield, Award, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Sustainability = () => {
  const certifications = [
    { icon: Shield, title: "AYUSH Certified", description: "Verified by Indian Ministry of AYUSH for natural wellness products" },
    { icon: Leaf, title: "100% Vegan", description: "No animal-derived ingredients, completely plant-based formulations" },
    { icon: Award, title: "Cruelty-Free", description: "Never tested on animals, certified by leading animal welfare organizations" },
    { icon: Recycle, title: "Eco-Packaging", description: "Recyclable containers made from post-consumer recycled materials" }
  ];

  const commitments = [
    "Zero synthetic chemicals or parabens",
    "Sustainably sourced botanical ingredients",
    "Carbon-neutral shipping practices",
    "Supporting local farming communities",
    "Biodegradable formulations",
    "Minimal environmental impact manufacturing"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-sage-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 animate-fade-in-up">Our Commitment</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage-foreground mb-6 animate-stagger-1">
            Caring for You, Caring for Earth
          </h1>
          <p className="font-subheading text-lg text-muted-foreground max-w-2xl mx-auto animate-stagger-2">
            At Swan Botanicals, sustainability isn't just a promise—it's the foundation of everything we create.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 animate-fade-in-up">Certifications</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-stagger-1">
              Trusted & Verified
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className={`hover-lift text-center animate-stagger-${index + 1} group`}>
                <CardContent className="p-6">
                  <cert.icon className="h-12 w-12 text-sage mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300" />
                  <h3 className="font-subheading text-lg font-semibold text-sage-foreground mb-3">
                    {cert.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-blush/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-fade-in-up">Our Promise</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-stagger-1">
              Environmental Commitments
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div 
                key={commitment}
                className="flex items-center gap-4 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-sage animate-pulse-glow" />
                <p className="font-subheading text-muted-foreground">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-botanical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-fade-in-up">
            Join the Sustainable Beauty Movement
          </h2>
          <p className="font-body text-muted-foreground mb-8 text-lg animate-stagger-1">
            Choose products that care for your skin and our planet.
          </p>
          <Button variant="hero" size="lg" className="animate-stagger-2">
            Shop Sustainably
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;