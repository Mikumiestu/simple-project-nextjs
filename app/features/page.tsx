import { FeatureSection } from "@/components/feature-section";

export default function FeaturesPage() {
  return (
    <main className="pt-16">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Features</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful capabilities that make our websites stand out from the competition.
          </p>
        </div>
      </div>
      
      <FeatureSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What technologies do you use to build websites?",
                  answer: "We use modern web technologies like React, Next.js, and Tailwind CSS to create fast, responsive, and visually appealing websites that provide an excellent user experience."
                },
                {
                  question: "How long does it typically take to build a website?",
                  answer: "The timeline varies depending on the complexity of the project. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months or more."
                },
                {
                  question: "Do you provide ongoing maintenance and support?",
                  answer: "Yes, we offer maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally."
                },
                {
                  question: "Can you help with SEO and digital marketing?",
                  answer: "Absolutely! We build websites with SEO best practices in mind and can provide additional digital marketing services to help drive traffic and generate leads."
                },
                {
                  question: "Are your websites mobile-friendly?",
                  answer: "Yes, all our websites are built with a mobile-first approach, ensuring they look great and function perfectly on all devices, from smartphones to desktops."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
