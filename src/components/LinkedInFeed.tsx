import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LinkedInFeed = () => {
  // Placeholder data for LinkedIn posts
  const placeholderPosts = [
    {
      id: 1,
      title: "Latest insights on debt tokenization and capital markets transformation",
      excerpt: "Discover how blockchain technology is revolutionizing traditional finance...",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Supply Chain Finance: Enabling Deep-Tier Supplier Financing",
      excerpt: "Exploring innovative solutions for multi-tier supply chain financing...",
      date: "1 week ago",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "The Future of Trade Finance: Digital Documentation and MLETR",
      excerpt: "How digital trade documents are transforming international commerce...",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Linkedin className="mr-2 h-4 w-4" />
              Stay Connected
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Latest from LinkedIn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our latest insights, industry updates, and thought leadership content.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {placeholderPosts.map((post, index) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                      Read more
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Placeholder Integration Notice */}
            <div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                LinkedIn Integration Coming Soon
              </h3>
              <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                This section will display live LinkedIn posts from Vayana Debt Platform. 
                Currently showing placeholder content for design preview.
              </p>
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
                onClick={() => window.open('https://www.linkedin.com/company/vayana-debt-platform', '_blank')}
              >
                Visit Our LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;