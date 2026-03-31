import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Instagram, Loader2, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 9676507543",
    href: "tel:+919676507543",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "studioeinvitesss@gmail.com",
    href: "mailto:studioeinvitesss@gmail.com",
  },
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    value: "@einvite_studi0",
    href: "https://instagram.com/einvite_studi0",
  },
];

export default function OrderPage() {
  const { actor, isFetching } = useActor();
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      return actor.submitOrder(name, eventType, eventDate, message);
    },
    onSuccess: () => {
      setSuccess(true);
      setName("");
      setEventType("");
      setEventDate("");
      setMessage("");
      toast.success("Your order has been submitted! We'll be in touch soon.");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !eventType || !eventDate) {
      toast.error("Please fill in all required fields.");
      return;
    }
    mutation.mutate();
  };

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
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl font-bold text-foreground mt-2 mb-4">
            Order Your Invite
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and we'll get back to you with a custom
            design quote within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-blush-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Order Your Custom Digital Invite
                </h2>

                {success ? (
                  <div
                    className="text-center py-12"
                    data-ocid="order.success_state"
                  >
                    <CheckCircle2
                      size={56}
                      className="text-gold mx-auto mb-4"
                    />
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your order has been received. We'll reach out within 24
                      hours.
                    </p>
                    <Button
                      onClick={() => setSuccess(false)}
                      className="bg-gold text-white hover:bg-gold-dark rounded-full px-8 uppercase tracking-wider text-xs font-semibold"
                      data-ocid="order.secondary_button"
                    >
                      Place Another Order
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl border-border focus:border-gold focus:ring-gold"
                        data-ocid="order.input"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="eventType"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Event Type <span className="text-destructive">*</span>
                      </Label>
                      <Select value={eventType} onValueChange={setEventType}>
                        <SelectTrigger
                          id="eventType"
                          className="rounded-xl border-border"
                          data-ocid="order.select"
                        >
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">💍 Wedding</SelectItem>
                          <SelectItem value="birthday">🎂 Birthday</SelectItem>
                          <SelectItem value="engagement">
                            💖 Engagement
                          </SelectItem>
                          <SelectItem value="party">🥳 Party</SelectItem>
                          <SelectItem value="other">✨ Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="eventDate"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Event Date <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="rounded-xl border-border focus:border-gold focus:ring-gold"
                        data-ocid="order.input"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground/80 mb-1.5 block"
                      >
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your vision, color preferences, or any special requests..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="rounded-xl border-border focus:border-gold focus:ring-gold resize-none"
                        data-ocid="order.textarea"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={mutation.isPending || isFetching}
                      className="w-full bg-gold text-white hover:bg-gold-dark shadow-gold rounded-full py-3 h-auto uppercase tracking-wider text-xs font-semibold"
                      data-ocid="order.submit_button"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />{" "}
                          Submitting...
                        </>
                      ) : (
                        "Get a Quote"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              {/* Contact info */}
              <div className="bg-lavender-gradient rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Contact Us Directly
                </h3>
                <ul className="space-y-5">
                  {contactItems.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-4"
                      data-ocid="contact.item"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          target={
                            item.label === "Instagram" ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="text-foreground font-semibold hover:text-gold transition-colors text-sm"
                          data-ocid="contact.link"
                        >
                          {item.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preview image */}
              <div className="bg-lavender-gradient rounded-2xl p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Sample Invitation Preview
                </h3>
                <img
                  src="/assets/generated/wedding-invite.dim_600x400.jpg"
                  alt="Sample invitation preview"
                  className="w-full rounded-xl shadow-soft object-cover"
                  loading="lazy"
                />
                <p className="text-muted-foreground text-xs mt-3 text-center">
                  Your design will be fully customized to match your vision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
