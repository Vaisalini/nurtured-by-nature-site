import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Leaf, Shield, Heart, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-botanical.jpg';
import ingredientsImage from '@/assets/ingredients-showcase.jpg';
import motherNatureImage from '@/assets/mother-nature.jpg';

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "99% Botanical",
      description: "Pure plant-based ingredients sourced from nature's finest gardens"
    },
    {
      icon: Shield,
      title: "Dermatologist-Verified",
      description: "Clinically tested and approved by leading dermatologists"
    },
    {
      icon: Heart,
      title: "Mother-Tested",
      description: "Developed with care by mothers, for mothers and their families"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Finally, skincare I can trust for my sensitive skin and my baby's delicate skin too!"
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "The botanical ingredients make my skin feel so nourished and calm. Absolutely love it!"
    },
    {
      name: "Rachel K.",
      rating: 5,
      text: "As a mother, I appreciate knowing exactly what's in the products I use. Pure peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6 animate-gentle-pulse">
            Nurtured by Nature, Inspired by Mothers
          </Badge>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-sage-foreground mb-6 animate-fade-in">
            Pure Botanical Skincare
            <span className="block text-botanical-foreground">For Gentle Souls</span>
          </h1>
          
          <p className="font-subheading text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Discover the power of nature with our gentle, plant-based skincare collection. 
            Crafted with love for mothers who want the best for their families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/shop">
              <Button variant="hero" size="lg" className="group hover:scale-105 transition-transform">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Our Story
              </Button>
            </Link>
          </div>
          
          {/* USPs */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-background/80 backdrop-blur-sm rounded-lg p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="h-8 w-8 text-sage mx-auto mb-3" />
                <h3 className="font-subheading font-semibold text-sage-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-botanical/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
                Born from a Mother's Love
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Swan Botanicals was founded on the belief that what we put on our skin should be as 
                pure and gentle as a mother's touch. Every product is carefully crafted with 
                botanical ingredients that nature intended.
              </p>
              <p className="font-body text-muted-foreground mb-8">
                We understand the concerns of modern mothers seeking safe, effective skincare for 
                themselves and their families. That's why every formula is dermatologist-tested, 
                cruelty-free, and made with 99% botanical ingredients.
              </p>
              <Link to="/about">
                <Button variant="botanical" size="lg" className="hover:scale-105 transition-transform">
                  Learn Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={motherNatureImage}
                alt="Mother and nature inspiration"
                className="rounded-lg shadow-lg hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg p-6 shadow-lg">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-sage-foreground">10K+</div>
                  <div className="font-body text-sm text-muted-foreground">Happy Mothers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Featured Collection</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
              Nature's Best for Your Skin
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved botanical skincare essentials, each one carefully formulated 
              with pure, natural ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Gentle Rose Cleanser",
                price: "$28",
                image: ingredientsImage,
                benefits: ["Hydrating", "Anti-aging", "Sensitive Skin"]
              },
              {
                name: "Aloe Soothing Serum",
                price: "$42",
                image: ingredientsImage,
                benefits: ["Calming", "Nourishing", "All Skin Types"]
              },
              {
                name: "Botanical Night Cream",
                price: "$52",
                image: ingredientsImage,
                benefits: ["Repairing", "Moisturizing", "Anti-aging"]
              }
            ].map((product, index) => (
              <Card key={product.name} className="hover-lift overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-subheading text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.benefits.map((benefit) => (
                      <Badge key={benefit} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-xl font-bold text-sage-foreground">
                      {product.price}
                    </span>
                    <Button variant="blush" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="hero" size="lg" className="hover:scale-105 transition-transform">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blush/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Customer Love</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
              Trusted by Mothers Everywhere
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-subheading font-semibold text-sage-foreground">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6">
            Start Your Natural Skincare Journey
          </h2>
          <p className="font-body text-muted-foreground mb-8 text-lg">
            Join thousands of mothers who have discovered the gentle power of botanical skincare. 
            Your skin deserves nothing but nature's best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="hover:scale-105 transition-transform">
                Get Free Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
