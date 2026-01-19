import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_C8mcGRQ9.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Assessment = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Assessment Services - Safe Stairlift Solutions",
    ignoreTitleTemplate: true
  };
  const contactInfo = {
    email: "info@legacycontracting.com",
    phone: "(555) 123-4567"
  };
  const timeSlots = [
    "09:00 AM \u2013 10:00 AM",
    "10:00 AM \u2013 11:00 AM",
    "11:00 AM \u2013 12:00 PM",
    "01:00 PM \u2013 02:00 PM",
    "02:00 PM \u2013 03:00 PM",
    "03:00 PM \u2013 04:00 PM"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const form = document.getElementById("contact-form");\n    const modal = document.getElementById("success-modal");\n    const closeBtn = document.getElementById("close-modal");\n\n    form?.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      const payload = Object.fromEntries(new FormData(form));\n\n      try {\n        await fetch(`${BASE_URL}/items/assessment`, {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify(payload),\n        });\n\n        modal.classList.remove("hidden");\n        modal.classList.add("flex");\n        form.reset();\n      } catch {\n        alert("Something went wrong");\n      }\n    });\n\n    closeBtn?.addEventListener("click", () => {\n      modal.classList.add("hidden");\n      modal.classList.remove("flex");\n    });\n  });\n<\/script> '], ["", ' <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const form = document.getElementById("contact-form");\n    const modal = document.getElementById("success-modal");\n    const closeBtn = document.getElementById("close-modal");\n\n    form?.addEventListener("submit", async (e) => {\n      e.preventDefault();\n      const payload = Object.fromEntries(new FormData(form));\n\n      try {\n        await fetch(\\`\\${BASE_URL}/items/assessment\\`, {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify(payload),\n        });\n\n        modal.classList.remove("hidden");\n        modal.classList.add("flex");\n        form.reset();\n      } catch {\n        alert("Something went wrong");\n      }\n    });\n\n    closeBtn?.addEventListener("click", () => {\n      modal.classList.add("hidden");\n      modal.classList.remove("flex");\n    });\n  });\n<\/script> '])), renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata, "data-astro-cid-ikzcxylh": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="text-center px-4 py-12 sm:py-24" data-astro-cid-ikzcxylh> <h1 class="text-3xl sm:text-4xl font-extrabold text-black" data-astro-cid-ikzcxylh>
Book a Professional Home Stairlift Assessment
</h1> <p class="mt-3 text-gray-600" data-astro-cid-ikzcxylh>
Choose a time that works for your home assessment.
</p> </div>  <section class="px-4 sm:px-6 lg:px-8 py-10 lg:py-16
           bg-[color-mix(in_srgb,var(--aw-color-secondary)_4%,transparent)]" data-astro-cid-ikzcxylh> <div class="max-w-[1440px] mx-auto" data-astro-cid-ikzcxylh> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" data-astro-cid-ikzcxylh> <!-- LEFT CONTENT --> <div class="space-y-6 w-full lg:pr-12" data-astro-cid-ikzcxylh> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight" data-astro-cid-ikzcxylh>
Schedule a<br data-astro-cid-ikzcxylh>home visit to<br data-astro-cid-ikzcxylh>discuss your needs.
</h2> <p class="text-gray-600 max-w-lg" data-astro-cid-ikzcxylh>
Our experts will visit your home and guide you through the next steps.
</p> <div class="space-y-4 pt-4" data-astro-cid-ikzcxylh> <div class="flex items-center gap-3" data-astro-cid-ikzcxylh> <span class="font-semibold" data-astro-cid-ikzcxylh>E-mail:</span> <span data-astro-cid-ikzcxylh>${contactInfo.email}</span> </div> <div class="flex items-center gap-3" data-astro-cid-ikzcxylh> <span class="font-semibold" data-astro-cid-ikzcxylh>Ph. no:</span> <span data-astro-cid-ikzcxylh>${contactInfo.phone}</span> </div> </div> </div> <!-- RIGHT FORM --> <div class="w-full" data-astro-cid-ikzcxylh> <h3 class="text-2xl font-bold mb-6" data-astro-cid-ikzcxylh>Schedule Your Assessment</h3> <form id="contact-form" class="space-y-5" data-astro-cid-ikzcxylh> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Name</label> <input name="name" required placeholder="Your Name" class="w-full px-4 py-3 border rounded-lg" data-astro-cid-ikzcxylh> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-ikzcxylh> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Phone Number</label> <input name="phone" required placeholder="Your Phone No." class="w-full px-4 py-3 border rounded-lg" data-astro-cid-ikzcxylh> </div> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Preferred Date</label> <input type="date" name="appointment_date" required class="w-full px-4 py-3 border rounded-lg" data-astro-cid-ikzcxylh> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-ikzcxylh> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Time Slot</label> <select name="time_slot" required class="w-full px-4 py-3 border rounded-lg bg-white" data-astro-cid-ikzcxylh> <option value="" data-astro-cid-ikzcxylh>Select Time Slot</option> ${timeSlots.map((slot) => renderTemplate`<option${addAttribute(slot, "value")} data-astro-cid-ikzcxylh>${slot}</option>`)} </select> </div> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Property Address</label> <input name="address" required placeholder="Property Address" class="w-full px-4 py-3 border rounded-lg" data-astro-cid-ikzcxylh> </div> </div> <div data-astro-cid-ikzcxylh> <label class="block text-sm font-medium mb-1" data-astro-cid-ikzcxylh>Email</label> <input type="email" name="email" required placeholder="Your Email" class="w-full px-4 py-3 border rounded-lg" data-astro-cid-ikzcxylh> </div> <button type="submit" class="w-full bg-[#5b3b2e] text-white py-3 rounded-lg font-semibold" data-astro-cid-ikzcxylh>
Schedule Your Assessment
</button> </form> </div> </div> </div> </section>  <div id="success-modal" class="fixed inset-0 bg-black/60 hidden items-center justify-center z-50" data-astro-cid-ikzcxylh> <div class="bg-white rounded-2xl p-8 text-center max-w-sm w-full animate-scaleIn" data-astro-cid-ikzcxylh> <div class="mx-auto w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4" data-astro-cid-ikzcxylh>
✓
</div> <h3 class="text-2xl font-bold mb-2" data-astro-cid-ikzcxylh>Message Sent!</h3> <p class="text-gray-600 mb-6" data-astro-cid-ikzcxylh>
Thank you for contacting us. We’ll get back to you shortly.
</p> <button id="close-modal" class="px-6 py-2 bg-[#C89945] text-white rounded-lg font-semibold" data-astro-cid-ikzcxylh>
Close
</button> </div> </div> ` }));
}, "/home/ocode-2023/FrontendHFS/src/pages/assessment.astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/assessment.astro";
const $$url = "/assessment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Assessment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
