import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero, SectionHeading, Web3ContactForm } from "@/components/site-shell";
import { SocialLinks } from "@/components/social-links";
import { siteConfig, whatsappLink } from "@/data/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — Keyworld Music Institute" }, { name: "description", content: "Contact Keyworld Music Institute in Akure or online by phone, email, WhatsApp and social media." }, { property: "og:title", content: "Contact Keyworld Music Institute" }, { property: "og:description", content: "Speak with our team about music training, courses and admission." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ContactPage,
});

function ContactPage() {

  return <><PageHero eyebrow="Contact us" title="Let’s talk about your sound." description="Ask a question, choose a programme or plan your first step into professional musical training." /><section className="section-pad bg-surface"><div className="content-wrap grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Get in touch" title="We’re ready when you are." /><div className="mt-10 space-y-5 text-sm"><a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 break-all"><Mail className="mt-0.5 size-5 shrink-0 text-primary" />{siteConfig.email}</a>{siteConfig.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="flex items-center gap-4"><Phone className="size-5 text-primary" />{phone}</a>)}<div className="flex items-start gap-4"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" /><span>{siteConfig.locations.map(l => <span key={l.title} className="block">{l.title}: {l.detail}</span>)}</span></div><a href={whatsappLink("Hello Keyworld Music Institute, I would like to make an enquiry.")} target="_blank" rel="noreferrer" className="flex items-center gap-4"><MessageCircle className="size-5 text-primary" />WhatsApp {siteConfig.whatsapp}</a></div><div className="mt-10"><h2 className="mb-5 font-display text-3xl">Connect With Us</h2><SocialLinks /></div></div><Web3ContactForm /></div></section></>;
}