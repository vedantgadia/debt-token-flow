
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InnovationsContact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTimeout(() => {
      toast({
        title: "Inquiry submitted!",
        description: "We've received your inquiry and will contact you shortly.",
      });
      setFormSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white" id="contact-us">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-vayana-gradient text-white p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 font-display">Get in Touch</h2>
              <p className="text-lg text-gray-100 mb-8">
                Ready to explore our innovative solutions? Contact our team to learn more about how Vayana can transform your digital finance operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-200">contact@vayana.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-200">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="bg-green-100 text-green-700 p-4 rounded-full mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-center">
                    Your inquiry has been submitted successfully. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your specific requirements or questions"
                      className="w-full h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-vayana-gradient hover:opacity-90 text-white py-6">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsContact;
