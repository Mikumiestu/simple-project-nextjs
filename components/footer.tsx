import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">NEXTWEB</h3>
            <p className="text-sm text-muted-foreground">
              Creating beautiful and functional websites that elevate your brand and engage your audience.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Features", "Testimonials", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  123 Web Street, Digital City, 10001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">hello@nextweb.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm rounded-md border border-border bg-background"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NEXTWEB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}