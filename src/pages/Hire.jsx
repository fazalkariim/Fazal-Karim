import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Hire() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.log(error);

      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-light mb-4">
          Hire Me
        </h1>

        <p className="text-muted-foreground mb-10">
          Tell me about your project and I'll get back to you shortly.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full p-4 rounded-xl bg-card border border-border"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-xl bg-card border border-border"
          />

          <input
            type="text"
            name="project_type"
            placeholder="Project Type"
            required
            className="w-full p-4 rounded-xl bg-card border border-border"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget"
            required
            className="w-full p-4 rounded-xl bg-card border border-border"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Project Details..."
            required
            className="w-full p-4 rounded-xl bg-card border border-border"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-white font-medium"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-primary">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}