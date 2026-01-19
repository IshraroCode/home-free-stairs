import { e as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$ConactSection } from '../chunks/ConactSection_CdUKwcOQ.mjs';
import heroImage from '../chunks/hero-image_DvC7lH1A.mjs';
import 'clsx';
import { $ as $$ServicesAll } from '../chunks/ServicesAll_B57T4vPh.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BHNEspIG.mjs';
import { B as BASE_URL } from '../chunks/apliInstance_C-EF-ImI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "Our Services",
    subtitle = "Expert stairlift services to support safe and comfortable movement at home.",
    backgroundImage,
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(id ? { id } : {})} class="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"> <!-- Background Image --> <img${addAttribute(backgroundImage || heroImage.src, "src")} alt="Stairlift service assistance" class="absolute inset-0 w-full h-full object-cover z-0" loading="eager"> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black/50 z-10"></div> <!-- Content --> <div class="relative z-20 text-center px-4 max-w-3xl"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"> ${title} </h1> <p class="text-lg md:text-xl text-white/90 leading-relaxed"> ${subtitle} </p> </div> </section>`;
}, "/home/ocode-2023/FrontendHFS/src/components/widgets/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Our Services \u2013 Expert Stairlift Solutions",
    description: "Explore our range of stairlift services, including home assessments, installation, and safety evaluations to ensure safe and comfortable mobility at home."
  };
  const fallbackData = {
    heading: "Our Services",
    sub_heading: "Expert stairlift services to support safe and comfortable movement at home.",
    hero_bg_image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1740&q=80"
  };
  let pageData = fallbackData;
  let AllserviceData = [];
  try {
    const res = await fetch(`${BASE_URL}/items/Service_Page`);
    const resAllservice = await fetch(`${BASE_URL}/items/Services`);
    if (res.ok) {
      const apiData = await res.json();
      const apiDataService = await resAllservice.json();
      AllserviceData = apiDataService?.data ?? [];
      pageData = apiData?.data?.[0] ?? fallbackData;
    }
  } catch (error) {
    console.warn("Directus API failed, using fallback data");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": pageData.heading, "title": pageData.heading, "subtitle": pageData.sub_heading, "actions": [
    {
      variant: "primary",
      text: "Start Exploring",
      href: "/"
    }
  ], "image": {
    src: pageData.hero_bg_image,
    alt: "Home Stairlift Services"
  } })}  ${maybeRenderHead()}<section class="max-w-7xl mx-auto px-4 py-12"> <h2 class="text-4xl font-bold text-secondary mb-7">
What We Offer
</h2> ${renderComponent($$result2, "ServicesAll", $$ServicesAll, { "data": AllserviceData })} </section>  ${renderComponent($$result2, "ConactSection", $$ConactSection, {})} ` })}`;
}, "/home/ocode-2023/FrontendHFS/src/pages/services/index.astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
