export default function AboutPage() {
  return (
    <main className="pt-16">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate web developers and designers dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Founded in 2020, NEXTWEB began with a simple mission: to create beautiful, functional websites that deliver real results for our clients.
                </p>
                <p>
                  Our team brings together experts in design, development, user experience, and digital strategy. We believe that great websites are more than just pretty interfaces – they're powerful tools that solve problems and drive business growth.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each client's unique needs and goals. We don't believe in one-size-fits-all solutions. Instead, we craft custom digital experiences that align perfectly with your brand and objectives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-40 rounded-lg overflow-hidden shadow-xl hidden md:block">
                <img
                  src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design discussion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from design and development to client communication and support."
              },
              {
                title: "Innovation",
                description: "We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve."
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from close collaboration with our clients and within our team."
              },
              {
                title: "Integrity",
                description: "We're honest, transparent, and committed to doing what's right for our clients, even when it's challenging."
              },
              {
                title: "Results-Focused",
                description: "We measure our success by the results we deliver for our clients, not just by the beauty of our work."
              },
              {
                title: "Continuous Learning",
                description: "In our fast-paced industry, we're committed to continuous learning and improvement to stay at the forefront."
              }
            ].map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 15 years in web development, Alex leads our vision and strategy."
              },
              {
                name: "Sarah Chen",
                role: "Lead Designer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Sarah's award-winning designs have helped countless brands stand out online."
              },
              {
                name: "Michael Rodriguez",
                role: "Senior Developer",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Michael's technical expertise ensures our websites are fast, secure, and reliable."
              },
              {
                name: "Emily Wilson",
                role: "Project Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Emily keeps our projects on track and ensures clear communication with clients."
              }
            ].map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}