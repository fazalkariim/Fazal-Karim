import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Hire() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("Message sent successfully. I’ll get back to you soon.");
      form.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden pt-26 pb-18">
      <div className="absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-7 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="text-3xl font-extralight tracking-tight text-white md:text-[42px]">
            Let’s Build Something{" "}
            <span className="text-gradient-primary font-light">
              Exceptional
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Share your project details and I’ll respond with the next steps as
            soon as possible.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card/70 shadow-elevated backdrop-blur-xl grid lg:grid-cols-[1.35fr_0.75fr]">
          {/* LEFT FORM */}
          <div className="bg-card/80 p-6 md:p-8 lg:p-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full border-b border-border bg-transparent pb-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b border-border bg-transparent pb-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    name="project_type"
                    required
                    defaultValue=""
                    className="w-full border-b border-border bg-card pb-2.5 text-sm text-muted-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Project Type
                    </option>
                    <option value="MERN Web App">MERN Web App</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="E-Commerce Website">
                      E-Commerce Website
                    </option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="budget"
                    required
                    placeholder="Project Budget"
                    className="w-full border-b border-border bg-transparent pb-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border-b border-border bg-transparent pb-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-glow disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending Request..." : "Send Project Inquiry"}
              </button>

              {status && (
                <p className="rounded-xl border border-primary/30 bg-primary/10 py-3 text-center text-sm text-primary">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT CONTACT INFO */}
          <aside className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary/60 to-surface p-7 md:p-8 lg:p-10">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-start">
              <h2 className="text-2xl font-medium text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm leading-relaxed text-white/75">
                      fazalkareemi142@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm leading-relaxed text-white/75">
                      +92 317_9001036
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm leading-relaxed text-white/75">
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
                {/* SOCIAL LINKS */}
                <div className="pt-2">
                  <p className="text-xl font-medium text-white mb-4">
                    Social Profiles
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/fazalkariim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/fazal-karim-462888276/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>

                    <a
                      href="https://www.instagram.com/fazall_karim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>

                    <a
                      href="https://www.facebook.com/hassnain.ali.342678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
