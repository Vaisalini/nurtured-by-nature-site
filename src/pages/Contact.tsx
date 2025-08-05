import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@swanbotanicals.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Botanical Lane, Nature Valley, CA 90210",
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Customer Care",
      details: "24/7 Support",
      subtitle: "Always here to help"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-botanical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 animate-fade-in-up">Get in Touch</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage-foreground mb-6 animate-stagger-1">
            We'd Love to Hear From You
          </h1>
          <p className="font-subheading text-lg text-muted-foreground max-w-2xl mx-auto animate-stagger-2">
            Have questions about our products or need personalized skincare advice? Our mother-founded team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className={`hover-lift text-center animate-stagger-${index + 1} group`}>
                <CardContent className="p-6">
                  <info.icon className="h-10 w-10 text-sage mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300" />
                  <h3 className="font-subheading text-lg font-semibold text-sage-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-1">
                    {info.details}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-blush/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-fade-in-up">Send a Message</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-stagger-1">
              Let's Start a Conversation
            </h2>
          </div>
          
          <Card className="hover-lift animate-fade-in-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-left">
                    <Label htmlFor="firstName" className="font-subheading">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="mt-2"
                    />
                  </div>
                  <div className="animate-fade-in-right">
                    <Label htmlFor="lastName" className="font-subheading">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="animate-stagger-1">
                  <Label htmlFor="email" className="font-subheading">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                
                <div className="animate-stagger-2">
                  <Label htmlFor="subject" className="font-subheading">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="mt-2"
                  />
                </div>
                
                <div className="animate-stagger-3">
                  <Label htmlFor="message" className="font-subheading">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="mt-2"
                  />
                </div>
                
                <div className="text-center animate-stagger-4">
                  <Button type="submit" variant="hero" size="lg" className="hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 animate-fade-in-up">Quick Answers</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-stagger-1">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Are your products safe for sensitive skin?",
                answer: "Yes! All our products are dermatologist-tested and formulated specifically for sensitive skin, including children's delicate skin."
              },
              {
                question: "How long does shipping take?",
                answer: "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, with express options available."
              },
              {
                question: "Do you offer product consultations?",
                answer: "Absolutely! Our founder Dr. Sarah Chen and her team offer personalized skincare consultations to help you find the perfect routine."
              }
            ].map((faq, index) => (
              <Card key={faq.question} className={`hover-lift animate-stagger-${index + 1} group`}>
                <CardContent className="p-6">
                  <h3 className="font-subheading text-lg font-semibold text-sage-foreground mb-3 group-hover:text-sage transition-colors">
                    {faq.question}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;