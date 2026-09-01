import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Founders } from "@/components/sections/founders";
import { Products } from "@/components/sections/products";
import { Impact } from "@/components/sections/impact";
import { GlobalReach } from "@/components/sections/global-reach";
import { News } from "@/components/sections/news";
import { Partner } from "@/components/sections/partner";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Products />
        <Founders />
        <Impact />
        <GlobalReach />
        <News />
        <Partner />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}
