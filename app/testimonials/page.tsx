import { TestimonialSection } from "@/components/testimonial-section";

export default function TestimonialsPage() {
  return (
    <main className="pt-16">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about working with us.
          </p>
        </div>
      </div>
      
      <TestimonialSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">More Success Stories</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  client: "CreativeDesign Agency",
                  logo: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  quote: "The new website completely transformed our online presence. We've seen a 45% increase in leads since launch.",
                  person: "Emily Thompson, Creative Director"
                },
                {
                  client: "EcoTech Solutions",
                  logo: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  quote: "Working with NEXTWEB was seamless from start to finish. They delivered exactly what we needed, on time and on budget.",
                  person: "David Rodriguez, Founder"
                },
                {
                  client: "HealthPlus Medical",
                  logo: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  quote: "Our patients love the new online booking system. It's made a real difference to our daily operations.",
                  person: "Dr. Sarah Patel, Medical Director"
                },
                {
                  client: "Metropolitan Real Estate",
                  logo: "https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  quote: "The virtual property tours feature has been a game-changer for our business, especially during challenging times.",
                  person: "Robert Chen, Sales Director"
                }
              ].map((story, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden bg-card">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={story.logo} 
                      alt={story.client} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{story.client}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{story.person}</p>
                    <p className="italic">"{story.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}