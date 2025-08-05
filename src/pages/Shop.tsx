import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List, Search, Heart, ShoppingBag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ingredientsImage from '@/assets/ingredients-showcase.jpg';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkinType, setSelectedSkinType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'treatments', name: 'Treatments' }
  ];

  const skinTypes = [
    { id: 'all', name: 'All Skin Types' },
    { id: 'sensitive', name: 'Sensitive' },
    { id: 'dry', name: 'Dry' },
    { id: 'oily', name: 'Oily' },
    { id: 'combination', name: 'Combination' }
  ];

  const products = [
    {
      id: 1,
      name: "Gentle Rose Cleanser",
      price: 28,
      originalPrice: 35,
      image: ingredientsImage,
      category: "cleansers",
      skinType: "sensitive",
      benefits: ["Hydrating", "Anti-aging", "Sensitive Skin"],
      description: "A luxurious cleanser infused with organic rose petals and chamomile.",
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: "Aloe Soothing Serum",
      price: 42,
      originalPrice: null,
      image: ingredientsImage,
      category: "serums",
      skinType: "all",
      benefits: ["Calming", "Nourishing", "All Skin Types"],
      description: "Pure aloe vera serum that instantly soothes and hydrates your skin.",
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "Botanical Night Cream",
      price: 52,
      originalPrice: 65,
      image: ingredientsImage,
      category: "moisturizers",
      skinType: "dry",
      benefits: ["Repairing", "Moisturizing", "Anti-aging"],
      description: "Rich night cream with botanical oils for overnight skin repair.",
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      name: "Vitamin C Brightening Serum",
      price: 38,
      originalPrice: null,
      image: ingredientsImage,
      category: "serums",
      skinType: "combination",
      benefits: ["Brightening", "Antioxidant", "Even Tone"],
      description: "Natural vitamin C from kakadu plum for radiant, even-toned skin.",
      isNew: true,
      isBestseller: false
    },
    {
      id: 5,
      name: "Lavender Calming Toner",
      price: 24,
      originalPrice: null,
      image: ingredientsImage,
      category: "treatments",
      skinType: "sensitive",
      benefits: ["Calming", "Balancing", "Hydrating"],
      description: "Gentle toner with lavender and rose water to balance your skin's pH.",
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: "Green Tea Purifying Mask",
      price: 32,
      originalPrice: 40,
      image: ingredientsImage,
      category: "treatments",
      skinType: "oily",
      benefits: ["Purifying", "Detox", "Oil Control"],
      description: "Weekly mask with green tea and clay to purify and refresh your skin.",
      isNew: false,
      isBestseller: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const skinTypeMatch = selectedSkinType === 'all' || product.skinType === selectedSkinType || product.skinType === 'all';
    return categoryMatch && skinTypeMatch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-botanical-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6">Shop Collection</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sage-foreground mb-6">
            Pure Botanical Skincare
          </h1>
          <p className="font-subheading text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of gentle, effective skincare crafted with nature's finest ingredients.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Skin Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {skinTypes.map((skinType) => (
                <Button
                  key={skinType.id}
                  variant={selectedSkinType === skinType.id ? "botanical" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSkinType(skinType.id)}
                >
                  {skinType.name}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 border border-sage/30 rounded-md">
              <Button
                variant={viewMode === 'grid' ? "hero" : "ghost"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "hero" : "ghost"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <p className="font-body text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover-lift overflow-hidden group">
                <div className="relative">
                  <div className={`${viewMode === 'grid' ? 'aspect-square' : 'aspect-video md:aspect-square'} overflow-hidden`}>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge variant="secondary" className="text-xs">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge variant="default" className="text-xs">Bestseller</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="outline" className="text-xs">Sale</Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className={`${viewMode === 'list' ? 'flex gap-6 items-center' : ''}`}>
                    <div className="flex-1">
                      <h3 className="font-subheading text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-heading text-xl font-bold text-sage-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-body text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="blush" size="sm" className="flex-1">
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        {viewMode === 'list' && (
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-botanical/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-sage-foreground mb-2">Free Shipping</div>
              <p className="font-body text-muted-foreground">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-sage-foreground mb-2">30-Day Returns</div>
              <p className="font-body text-muted-foreground">Money-back guarantee</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-sage-foreground mb-2">Expert Support</div>
              <p className="font-body text-muted-foreground">Skincare consultation available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;