import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Heart, Palette, Share2, Zap } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Wedding Invitations",
    emoji: "💍",
    image: "/assets/generated/wedding-invite.dim_600x400.jpg",
    description:
      "Elegant, timeless wedding invitation designs with custom monograms, floral motifs, and romantic typography. Perfect for modern and traditional ceremonies alike.",
    features: [
      "Custom monogram design",
      "Floral & script typography",
      "Matching RSVP card",
      "Digital & printable formats",
    ],
    color: "from-blush-100 to-blush-200",
  },
  {
    title: "Birthday Invitations",
    emoji: "🎂",
    image: "/assets/generated/birthday-invite.dim_600x400.jpg",
    description:
      "Fun, vibrant birthday invitations for all ages. From kids' parties to milestone celebrations, we craft designs that build excitement and set the perfect mood.",
    features: [
      "Age-specific themes",
      "Color-matched designs",
      "Animated digital versions",
      "Bulk sharing ready",
    ],
    color: "from-lavender-100 to-lavender-200",
  },
  {
    title: "Engagement Invitations",
    emoji: "💖",
    image: "/assets/generated/engagement-invite.dim_600x400.jpg",
    description:
      "Romantic and refined engagement invitations that capture the magic of your announcement. Featuring soft palettes, gold foil effects, and elegant layouts.",
    features: [
      "Couple photo integration",
      "Gold & rose gold accents",
      "Multiple layout options",
      "24-hour delivery",
    ],
    color: "from-blush-100 to-blush-200",
  },
  {
    title: "Party Invitations",
    emoji: "🥳",
    image: "/assets/generated/party-invite.dim_600x400.jpg",
    description:
      "Bold and playful party invitations for any celebration. From garden parties to themed galas, we design invites as memorable as the event itself.",
    features: [
      "Theme-based designs",
      "Bold typography choices",
      "Event countdown included",
      "Social media compatible",
    ],
    color: "from-lavender-100 to-lavender-200",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "$5",
    desc: "Perfect for simple occasions",
    color: "bg-blush-100",
    features: [
      "1 Design concept",
      "Digital delivery (JPG/PNG)",
      "Basic text customization",
      "1 Revision",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$10",
    desc: "Most popular choice",
    color: "bg-gold/10",
    highlight: true,
    features: [
      "3 Design concepts",
      "Digital delivery (all formats)",
      "Full customization",
      "3 Revisions",
      "Priority support",
      "Animated version included",
    ],
    cta: "Choose Premium",
  },
  {
    name: "Custom",
    price: "Quote",
    desc: "For premium, bespoke designs",
    color: "bg-lavender-100",
    features: [
      "Unlimited design concepts",
      "All digital formats",
      "Complete customization",
      "Unlimited revisions",
      "Dedicated designer",
      "Rush 12-hour delivery",
    ],
    cta: "Contact Us",
  },
];

const whyUs = [
  {
    icon: <Zap size={22} />,
    title: "Affordable",
    desc: "Premium quality digital invitations starting from just $5. No hidden fees, no surprises.",
  },
  {
    icon: <Heart size={22} />,
    title: "Fast Delivery",
    desc: "Receive your finished invitation within 24 hours of placing your order.",
  },
  {
    icon: <Palette size={22} />,
    title: "Custom Designs",
    desc: "Every invitation is uniquely crafted to match your vision, theme, and personal style.",
  },
  {
    icon: <Share2 size={22} />,
    title: "Easy Sharing",
    desc: "Share instantly via WhatsApp, email, Instagram, or any platform — no printing required.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-hero-gradient py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="font-serif text-5xl font-bold text-foreground mt-2 mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to grand celebrations — we design digital
            invitations that make every occasion unforgettable.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-blush-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card overflow-hidden"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className={`bg-gradient-to-r ${s.color} p-5 flex items-center gap-3`}
                >
                  <span className="text-3xl">{s.emoji}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                </div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <Check size={14} className="text-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-lavender-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Simple & Affordable Pricing
            </h2>
            <p className="text-muted-foreground mt-4">
              Transparent pricing with no hidden costs. Choose the plan that
              suits you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-card rounded-2xl shadow-card overflow-hidden ${
                  p.highlight ? "ring-2 ring-gold scale-105" : ""
                }`}
                data-ocid={`pricing.item.${i + 1}`}
              >
                <div className={`${p.color} px-6 py-5`}>
                  {p.highlight && (
                    <span className="inline-block bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                  <div className="mt-2">
                    <span className="font-serif text-4xl font-bold text-foreground">
                      {p.price}
                    </span>
                    {p.price !== "Quote" && (
                      <span className="text-muted-foreground text-sm ml-1">
                        /design
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <Check size={14} className="text-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/order" data-ocid={`pricing.button.${i + 1}`}>
                    <Button
                      className={`w-full rounded-full uppercase tracking-wider text-xs font-semibold ${
                        p.highlight
                          ? "bg-gold text-white hover:bg-gold-dark shadow-gold"
                          : "bg-foreground text-white hover:bg-foreground/90"
                      }`}
                    >
                      {p.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blush-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">
              Our Promise
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Why Choose Us?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
                data-ocid={`why.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 text-gold rounded-2xl mb-4">
                  {w.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {w.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
