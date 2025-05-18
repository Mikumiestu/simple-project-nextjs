import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to discuss your project or ask any questions.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Office</h2>
            <p className="text-muted-foreground mb-8">
              Visit us at our headquarters to meet the team and discuss your project in person.
            </p>
            
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              {/* This is a placeholder for a map - in a real implementation, you would use something like Google Maps */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Interactive Map Would Be Displayed Here]
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Web Street<br />
                  Digital City, 10001<br />
                  United States
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  Main: (123) 456-7890<br />
                  Support: (123) 456-7891
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}