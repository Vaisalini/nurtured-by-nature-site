import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sage/10 border-t border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-heading text-2xl font-bold text-sage-foreground mb-4">
                Swan Botanicals
              </h3>
              <p className="font-body text-muted-foreground max-w-md">
                Nurtured by Nature, Inspired by Mothers. We create gentle, plant-based skincare 
                that's safe, effective, and beautifully natural.
              </p>
            </div>
            
            {/* USPs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-botanical/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-botanical-foreground">99% Botanical</span>
              </div>
              <div className="bg-blush/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-blush-foreground">0% Synthetic Chemicals</span>
              </div>
              <div className="bg-sage/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-sage-foreground">Dermatologist-Verified</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-subheading text-lg font-semibold mb-3">Stay Connected</h4>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-sage/30 bg-background/50 focus:outline-none focus:ring-2 focus:ring-sage"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subheading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/shop', label: 'Shop' },
                { href: '/sustainability', label: 'Sustainability' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="font-body text-muted-foreground hover:text-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-subheading text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Shipping & Returns' },
                { href: '#', label: 'Size Guide' },
                { href: '#', label: 'FAQ' },
                { href: '#', label: 'Track Your Order' },
                { href: '#', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-muted-foreground hover:text-sage transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-sage/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-body text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-blush fill-current" />
            <span className="font-body text-muted-foreground">for mothers and nature</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-sage transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-sage transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-sage transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-sage transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Swan Botanicals. All rights reserved. Certified cruelty-free and sustainably sourced.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;