import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Palette, Share2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const collections = [
  {
    title: "Wedding Invitations",
    description:
      "Elegant, timeless designs for your perfect wedding day. Custom monograms and floral motifs.",
    image: "/assets/generated/wedding-invite.dim_600x400.jpg",
    emoji: "💍",
    color: "bg-blush-100",
  },
  {
    title: "Birthday Invitations",
    description:
      "Fun, vibrant cards that set the tone for an unforgettable birthday celebration.",
    image: "/assets/generated/birthday-invite.dim_600x400.jpg",
    emoji: "🎂",
    color: "bg-lavender-100",
  },
  {
    title: "Engagement Invitations",
    description:
      "Romantic and refined designs to announce your special engagement to loved ones.",
    image: "/assets/generated/engagement-invite.dim_600x400.jpg",
    emoji: "💖",
    color: "bg-blush-100",
  },
  {
    title: "Party Invitations",
    description:
      "Bold, playful cards for any celebration — from casual gatherings to grand galas.",
    image: "/assets/generated/party-invite.dim_600x400.jpg",
    emoji: "🥳",
    color: "bg-lavender-100",
  },
];

const steps = [
  {
    icon: "✏️",
    step: "01",
    title: "Fill Your Details",
    desc: "Tell us about your event — date, theme, and any personal touches you'd like included.",
  },
  {
    icon: "🎨",
    step: "02",
    title: "We Design It",
    desc: "Our designers craft a stunning digital invite tailored to your style within 24 hours.",
  },
  {
    icon: "📲",
    step: "03",
    title: "Share & Celebrate",
    desc: "Receive your invite digitally and share via WhatsApp, email, or social media instantly.",
  },
];

const features = [
  {
    icon: <Sparkles size={20} />,
    title: "Affordable Pricing",
    desc: "Premium designs starting from just $5",
  },
  {
    icon: <Clock size={20} />,
    title: "Fast Delivery",
    desc: "Your invite ready in 24 hours or less",
  },
  {
    icon: <Palette size={20} />,
    title: "Custom Designs",
    desc: "Fully personalized to match your vision",
  },
  {
    icon: <Share2 size={20} />,
    title: "Easy Sharing",
    desc: "Share digitally across all platforms instantly",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-gold font-sans text-sm font-semibold uppercase tracking-widest mb-4">
                ✦ Digital Invitation Cards
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Celebrate Every <span className="text-gold italic">Moment</span>{" "}
                in Style
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Beautiful, custom digital invitation cards for weddings,
                birthdays, engagements, and more. Designed with love, delivered
                instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/order" data-ocid="hero.primary_button">
                  <Button className="bg-gold text-white hover:bg-gold-dark shadow-gold rounded-full px-8 py-3 h-auto text-sm font-semibold uppercase tracking-wider">
                    Order Now <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services" data-ocid="hero.secondary_button">
                  <Button
                    variant="outline"
                    className="border-gold/40 text-gold hover:bg-gold/5 rounded-full px-8 py-3 h-auto text-sm font-semibold uppercase tracking-wider"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-lavender-gradient rounded-3xl opacity-50 -rotate-3 scale-105" />
                <img
                  src="/assets/generated/wedding-invite.dim_600x400.jpg"
                  alt="Wedding invitation example"
                  className="relative rounded-2xl shadow-card w-full object-cover"
                  loading="eager"
                />
                <img
                  src="/assets/generated/birthday-invite.dim_600x400.jpg"
                  alt="Birthday invitation example"
                  className="absolute -bottom-6 -left-6 w-44 rounded-xl shadow-card border-2 border-white rotate-3"
                  loading="eager"
                />
                <img
                  src="/assets/generated/engagement-invite.dim_600x400.jpg"
                  alt="Engagement invitation example"
                  className="absolute -top-6 -right-4 w-36 rounded-xl shadow-card border-2 border-white -rotate-2"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-foreground py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 text-white">
                <span className="mt-0.5 text-gold">{f.icon}</span>
                <div>
                  <p className="font-sans text-sm font-semibold">{f.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section
        className="py-20 bg-blush-gradient"
        data-ocid="collections.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">
              Our Collections
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Our Invitation Collections
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Discover our range of beautifully crafted invitation styles for
              every special occasion.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-gold transition-shadow group"
                data-ocid={`collections.item.${i + 1}`}
              >
                <div className={`${c.color} p-4 flex items-center gap-3`}>
                  <span className="text-2xl">{c.emoji}</span>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {c.title}
                  </h3>
                </div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {c.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-3 hover:gap-2 transition-all"
                    data-ocid={`collections.link.${i + 1}`}
                  >
                    View Designs <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-lavender-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Simple 3-Step Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
                data-ocid={`process.item.${i + 1}`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="inline-block bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Step {s.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-script text-4xl text-gold">
              Ready to celebrate?
            </span>
            <h2 className="font-serif text-4xl font-bold text-white mt-3 mb-5">
              Order Your Custom Invite Today
            </h2>
            <p className="text-white/60 mb-8 text-base">
              Get a beautifully designed digital invitation in as little as 24
              hours.
            </p>
            <Link to="/order" data-ocid="cta.primary_button">
              <Button className="bg-gold text-white hover:bg-gold-dark shadow-gold rounded-full px-10 py-3 h-auto text-sm font-semibold uppercase tracking-wider">
                Get a Quote <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
