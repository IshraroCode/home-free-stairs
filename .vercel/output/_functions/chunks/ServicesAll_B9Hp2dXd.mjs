import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './PageLayout_B4G7kivq.mjs';
/* empty css                          */

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
}, "/home/ocode-2023/FrontendHFS/src/components/widgets/ServicesAll.astro", void 0);

export { $$ServicesAll as $ };
