import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$ConactSection } from '../chunks/ConactSection_WpN5dEP9.mjs';
import { $ as $$OurServices } from '../chunks/OurServices_uOBTYhXE.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_C8mcGRQ9.mjs';
import aboutImage from '../chunks/aboutSection_DZh8MvaO.mjs';
import { B as BASE_URL } from '../chunks/apliInstance_C-EF-ImI.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "About us"
  };
  const fallbackData = {
    heading_hero_title: "About Us",
    hero_sub_heading: "Expert home stairlift services focused on safety, comfort, and reliable support.",
    about_us_title: "About us",
    descriptions: `
    <p class="text-lg text-gray-600 leading-relaxed">
      We specialize in professional home stairlift services, offering expert assessment, installation, and long-term support to improve safe and comfortable movement at home.
    </p>
    <p class="text-lg text-gray-600 leading-relaxed">
      From the initial consultation to ongoing maintenance, we ensure every service is delivered with care, safety, and attention to detail, giving you confidence and peace of mind at every step.
    </p>
  `,
    about_us_image: null,
    stats: [
      { name_: "Safety Checked Services", count: "100%" },
      { name_: "Support Availability", count: "24/7" }
    ]
  };
  let pageData = fallbackData;
  try {
    const res = await fetch(`${BASE_URL}/items/AboutUs`);
    if (res.ok) {
      const apiData = await res.json();
      pageData = apiData?.data?.[0] ?? fallbackData;
    }
  } catch (error) {
    console.warn("Directus About API failed, using fallback data");
  }
  const aboutImageUrl = pageData?.about_us_image ? `${BASE_URL}/assets/${pageData.about_us_image}` : aboutImage.src;
  const servicesData = {
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
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-secondary text-white h-[532px]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-4 mt-5"> ${pageData.heading_hero_title} </h1> <p class="text-xl max-w-3xl mx-auto"> ${pageData.hero_sub_heading} </p> </div> <!-- Curve --> <div class="absolute bottom-0 w-full overflow-hidden"> <svg class="relative block w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none"> <path fill="#ffffff" d="M0,0 C720,50 720,50 1440,0 L1440,120 L0,120 Z"></path> </svg> </div> </section>  <section class="bg-white py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- LEFT --> <div class="space-y-6"> <button class="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium text-[#6B4B3A] border border-[#6B4B3A] mb-4">
About us
</button> <h2 class="text-3xl md:text-4xl font-bold text-gray-900"> ${pageData.about_us_title} </h2> <p>${unescapeHTML(pageData.descriptions)}</p> <!-- STATS --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 "> ${pageData.stats?.map((stat) => renderTemplate`<div class="text-center"> <div class="text-4xl font-bold text-[#6B4B3A] mb-2"> ${stat.count} </div> <div class="text-gray-700 font-medium"> ${stat.name_} </div> </div>`)} </div> </div> <!-- RIGHT IMAGE --> <div class="relative"> <img${addAttribute(aboutImageUrl, "src")} alt="Home stairlift" class="w-full h-auto rounded-lg shadow-lg" loading="lazy"> </div> </div> </div> </section>  ${renderComponent($$result2, "OurServices", $$OurServices, { "ourServiceData": servicesData.our_service_home })}  ${renderComponent($$result2, "ConactSection", $$ConactSection, {})} ` })}`;
}, "/home/ocode-2023/FrontendHFS/src/pages/about.astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
