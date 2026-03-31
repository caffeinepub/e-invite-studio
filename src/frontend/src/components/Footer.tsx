import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-script text-3xl text-gold">
              E-Invite Studio
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Beautiful digital invitation cards for every occasion — crafted
              with love and delivered instantly.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span>+91 9676507543</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <a
                  href="mailto:studioeinvitesss@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  studioeinvitesss@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-gold" />
                <a
                  href="https://instagram.com/einvite_studi0"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @einvite_studi0
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
