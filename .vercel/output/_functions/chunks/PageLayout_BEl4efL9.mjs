import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, s as spreadAttributes } from './astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { t as trimSlash, g as getHomePermalink, a as getPermalink, b as getAsset, $ as $$Layout } from './Layout_ritXeygp.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                         */

const $$Astro$5 = createAstro("https://example.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/ui/Background.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const {
    id,
    isDark = false,
    containerClass = "",
    sectionBgClass = "",
    bg,
    as = "section"
  } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative w-full" }, { "default": ($$result2) => renderTemplate`  ${sectionBgClass && renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute inset-0 -z-[1] ${sectionBgClass}`, "class")} aria-hidden="true"></div>`} <div class="absolute inset-0 pointer-events-none -z-[2]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div>  <div${addAttribute([
    twMerge(
      "relative mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-12 lg:py-4 text-default",
      containerClass
    ),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/ui/WidgetWrapper.astro", void 0);

const logo = new Proxy({"src":"/_astro/hfslog.ZY0SP9Aw.png","width":789,"height":316,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ishrar/home-free-stairs-main/home-free-stairs/public/assets/hfslog.png";
							}
							
							return target[name];
						}
					});

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="flex items-center gap-2"> <!-- <img
    src={logo2.src}
    class="h-20 md:h-20 w-auto object-contain dark:hidden"

    alt="Light Logo"
  /> --> <img${addAttribute(logo.src, "src")} class="h-20 md:h-20 w-auto object-contain " alt="Dark Logo"> </span>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/Logo.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, dark: isDark },
    // ✅ MOBILE & TABLET (no overlap)
    " top-0 relative z-30",
    // ✅ DESKTOP ONLY (sticky/fixed behavior)
    "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:z-50"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default  px-3 md:px-6 mx-auto w-full",
    {
      "md:flex md:justify-between": position !== "center"
    },
    {
      "md:grid md:grid-cols-3 md:items-center": position === "center"
    },
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button type="button" class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"> ${text}${" "}  </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white  px-3 py-2   md:px-4 md:py-2.5 lg:px-4 lg:py-2  text-lg md:text-xl lg:text-[24px] flex items-center whitespace-nowrap hover:cursor-pointer",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
  ], "class:list")}> <!-- RIGHT: Actions --> <div id="header-call" class="text-lg md:text-xl lg:text-[20px] text-white transition-all duration-300 ease-in-out">
Call now Toll Free :
<a href="tel:+1234567890" class="ml-1 font-semibold hover:underline">
+1 (234) 567-890
</a> </div> <!-- {showToggleTheme && <ToggleTheme iconClass="w-5 h-5" />} --> </div> </div></header>`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/widgets/Header.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Footer2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer2;
  const {
    id,
    isDark = true,
    classes = {}
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": false, "containerClass": " mx-auto", "sectionBgClass": "bg-[rgba(0,0,0,0.06)]" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer class="py-12 w-full lg:min-h-[578px]"> <div class="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> <!-- WHAT WE DO --> <div> <h4 class="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-gray-400 uppercase mb-4">
What We Do
</h4> <ul class="text-lg md:text-xl lg:text-[24px]          space-y-3 text-gray-800 "> <li>Stairlift Assessment</li> <li>Stairlift Consultation</li> <li>Stairlift Installation</li> <li>User Guidance</li> </ul> </div> <!-- ABOUT US --> <div> <h4 class="text-xl md:text-2xl lg:text-3xl font-bold  tracking-wider text-gray-400 uppercase mb-4">
About Us
</h4> <ul class=" text-lg md:text-xl lg:text-[24px]  space-y-3 text-gray-800 "> <li>About HomeFree Stairlift</li> </ul> </div> <!-- SERVICE --> <div> <h4 class="text-xl md:text-2xl lg:text-3xl font-bold  tracking-wider text-gray-400 uppercase mb-4">
Service
</h4> <ul class="text-lg md:text-xl lg:text-[24px]  space-y-3 text-gray-800 "> <li>Stairlift Assessment</li> <li>Stairlift Consultation</li> <li>Stairlift Installation</li> <li>User Guidance</li> </ul> </div> <!-- LEGALS --> <div> <h4 class="text-xl md:text-2xl lg:text-3xl font-bold  tracking-wider text-gray-400 uppercase mb-4">
Legals
</h4> <ul class="text-lg md:text-xl lg:text-[24px]     space-y-3 text-gray-800 "> <li>Privacy Policy</li> <a href="/terms-and-conditions">Terms & Conditions</a> </ul> </div> </div> <!-- Bottom Section --> <div class="mt-12  flex flex-col md:flex-row items-center justify-between gap-6"> <!-- Logo --> <div class="flex items-center gap-2"> <div class="  rounded-md flex items-center justify-center"> <!-- Icon placeholder --> ${renderComponent($$result2, "Logo", $$Logo, {})} </div> </div> <!-- Contact --> <div class="text-sm text-gray-900">
Call now, Toll Free:
<span class="font-semibold">0000000000</span> </div> </div> </footer> ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/components/widgets/Footer2.astro", void 0);

const headerData = {
  links: [
    {
      text: "Homes",
      href: getPermalink("/")
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: "About us",
      href: getPermalink("/about")
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
    },
    {
      text: "Services",
      href: getPermalink("/services")
      // links: [
      //   {
      //     text: 'Lead Generation',
      //     href: getPermalink('/landing/lead-generation'),
      //   },
      //   {
      //     text: 'Long-form Sales',
      //     href: getPermalink('/landing/sales'),
      //   },
      //   {
      //     text: 'Click-Through',
      //     href: getPermalink('/landing/click-through'),
      //   },
      //   {
      //     text: 'Product Details (or Services)',
      //     href: getPermalink('/landing/product'),
      //   },
      //   {
      //     text: 'Coming Soon or Pre-Launch',
      //     href: getPermalink('/landing/pre-launch'),
      //   },
      //   {
      //     text: 'Subscription',
      //     href: getPermalink('/landing/subscription'),
      //   },
      // ],
    },
    {
      text: "Contact Us",
      href: getPermalink("/contact")
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    }
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: "Download", href: "https://github.com/arthelokyo/astrowind", target: "_blank" }]
};
({
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") }
  ],
  socialLinks: [
    { ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    { ariaLabel: "Github", icon: "tabler:brand-github", href: "https://github.com/arthelokyo/astrowind" }
  ]});

const $$Astro = createAstro("https://example.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer2", $$Footer2, {})} `)} ` })}`;
}, "/home/ishrar/home-free-stairs-main/home-free-stairs/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, $$WidgetWrapper as a };
