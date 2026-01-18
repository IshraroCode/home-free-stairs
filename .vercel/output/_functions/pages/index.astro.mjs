import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { a as $$WidgetWrapper, $ as $$PageLayout } from '../chunks/PageLayout_BfWfYlDX.mjs';
/* empty css                                 */
import heroImage from '../chunks/hero-image_CrCBJFXP.mjs';
import heroBackgournd from '../chunks/Homepage2_B7_br8Rc.mjs';
import aboutImage from '../chunks/aboutSection_-Ksamdbt.mjs';
import { $ as $$OurServices } from '../chunks/OurServices_COq3DGRS.mjs';
import { $ as $$ConactSection } from '../chunks/ConactSection_BMl-KHe9.mjs';
import user from '../chunks/user_q7yVpaa3.mjs';
import { B as BASE_URL } from '../chunks/apliInstance_C-EF-ImI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://example.com");
const $$Herosection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Herosection;
  const {
    heroData,
    id,
    isDark = false,
    sectionBgClass = "",
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url(${heroBackgournd.src})`, "style")}> ${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": ` px-0
    sm:px-0
    md:px-6 ${classes?.container ?? ""}` }, { "default": async ($$result2) => renderTemplate` <div class="relative min-h-[70vh] grid lg:grid-cols-[3fr_2fr]"> <!-- Background Image (Mobile / Tablet) --> <div class="absolute inset-0 lg:hidden"> <img${addAttribute(heroImage.src, "src")} alt="Stairlift service" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/10"></div> </div> <!-- LEFT CONTENT --> <div class="
        relative z-10
        flex items-center
        px-5 sm:px-10 
        py-20
        text-white lg:text-gray-900
        bg-transparent lg:bg-white
      "> <div class="max-w-2xl"> <span class="
            text-sm font-semibold
            flex items-center gap-2
            mb-4
            text-gray-200 lg:text-gray-500
          ">
⚙ Professional Services
</span> <h1 class=" text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"> ${heroData.Title}<br> </h1> <p class="
            text-base sm:text-lg
            mb-8
            text-gray-200 lg:text-gray-600
          "> ${heroData.sub_title} </p> <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4"> <a href="/book-now" class="
            bg-btn 
              text-white
              px-6 py-3
              rounded-full
              
              transition
              hover:opacity-90
            ">
Book Now
</a> <a href="/assessment" class="
              font-medium underline
              text-white lg:text-blue-950
              hover:opacity-80
            ">
Schedule a Free Consultation
</a> </div> </div> </div> </div> ` })} </section>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/HomePage/Herosection.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$AboutSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const {
    aboutusdata,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg"),
    linkHref = "/about"
  } = Astro2.props;
  const isLoading = !aboutusdata;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 md:py-4 w-full lg:min-h-[602px]"> <div class="container mx-auto px-4"> <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start"> <!-- ======================= --> <!-- LEFT: CONTENT --> <!-- ======================= --> <div class="order-1 space-y-4"> <!-- 🔄 SKELETON --> ${isLoading && renderTemplate`<div class="animate-pulse space-y-4"> <div class="h-10 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-2/3"></div> <div class="h-10 bg-gray-300 dark:bg-slate-700 rounded-full w-36 mt-4"></div> </div>`} <!-- ✅ REAL CONTENT --> ${!isLoading && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${aboutusdata?.title && renderTemplate`<h2 class="
                    text-3xl md:text-4xl lg:text-5xl
                    dark:text-primary
                    mb-4 leading-tight mt-4
                  "> ${aboutusdata.title} </h2>`}${aboutusdata?.about_us_description && renderTemplate`<p class="
                    text-lg md:text-xl
                    text-gray-700 dark:text-slate-300
                    max-w-lg leading-relaxed
                  ">${unescapeHTML(aboutusdata.about_us_description)}</p>`}${linkHref && renderTemplate`<a${addAttribute(linkHref, "href")} class="
                    inline-block mt-2 px-6 py-3 bg-btn text-white font-semibold
                    hover:bg-secondary transition-colors rounded-full
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  ">
Read More
</a>`}` })}`} </div> <!-- ======================= --> <!-- RIGHT: IMAGE --> <!-- ======================= --> <div class="order-2 relative flex justify-center lg:justify-end"> <!-- 🔄 IMAGE SKELETON --> ${isLoading && renderTemplate`<div class="
                w-full lg:w-[602px] lg:h-[602px]
                aspect-square
                bg-gray-300 dark:bg-slate-800
                rounded
                animate-pulse
              "></div>`} <!-- ✅ REAL IMAGE --> ${!isLoading && renderTemplate`<div class="
                relative
                overflow-hidden
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-slate-900
                shadow-lg
              "> <img${addAttribute(aboutImage.src, "src")} alt="Professional stairlift installation on wooden stairs in a modern home" class="w-full h-auto lg:w-[602px] lg:h-[602px] object-cover" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/30"></div> </div>`} </div> </div> </div> </section> ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/HomePage/AboutSection.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$WhyusSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyusSection;
  const {
    whyusdata,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const sections = whyusdata?.sections ?? [];
  const FALLBACK_ICON = "help";
  const SKELETON_COUNT = 5;
  const mid = Math.ceil(sections.length / 2);
  const topRow = sections.slice(0, mid);
  const bottomRow = sections.slice(mid);
  const skeletonMid = Math.ceil(SKELETON_COUNT / 2);
  const skeletonTop = Array.from({ length: skeletonMid });
  const skeletonBottom = Array.from({ length: SKELETON_COUNT - skeletonMid });
  const isLoading = !whyusdata || sections.length === 0;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 bg-white dark:bg-slate-900"> <div class="container mx-auto px-4 space-y-8"> <!-- TITLE --> <h2 class="text-3xl md:text-4xl lg:text-5xl text-secondary dark:text-white"> ${whyusdata?.title || "Why Us?"} </h2> <!-- ==================== --> <!-- 🔄 SKELETON LOADER --> <!-- ==================== --> ${isLoading && renderTemplate`<div class="space-y-6 animate-pulse"> <!-- TOP ROW --> <div class="grid gap-4
                   grid-cols-1
                   sm:grid-cols-2
                   lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"${addAttribute(`--cols: ${skeletonTop.length};`, "style")}> ${skeletonTop.map(() => renderTemplate`<div class="bg-gray-200 dark:bg-slate-800 p-6 rounded-lg h-full"> <div class="w-12 h-12 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div> <div class="h-6 bg-gray-300 dark:bg-slate-700 rounded w-3/4 mb-3"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full mb-2"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6"></div> </div>`)} </div> <!-- BOTTOM ROW --> <div class="grid gap-4
                   grid-cols-1
                   sm:grid-cols-2
                   lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"${addAttribute(`--cols: ${skeletonBottom.length};`, "style")}> ${skeletonBottom.map(() => renderTemplate`<div class="bg-gray-200 dark:bg-slate-800 p-6 rounded-lg h-full"> <div class="w-12 h-12 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div> <div class="h-6 bg-gray-300 dark:bg-slate-700 rounded w-3/4 mb-3"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full mb-2"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6"></div> </div>`)} </div> </div>`} <!-- ==================== --> <!-- ✅ REAL CONTENT --> <!-- ==================== --> ${!isLoading && renderTemplate`<div class="space-y-6"> <!-- TOP ROW --> ${topRow.length > 0 && renderTemplate`<div class="grid gap-4
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"${addAttribute(`--cols: ${topRow.length};`, "style")}> ${topRow.map((item) => renderTemplate`<div class="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg h-full"> <div class="w-12 h-12 flex items-center justify-center mb-4"> <span class="material-symbols-rounded text-primary text-2xl leading-none"> ${item?.icon || FALLBACK_ICON} </span> </div> <h3 class="text-xl md:text-2xl lg:text-[28px] dark:text-white mb-3"> ${item?.title ?? ""} </h3> <p class="text-lg md:text-xl lg:text-[24px] leading-relaxed"> ${item?.descriptions ?? ""} </p> </div>`)} </div>`} <!-- BOTTOM ROW --> ${bottomRow.length > 0 && renderTemplate`<div class="grid gap-4
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"${addAttribute(`--cols: ${bottomRow.length};`, "style")}> ${bottomRow.map((item) => renderTemplate`<div class="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg h-full"> <div class="w-12 h-12 flex items-center justify-center mb-4"> <span class="material-symbols-rounded text-primary text-2xl leading-none"> ${item?.icon || FALLBACK_ICON} </span> </div> <h3 class="text-xl md:text-2xl lg:text-[28px] dark:text-white mb-3"> ${item?.title ?? ""} </h3> <p class="text-lg md:text-xl lg:text-[24px] leading-relaxed"> ${item?.descriptions ?? ""} </p> </div>`)} </div>`} </div>`} </div> </section> ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/HomePage/WhyusSection.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const {
    reviewsData,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const reviews = reviewsData?.review_sections ?? [];
  const isLoading = !reviewsData || reviews.length === 0;
  const FALLBACK_AUTHOR = "Anonymous";
  const SKELETON_COUNT = 3;
  const skeletonItems = Array.from({ length: SKELETON_COUNT });
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pb-16"> <!-- TITLE --> <h2 class="text-3xl md:text-4xl lg:text-5xl text-secondary mb-10 text-gray-900 dark:text-white"> ${reviewsData?.heading_title || "Customer Review"} </h2> <!-- ===================== --> <!-- 🔄 SKELETON LOADER --> <!-- ===================== --> ${isLoading && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-pulse"> ${skeletonItems.map(() => renderTemplate`<div class="
              w-full
              max-w-[412px]
              mx-auto
              min-h-[436px]
              rounded-xl
              overflow-hidden
              bg-gray-200 dark:bg-slate-800
              shadow-md
              flex
              flex-col
            "> <!-- HEADER --> <div class="bg-gray-300 dark:bg-slate-700 py-6 flex justify-center"> <div class="w-10 h-10 rounded-full bg-gray-400 dark:bg-slate-600"></div> </div> <!-- CONTENT --> <div class="p-6 flex-1 flex flex-col justify-center space-y-3"> <div class="h-5 bg-gray-300 dark:bg-slate-700 rounded w-1/2 mx-auto"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6 mx-auto"></div> </div> </div>`)} </div>`} <!-- ===================== --> <!-- ✅ REAL DATA --> <!-- ===================== --> ${!isLoading && reviews.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"> ${reviews.map((item) => renderTemplate`<div class="
              w-full
              max-w-[412px]
              mx-auto
              min-h-[436px]
              rounded-xl
              overflow-hidden
              shadow-md
              bg-white dark:bg-slate-900
              flex
              flex-col
            "> <!-- TOP HEADER --> <div class="bg-[#55372A] py-6 flex flex-col items-center"> <img${addAttribute(user.src, "src")} alt="User avatar" class="w-10 h-10 rounded-full" loading="lazy"> </div> <!-- CONTENT --> <div class="p-6 text-center flex-1 flex flex-col justify-center"> <p class="text-secondary mb-2 text-lg md:text-xl lg:text-2xl font-medium"> ${item?.author || FALLBACK_AUTHOR} </p> <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300"> ${item?.comments ?? ""} </p> </div> </div>`)} </div>`} </section> ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/HomePage/Testimonial.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Safe Stairlift Services for Your Home",
    ignoreTitleTemplate: true
  };
  const fallbackData = {
    hero_section: {
      Title: "Safe Stairlift Services for Your Home",
      sub_title: "Expert stairlift services designed around your home and your needs.",
      hero_image: null
    },
    About_section: {
      title: "About us",
      about_us_description: "<p>We visit your home to assess your staircase and understand your mobility needs before recommending the right solution.</p>",
      about_image: "42ff17f4-a1d5-4f49-bb21-1ef143b1580c"
    },
    our_service_home: {
      title: "What do we do ?",
      slug: "home-stairlift-assessment",
      services: [
        {
          service_name_: "Home Stairlift Assessment",
          service_description: "We visit your home to assess your staircase and understand your mobility needs before recommending the right solution.",
          icon: "home_work"
        },
        {
          service_name_: "Stairlift Consultation",
          service_description: "Our experts guide you through suitable stairlift options and explain the best approach for your home.",
          icon: "accessible"
        },
        {
          service_name_: "Professional Stairlift Installation",
          service_description: "Our experts install your stairlift safely and efficiently with minimal disruption.",
          icon: "stairs"
        },
        {
          service_name_: "Safety Checks & User Guidance",
          service_description: "We perform thorough safety checks and show you how to use the stairlift with confidence.",
          icon: "safety_check"
        }
      ]
    },
    whyusection: {
      title: "Why Us?",
      sections: [
        {
          title: "Expert Home Assessment",
          descriptions: "We carefully assess your staircase and mobility needs to recommend the safest and most suitable solution.",
          icon: "home"
        },
        {
          title: "Professional Installation",
          descriptions: "Our trained technicians ensure proper installation with full safety checks and attention to detail.",
          icon: "settings_photo_camera"
        },
        {
          title: "Safety & Comfort First",
          descriptions: "Every service is focused on user safety, comfort, and ease of use within your home.",
          icon: "safety_check"
        },
        {
          title: "Reliable After-Sales Support",
          descriptions: "We continue to support you even after installation, offering reliable maintenance and assistance whenever you need it.",
          icon: "headphones"
        },
        {
          title: "Honest & Transparent Guidance",
          descriptions: "We offer clear advice with no pressure\u2014helping you make informed decisions with confidence.",
          icon: "handshake"
        }
      ]
    },
    reviewsection: {
      heading_title: "Customer Review",
      review_sections: [
        {
          author: "James W.",
          comments: "The entire process was handled very professionally. The team explained everything clearly and completed the installation smoothly and on time."
        },
        {
          author: "James W.",
          comments: "The entire process was handled very professionally. The team explained everything clearly and completed the installation smoothly and on time."
        },
        {
          author: "James W.",
          comments: "The entire process was handled very professionally. The team explained everything clearly and completed the installation smoothly and on time."
        }
      ]
    }
  };
  let pageData = fallbackData;
  try {
    const res = await fetch(
      `${BASE_URL}/items/HomePage?fields=*,hero_section.*,About_section.*,our_service_home.*,seo_details.*,whyusection.*,reviewsection.*`
    );
    if (res.ok) {
      const apiData = await res.json();
      pageData = apiData?.data?.[0] ?? fallbackData;
    }
  } catch (error) {
    console.warn("Directus API failed, using fallback data");
  }
  console.log("fall", pageData);
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$Herosection, { "heroData": pageData.hero_section })}  ${renderComponent($$result2, "OurServices", $$OurServices, { "ourServiceData": pageData.our_service_home })}  ${renderComponent($$result2, "AboutSection", $$AboutSection, { "aboutusdata": pageData.About_section })}  ${renderComponent($$result2, "WhyusSection", $$WhyusSection, { "whyusdata": pageData.whyusection })}  ${renderComponent($$result2, "Testimonial", $$Testimonial, { "reviewsData": pageData.reviewsection })}  ${renderComponent($$result2, "ConactSection", $$ConactSection, {})} ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/pages/index.astro", void 0);

const $$file = "/home/ishrar/home-free-stairs-main/home-free-stairs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
