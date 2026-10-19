import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { LevelsGrid, ProgrammeGrid } from "@/components/course-sections";
import { SectionHeading, Web3ContactForm } from "@/components/site-shell";
import { SocialLinks } from "@/components/social-links";
import { freeTraining, homeStatements, instruments, instrumentImages, siteConfig, siteCopy, whatsappLink } from "@/data/site-content";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Keyworld Music Institute — Professional Musical Mastery" }, { name: "description", content: "Professional music training in Akure and online, from absolute beginner to industry-ready musician. Explore programmes, instruments and enrollment." }, { property: "og:title", content: "Keyworld Music Institute" }, { property: "og:description", content: "Your gateway to professional musical mastery, from your first note to advanced performance." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: HomePage,
});
function HomePage() {
  const root = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduced.matches) setVideoReady(true);
    const nodes = root.current?.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }); }, { threshold: .12 });
    nodes?.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <div ref={root} className="home-scenes">
    <section className="scene scene-hero isolate flex items-end px-5 pb-14 pt-28 lg:px-10 lg:pb-20">
      <img src={siteConfig.assets.hero} alt="Electric bass guitar in a music studio" width={1920} height={1088} fetchPriority="high" className="scene-image hero-image" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="content-wrap grid items-end gap-10 lg:grid-cols-[1fr_auto]"><div className="animate-rise"><p className="mb-5 text-xs font-bold uppercase text-primary">{siteConfig.brand}</p><h1 className="hero-title max-w-4xl font-display text-hero-foreground">{siteCopy.hero}</h1><Button asChild variant="glass" size="xl" className="mt-8"><a href="#discover">{siteCopy.learnMore} <ArrowDown /></a></Button></div><span className="hidden text-xs uppercase text-hero-muted lg:block [writing-mode:vertical-rl]">Akure · Online · Worldwide</span></div>
    </section>
    <section id="discover" className="scene scene-video isolate overflow-hidden bg-deep" aria-label="Music performance scene">
      <img src={siteConfig.assets.room} width={1920} height={1088} alt="" className="scene-image" />
      {videoReady && <iframe title="Decorative music performance video" tabIndex={-1} src={siteConfig.videoBackground} className="video-background" allow="autoplay; encrypted-media" referrerPolicy="strict-origin-when-cross-origin" />}
    </section>
    <section className="scene scene-statements isolate flex items-center px-5 py-28 lg:px-10">
      <img src={siteConfig.assets.room} loading="lazy" width={1920} height={1088} alt="A room with piano, guitars, violin, brass instruments and drums" className="scene-image" />
      <div className="absolute inset-0 -z-10 bg-deep/35" />
      <div className="content-wrap grid gap-5 md:grid-cols-2">{homeStatements.map((statement,index) => <article key={statement} className="reveal statement-panel min-h-52 border border-hero-foreground/25 bg-deep/75 p-7 text-deep-foreground backdrop-blur-md lg:p-9"><span className="text-xs font-bold text-primary">0{index+1}</span><p className="mt-8 font-display text-2xl leading-tight sm:text-3xl">{statement}</p></article>)}</div>
    </section>
    <section className="relative z-20 bg-deep px-5 py-20 lg:px-10" aria-label="Music institute gallery"><div className="content-wrap grid gap-4 md:grid-cols-3">{siteConfig.assets.mentorSlots.map((image,index) => <div key={index} className={`mentor-slot mentor-slot-${index+1} reveal`}><img src={image} loading="lazy" width={1080} height={810} alt={siteConfig.mentorAlt[index]} /></div>)}</div></section>
    <div className="relative z-20"><section className="relative isolate bg-primary px-5 py-16 text-primary-foreground lg:px-10"><img src={freeTraining.heroImage} loading="lazy" width={1920} height={1088} alt="Tertiary institution students walking on a campus" className="absolute inset-0 -z-20 size-full object-cover" /><div className="absolute inset-0 -z-10 bg-primary/92" /><div className="content-wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.28em]">Community initiative</p><h2 className="mt-3 max-w-4xl font-display text-3xl leading-tight sm:text-5xl">{freeTraining.title}</h2></div><Button asChild size="xl" className="bg-deep text-deep-foreground hover:bg-deep/90"><Link to="/free-training">Explore free training <ArrowRight /></Link></Button></div></section><ProgrammeGrid home />
    <section className="section-pad bg-background"><div className="content-wrap"><SectionHeading eyebrow="Find your sound" title={siteCopy.instrumentsTitle} /><div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-3">{instruments.map((instrument,index) => <article key={instrument} className="group reveal"><div className="instrument-image relative aspect-[4/3] overflow-hidden bg-card"><img src={instrumentImages[instrument]} loading="lazy" width={1000} height={1000} alt={instrument} className={`size-full transition-transform duration-700 group-hover:scale-105 ${["Flute","Saxophone","Trumpet","Drums","Talking Drum"].includes(instrument) ? "object-contain p-4" : "object-cover"}`} /></div><div className="border-b border-border pb-5 pt-4"><span className="text-xs text-primary">0{index+1}</span><h3 className="mt-2 font-display text-2xl sm:text-3xl">{instrument}</h3><Button asChild variant="link" className="mt-2 h-auto px-0"><Link to="/courses" search={{ programme: "Musical Instrument Training", instrument }}>{siteCopy.enrol} <ArrowRight className="size-4" /></Link></Button></div></article>)}</div></div></section>
    <LevelsGrid />
    <section className="section-pad bg-primary text-primary-foreground"><div className="content-wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-4xl font-display text-5xl leading-none sm:text-7xl">{siteCopy.cta}</h2><Button asChild size="xl" className="bg-deep text-deep-foreground hover:bg-deep/90"><Link to="/enrol">{siteCopy.enrolNow} <ArrowRight /></Link></Button></div></section>
    <section className="section-pad bg-surface"><div className="content-wrap"><SectionHeading eyebrow="Training Locations" title={siteCopy.locationsTitle} /><div className="mt-12 grid gap-8 md:grid-cols-3">{siteConfig.locations.map((location,index) => <article key={location.title} className="reveal border-t border-border pt-7"><MapPin className="size-6 text-primary" /><p className="mt-6 text-xs text-muted-foreground">{index < 2 ? `Physical Location ${index+1}` : "Online"}</p><h3 className="mt-2 font-display text-3xl">{location.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{location.detail}</p></article>)}</div></div></section>
    <section className="bg-deep py-16 text-deep-foreground"><div className="content-wrap flex flex-wrap items-center justify-between gap-8"><h2 className="font-display text-4xl">Connect with Us</h2><SocialLinks /></div></section>
    <section className="section-pad bg-background"><div className="content-wrap grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Get in Touch" title={siteCopy.contactTitle} /><div className="mt-8 space-y-3 text-sm text-muted-foreground">{siteConfig.phones.map(phone => <a key={phone} href={`tel:${phone}`} className="block">{phone}</a>)}<a href={`mailto:${siteConfig.email}`} className="block break-all">{siteConfig.email}</a><a href={whatsappLink("Hello Keyworld Music Institute, I would like to make an enquiry.")} target="_blank" rel="noreferrer" className="block">WhatsApp {siteConfig.whatsapp}</a></div></div><Web3ContactForm /></div></section>
    </div>
  </div>;
}
