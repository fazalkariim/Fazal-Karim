import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    <section className="relative min-h-screen overflow-hidden px-5 py-24">
      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-9 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for freelance projects
          </div>
 
          <h1 className="text-3xl font-extralight tracking-tight text-white md:text-[44px]">
            Let’s Build Something <span></span>
            <span className=" text-gradient-primary font-light">
               Exceptional
            </span>
          </h1>

          <p className="mx-auto mt-1 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Share your project details and I’ll respond with the next steps as
            soon as possible.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl md:p-8"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Full Name"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <input
            type="email"
            name="user_email"
            required
            placeholder="Email Address"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <select
            name="project_type"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select Project Type
            </option>
            <option value="MERN Web App">MERN Web App</option>
            <option value="SaaS Platform">SaaS Platform</option>
            <option value="Admin Dashboard">Admin Dashboard</option>
            <option value="E-Commerce Website">E-Commerce Website</option>
            <option value="AI Integration">AI Integration</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="budget"
            required
            defaultValue=""
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select Budget Range
            </option>
            <option value="$100 - $300">$100 - $300</option>
            <option value="$300 - $700">$300 - $700</option>
            <option value="$700 - $1500">$700 - $1500</option>
            <option value="$1500+">$1500+</option>
          </select>

          <textarea
            rows="5"
            name="message"
            required
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            disabled={loading}
            type="submit"
            className="h-12 w-full rounded-xl bg-primary font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,119,255,0.35)] disabled:opacity-60"
          >
            {loading ? "Sending Request..." : "Send Project Inquiry"}
          </button>

          {status && (
            <p className="rounded-xl border border-primary/30 bg-primary/10 py-3 text-center text-sm text-primary">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}