import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import motherNatureImage from '@/assets/mother-nature.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mother-Inspired Care",
      description: "Every product is developed with the gentle touch and protective instinct of motherhood."
    },
    {
      icon: Leaf,
      title: "Pure Botanical",
      description: "We source only the finest botanical ingredients from trusted, sustainable farms."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a community of conscious mothers who prioritize natural wellness."
    },
    {
      icon: Award,
      title: "Clinically Proven",
      description: "All our products are dermatologist-tested and clinically proven for safety and efficacy."
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded by mother of two, Dr. Sarah Chen" },
    { year: "2020", event: "First botanical skincare line launched" },
    { year: "2021", event: "Received AYUSH certification" },
    { year: "2022", event: "Reached 5,000 happy customers" },
    { year: "2023", event: "Expanded to sustainable packaging" },
    { year: "2024", event: "Celebrating 10,000+ mother community" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-botanical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 animate-fade-in-up">Our Story</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage-foreground mb-6 animate-stagger-1">
            Nurtured by Nature, Inspired by Mothers
          </h1>
          <p className="font-subheading text-lg text-muted-foreground max-w-2xl mx-auto animate-stagger-2">
            Swan Botanicals was born from a mother's desire to create safe, effective skincare 
            that honors both family and nature.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <Badge variant="secondary" className="mb-4">Founder's Story</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
                A Mother's Journey to Pure Skincare
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                When Dr. Sarah Chen became a mother, she discovered that many skincare products 
                contained harsh chemicals that she wouldn't want near her children. As a dermatologist, 
                she knew there had to be a better way.
              </p>
              <p className="font-body text-muted-foreground mb-6">
                "I wanted to create skincare that was as gentle as a mother's touch, yet as powerful 
                as nature intended. Every ingredient in Swan Botanicals is carefully selected for its 
                purity and effectiveness."
              </p>
              <p className="font-body text-muted-foreground mb-8">
                Today, Swan Botanicals serves thousands of mothers who believe that natural beauty 
                begins with natural ingredients. Our commitment to botanical purity and maternal 
                wisdom guides everything we do.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={motherNatureImage}
                  alt="Dr. Sarah Chen"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-subheading font-semibold text-sage-foreground">Dr. Sarah Chen</div>
                  <div className="font-body text-sm text-muted-foreground">Founder & Chief Formulator</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <img 
                src={motherNatureImage}
                alt="Founder story"
                className="rounded-lg shadow-lg hover-lift w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-blush/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
              What We Stand For
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Our values are rooted in the protective instincts of motherhood and the healing 
              power of nature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`hover-lift text-center animate-stagger-${index + 1} group`}>
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-sage mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300" />
                  <h3 className="font-subheading text-lg font-semibold text-sage-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
              Growing Together
            </h2>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex items-center gap-6 animate-fade-in-up group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="font-heading text-xl font-bold text-sage-foreground group-hover:text-sage transition-colors">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-sage rounded-full group-hover:scale-125 transition-transform animate-pulse-glow"></div>
                <div className="flex-1">
                  <p className="font-subheading text-muted-foreground group-hover:text-sage-foreground transition-colors">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
            Join Our Mother's Community
          </h2>
          <p className="font-body text-muted-foreground mb-8 text-lg">
            Be part of a growing community of mothers who choose natural, safe skincare for their families.
          </p>
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;