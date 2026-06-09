// import { SectionHeader } from "../SectionHeader.jsx";
// import { Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     quote: "Fazal delivered our SaaS dashboard in record time. His attention to detail and architectural choices saved us months of refactoring later.",
//     name: "Sarah Lin",
//     role: "CTO, Nimbus",
//   },
//   {
//     quote: "Working with Fazal was effortless. He understood the product, asked the right questions, and shipped clean, scalable code.",
//     name: "David Okafor",
//     role: "Founder, Forge",
//   },
//   {
//     quote: "One of the most reliable developers I've worked with. He thinks like a product engineer, not just a coder.",
//     name: "Mira Hassan",
//     role: "PM, AuthCore",
//   },
// ];

// export function Testimonials() {
//   return (
//     <section className="relative py-15 lg:py-15 ">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <SectionHeader eyebrow="Testimonials" title="What clients" highlight="say." />
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {testimonials.map((t) => (
//             <div key={t.name} className="group relative p-7 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all">
//               <Quote className="w-8 h-8 text-primary/30 mb-4" />
//               <p className="text-foreground/90 font-light leading-relaxed mb-6">"{t.quote}"</p>
//               <div className="flex items-center justify-between pt-5 border-t border-border">
//                 <div>
//                   <p className="font-medium text-sm">{t.name}</p>
//                   <p className="text-xs text-muted-foreground">{t.role}</p>
//                 </div>
//                 <div className="flex gap-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
