import { e as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$ConactSection } from '../chunks/ConactSection_CZ51Y2Xz.mjs';
import heroImage from '../chunks/hero-image_CrCBJFXP.mjs';
import 'clsx';
import { a as $$WidgetWrapper, $ as $$PageLayout } from '../chunks/PageLayout_BEl4efL9.mjs';
/* empty css                                 */
import { B as BASE_URL } from '../chunks/apliInstance_C-EF-ImI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "Our Services",
    subtitle = "Expert stairlift services to support safe and comfortable movement at home.",
    backgroundImage,
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(id ? { id } : {})} class="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"> <!-- Background Image --> <img${addAttribute(backgroundImage || heroImage.src, "src")} alt="Stairlift service assistance" class="absolute inset-0 w-full h-full object-cover z-0" loading="eager"> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black/50 z-10"></div> <!-- Content --> <div class="relative z-20 text-center px-4 max-w-3xl"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"> ${title} </h1> <p class="text-lg md:text-xl text-white/90 leading-relaxed"> ${subtitle} </p> </div> </section>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/widgets/Hero.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ServicesAll = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesAll;
  const {
    title = "What We Offer",
    data = [],
    subtitle = "",
    id,
    isDark = false,
    classes = {}
  } = Astro2.props;
  const fallbackServices = [
    {
      title: "Home Stairlift Assessment",
      enter_descriptions: "We visit your home to assess your staircase and understand your mobility needs before recommending the right solution.",
      icon: "home",
      slug: "home-stairlift-assessment"
    },
    {
      title: "Stairlift Consultation",
      enter_descriptions: "Our experts guide you through suitable stairlift options and explain the best approach for your home.",
      icon: "mark_unread_chat_alt",
      slug: "stairlift-consultation"
    },
    {
      title: "Professional Stairlift Installation",
      enter_descriptions: "Safe and professional stairlift installation carried out by trained experts.",
      icon: "settings",
      slug: "professional-stairlift-installation"
    },
    {
      title: "Safety Checks & User Guidance",
      enter_descriptions: "We ensure your stairlift is safe and easy to use with complete checks and guidance.",
      icon: "safety_check",
      slug: "#"
    },
    {
      title: "Repair & Maintenance Services",
      enter_descriptions: "Reliable repairs and regular maintenance to keep your stairlift working smoothly.",
      icon: "tire_repair",
      slug: "#"
    },
    {
      title: "Stairlift Replacement & Upgrades",
      enter_descriptions: "Upgrade or replace your stairlift to improve comfort, safety, and performance.",
      icon: "find_replace",
      slug: "stairlift-replacement-and-upgrades"
    }
  ];
  const services = Array.isArray(data) && data.length > 0 ? data : fallbackServices;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "data-astro-cid-3ag3xutg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24" data-astro-cid-3ag3xutg> <div class="max-w-7xl mx-auto px-4" data-astro-cid-3ag3xutg> <!-- GRID --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24" data-astro-cid-3ag3xutg> ${services?.map((service) => renderTemplate`<div class="relative bg-[#5B3A2B] rounded-2xl pt-28 pb-10 px-8 text-center overflow-visible shadow-lg" data-astro-cid-3ag3xutg> <!-- ICON --> ${service?.icon && renderTemplate`<div class="
                  absolute -top-[48px] sm:-top-[56px] md:-top-[64px] lg:-top-[69px]
                  left-1/2 -translate-x-1/2
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[138px] lg:h-[138px]
                  bg-white rounded-full
                  flex items-center justify-center
                  ring-1 ring-black/5
                  shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                  z-20
                " data-astro-cid-3ag3xutg> <span class="
                    material-symbols-rounded
                    text-primary
                    text-4xl sm:text-5xl md:text-6xl lg:text-[82px]
                  " data-astro-cid-3ag3xutg> ${service.icon} </span> </div>`} <!-- TITLE --> ${service?.title && renderTemplate`<h3 class="text-white text-xl font-semibold mb-4" data-astro-cid-3ag3xutg> ${service.title} </h3>`} <!-- DESCRIPTION --> ${(service?.enter_descriptions || service?.desc) && renderTemplate`<p class="text-white/80 text-sm leading-relaxed mb-8" data-astro-cid-3ag3xutg> ${service.enter_descriptions || service.desc} </p>`} <!-- LINK --> ${(service?.slug || service?.slug === "#") && renderTemplate`<a${addAttribute(service.slug ? `/services/${service.slug}` : "#", "href")} class="
                  w-12 h-12 mx-auto
                  bg-white rounded-full
                  flex items-center justify-center
                  shadow-md
                  transition hover:scale-110 hover:bg-primary
                " data-astro-cid-3ag3xutg> <span class="material-symbols-rounded text-secondary text-lg" data-astro-cid-3ag3xutg>
arrow_forward
</span> </a>`} </div>`)} </div> </div> </section> ` })} `;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/widgets/ServicesAll.astro", void 0);

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
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/pages/services/index.astro", void 0);

const $$file = "/home/ishrar/home-free-stairs-main/home-free-stairs/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
