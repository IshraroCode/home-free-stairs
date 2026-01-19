import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_7vC72bwJ.mjs';
import { B as BASE_URL } from '../chunks/apliInstance_DK-j_Tx6.mjs';
export { renderers } from '../renderers.mjs';

const $$TermsAndConditions = createComponent(async ($$result, $$props, $$slots) => {
  const fallbackData = {
    id: "65b61c24-f129-4ff8-8ffe-6fd8d69f466b",
    heading: "Terms & Conditions",
    sub_heading: "These terms outline the guidelines, responsibilities, and conditions for using our services.",
    terms_and_cond: `
    <p>\u201CBy using our website and services, you agree to the terms and conditions outlined here. Our services include home stairlift assessment, consultation, installation, maintenance, replacement, and after-sales support, as agreed at the time of booking. All service appointments are subject to availability, and any changes or cancellations should be communicated in advance. Pricing and service details will be clearly shared before work begins, and payments are due as agreed upon confirmation of services.\u201D</p>
    <p>\u201CCustomers are responsible for providing accurate information and safe access to their property during assessments and installations. Stairlifts must be used according to the guidance provided to ensure safety and proper operation. We are not responsible for issues arising from misuse, unauthorized modifications, or external factors beyond our control. Ongoing maintenance or repair services may require separate requests unless included under a service agreement. We reserve the right to update these terms and conditions at any time, and any changes will be reflected on this page.\u201D</p>
  `
  };
  let pageData = fallbackData;
  try {
    const res = await fetch(`${BASE_URL}/items/terms_and_conditons`);
    if (res.ok) {
      const apiData = await res.json();
      pageData = apiData?.data?.[0] ?? fallbackData;
    } else {
      console.warn("API request failed, using fallback data");
    }
  } catch (error) {
    console.warn("Directus API failed, using fallback data", error);
  }
  const title = pageData.heading;
  const subtitle = pageData.sub_heading;
  const content = pageData.terms_and_cond;
  ({ title: pageData.heading });
  return renderTemplate`${renderComponent($$result, "AppLayout", $$PageLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-12 px-12 sm:py-16 lg:py-20"> <!-- Title --> <h1 class="font-semibold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight break-words mt-5"> ${title} </h1> <!-- Subtitle --> <p class="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed break-words"> ${subtitle} </p> <!-- Content --> <div class="mt-10 sm:mt-12 space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto break-words whitespace-normal overflow-wrap-anywhere"> <p>${unescapeHTML(content)}</p> </div> </section> ` })}`;
}, "/home/ocode-2023/FrontendHFS/src/pages/terms-and-conditions.astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/terms-and-conditions.astro";
const $$url = "/terms-and-conditions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsAndConditions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
