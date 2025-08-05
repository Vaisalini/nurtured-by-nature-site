import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Clock, User, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ingredientsImage from '@/assets/ingredients-showcase.jpg';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Natural Ingredients for Glowing Skin",
      excerpt: "Discover the power of botanical ingredients that can transform your skincare routine naturally.",
      author: "Dr. Sarah Chen",
      readTime: "4 min read",
      category: "Ingredients",
      image: ingredientsImage
    },
    {
      title: "Morning Skincare Ritual for Busy Mothers",
      excerpt: "A gentle, effective morning routine that fits into your busy schedule while nurturing your skin.",
      author: "Emma Williams",
      readTime: "3 min read",
      category: "Routines",
      image: ingredientsImage
    },
    {
      title: "Understanding Sensitive Skin in Children",
      excerpt: "How to identify and care for sensitive skin in children using gentle, natural products.",
      author: "Dr. Sarah Chen",
      readTime: "6 min read",
      category: "Family Care",
      image: ingredientsImage
    },
    {
      title: "The Science Behind Botanical Skincare",
      excerpt: "Learn how plant-based ingredients work at a molecular level to heal and protect your skin.",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      category: "Science",
      image: ingredientsImage
    },
    {
      title: "Seasonal Skincare: Adapting to Weather Changes",
      excerpt: "Adjust your skincare routine naturally as seasons change to maintain healthy, balanced skin.",
      author: "Lisa Park",
      readTime: "4 min read",
      category: "Seasonal",
      image: ingredientsImage
    },
    {
      title: "DIY Natural Face Masks for Every Skin Type",
      excerpt: "Simple, effective face mask recipes using ingredients from your kitchen and garden.",
      author: "Emma Williams",
      readTime: "7 min read",
      category: "DIY",
      image: ingredientsImage
    }
  ];

  const categories = ["All", "Ingredients", "Routines", "Family Care", "Science", "Seasonal", "DIY"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-blush-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 animate-fade-in-up">Knowledge Hub</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage-foreground mb-6 animate-stagger-1">
            Natural Beauty Wisdom
          </h1>
          <p className="font-subheading text-lg text-muted-foreground max-w-2xl mx-auto animate-stagger-2">
            Expert insights, tips, and rituals for your natural skincare journey.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between animate-fade-in-up">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={category} 
                  variant={index === 0 ? "default" : "outline"} 
                  size="sm"
                  className="animate-stagger-1 hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.title} className={`hover-lift cursor-pointer animate-stagger-${index % 4 + 1} group overflow-hidden`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-subheading text-xl font-semibold text-sage-foreground mb-3 group-hover:text-sage transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-sage-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-foreground mb-6 animate-fade-in-up">
            Stay Updated
          </h2>
          <p className="font-body text-muted-foreground mb-8 text-lg animate-stagger-1">
            Get the latest natural beauty tips and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-stagger-2">
            <Input 
              placeholder="Enter your email..." 
              className="flex-1"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;