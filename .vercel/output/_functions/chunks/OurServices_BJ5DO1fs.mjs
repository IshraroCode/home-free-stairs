import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './PageLayout_BHNEspIG.mjs';

const $$Astro = createAstro("https://example.com");
const $$OurServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurServices;
  const {
    ourServiceData,
    id,
    isDark = false,
    sectionBgClass = "",
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const services = ourServiceData?.services ?? [];
  const isLoading = !ourServiceData || services.length === 0;
  const FALLBACK_ICON = "build";
  const SKELETON_COUNT = 4;
  const skeletonItems = Array.from({ length: SKELETON_COUNT });
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `${classes?.container ?? ""}`, "sectionBgClass": "bg-[color-mix(in_srgb,var(--aw-color-secondary)_4%,transparent)]" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full lg:min-h-[605px]"> <!-- HEADER --> <div class="mb-10"> <span class="inline-block mb-3 rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-700">
Our Work
</span> <h2 class="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white"> ${ourServiceData?.title || "Our Services"} </h2> </div> <!-- ====================== --> <!-- 🔄 SKELETON LOADER --> <!-- ====================== --> ${isLoading && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 animate-pulse"> ${skeletonItems.map(() => renderTemplate`<div class="
              bg-gray-200 dark:bg-slate-800
              rounded-xl
              p-6
              border border-gray-300 dark:border-gray-700
              shadow-sm
            "> <!-- Icon Skeleton --> <div class="w-12 h-12 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div> <!-- Title Skeleton --> <div class="h-5 bg-gray-300 dark:bg-slate-700 rounded w-3/4 mb-3"></div> <!-- Description Skeleton --> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full mb-2"></div> <div class="h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6"></div> </div>`)} </div>`} <!-- ====================== --> <!-- ✅ REAL CONTENT --> <!-- ====================== --> ${!isLoading && services.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"> ${services.map((service) => renderTemplate`<div class="
              bg-white dark:bg-slate-900
              rounded-xl
              p-6
              border border-gray-200 dark:border-gray-700
              shadow-sm
              transition-all duration-300
              hover:shadow-lg
            "> <!-- Icon --> <div class="w-12 h-12 text-primary mb-4"> <span class="material-symbols-rounded leading-none text-3xl"> ${service?.icon || FALLBACK_ICON} </span> </div> <!-- Title --> <h3 class="mb-2 text-lg text-gray-900 dark:text-white"> ${service?.service_name_ ?? ""} </h3> <!-- Description --> <p class="leading-relaxed text-gray-600 dark:text-gray-300"> ${service?.service_description ?? ""} </p> </div>`)} </div>`} <!-- CTA --> <div class="mt-10 text-center"> <a href="/services" class="
          inline-flex items-center justify-center
          rounded-full
          bg-btn
          px-6 py-3
          text-sm font-medium text-white
          transition
        ">
View all Services
</a> </div> </section> ` })}`;
}, "/home/ocode-2023/FrontendHFS/src/components/HomePage/OurServices.astro", void 0);

export { $$OurServices as $ };
