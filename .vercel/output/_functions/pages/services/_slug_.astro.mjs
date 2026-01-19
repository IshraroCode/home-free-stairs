import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$ServicesAll } from '../../chunks/ServicesAll_CuM9kJM3.mjs';
import { $ as $$ConactSection } from '../../chunks/ConactSection_BD_trdEy.mjs';
import { B as BASE_URL } from '../../chunks/apliInstance_C-EF-ImI.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_7vC72bwJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const fallbackService = {
    title: "Our Service",
    enter_descriptions: "Professional stairlift services designed for safety, comfort, and reliability.",
    image: "",
    points: []
  };
  let service = fallbackService;
  let AllserviceData = [];
  try {
    const [serviceRes, allServiceRes] = await Promise.all([
      fetch(`${BASE_URL}/items/Services?filter[slug][_eq]=${slug}`),
      fetch(`${BASE_URL}/items/Services`)
    ]);
    if (serviceRes.ok) {
      const serviceJson = await serviceRes.json();
      const item = serviceJson?.data?.[0];
      if (item) {
        const imgMatch = item?.veribage_list?.match(
          /<img[^>]+src="([^">]+)"/
        );
        const image = imgMatch?.[1] || "";
        const points = item?.veribage_list?.match(/&bull;([^<]+)/g)?.map((p) => p.replace("&bull;", "").trim()) || [];
        service = {
          title: item?.title ?? fallbackService.title,
          enter_descriptions: item?.enter_descriptions ?? fallbackService.enter_descriptions,
          image,
          points
        };
      }
    }
    if (allServiceRes.ok) {
      const allJson = await allServiceRes.json();
      AllserviceData = allJson?.data || [];
    }
  } catch (err) {
    console.warn("Directus API failed, fallback used", err);
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-4 sm:px-8 lg:px-16 mt-0 sm:mt-5 lg:mt-14"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center"> <!-- IMAGE --> ${service.image && renderTemplate`<div class="flex justify-center lg:justify-start"> <div class="w-full max-w-[672px] aspect-[672/825] overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover" loading="lazy"> </div> </div>`} <!-- CONTENT --> <div class="flex flex-col max-w-xl"> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4"> ${service.title} </h1> <p class="text-gray-600 text-base sm:text-lg mb-6"> ${service.enter_descriptions} </p> ${service.points.length > 0 && renderTemplate`<ul class="space-y-4 mb-8"> ${service.points.map((point) => renderTemplate`<li class="flex items-start gap-3"> <span class="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0"></span> <span class="text-gray-700 leading-relaxed"> ${point} </span> </li>`)} </ul>`} <!-- CTA BUTTONS --> <div class="flex flex-col sm:flex-col gap-4 mt-4 w-full max-w-[581px]"> <a href="/assessment" class="bg-secondary text-white text-center py-3 px-6 rounded-md font-medium hover:opacity-90 transition">
Schedule Your Assessment
</a> <button class="border border-secondary text-secondary py-3 px-6 rounded-md font-medium hover:bg-secondary hover:text-white transition">
Request a Call Back
</button> </div> </div> </div> </div> </section>  <div class="max-w-7xl mx-auto"> <h2 class="
          text-3xl sm:text-4xl
          font-bold text-secondary
          
          text-center lg:text-left
        ">
Our All Services
</h2> ${renderComponent($$result2, "ServicesAll", $$ServicesAll, { "data": AllserviceData })} </div>  ${renderComponent($$result2, "ConactSection", $$ConactSection, {})} ` })}`;
}, "/home/ocode-2023/FrontendHFS/src/pages/services/[slug].astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
