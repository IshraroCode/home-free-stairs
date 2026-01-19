import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_DQV407cP.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contact"
  };
  const contactInfo = {
    email: "info@legacycontracting.com",
    phone: "(555) 123-4567"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-6" data-astro-cid-uw5kdbxl> <div class="max-w-6xl mx-auto text-center" data-astro-cid-uw5kdbxl> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-uw5kdbxl>
Contact Us
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-astro-cid-uw5kdbxl>
Get in touch with our team to discuss your needs or book a consultation.
</p> </div> </section>  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-astro-cid-uw5kdbxl> <div class="max-w-6xl mx-auto" data-astro-cid-uw5kdbxl> <!-- Grid: Left content, Right form --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start" data-astro-cid-uw5kdbxl> <!-- Left Side: Booking Consultation --> <div class="space-y-6 lg:space-y-8 text-gray-900" data-astro-cid-uw5kdbxl> <!-- Main Heading --> <div class="space-y-4" data-astro-cid-uw5kdbxl> <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight" data-astro-cid-uw5kdbxl>
Book a<br class="hidden sm:inline" data-astro-cid-uw5kdbxl>
consultation<br data-astro-cid-uw5kdbxl>
to discuss<br data-astro-cid-uw5kdbxl>
your needs.
</h2> <p class="text-xl text-gray-600 leading-relaxed max-w-md" data-astro-cid-uw5kdbxl>
Share your needs and we'll help you choose the right service.
</p> </div> <!-- Contact Info --> <div class="space-y-4 pt-6" data-astro-cid-uw5kdbxl> <div class="flex items-center gap-3" data-astro-cid-uw5kdbxl> <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center" data-astro-cid-uw5kdbxl> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-uw5kdbxl></path> </svg> </div> <div class="space-y-1" data-astro-cid-uw5kdbxl> <p class="text-sm font-medium text-gray-600" data-astro-cid-uw5kdbxl>E-mail:</p> <p class="text-base font-semibold" data-astro-cid-uw5kdbxl>${contactInfo.email}</p> </div> </div> <div class="flex items-center gap-3" data-astro-cid-uw5kdbxl> <div class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center" data-astro-cid-uw5kdbxl> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-uw5kdbxl></path> </svg> </div> <div class="space-y-1" data-astro-cid-uw5kdbxl> <p class="text-sm font-medium text-gray-600" data-astro-cid-uw5kdbxl>Ph. no:</p> <p class="text-base font-semibold" data-astro-cid-uw5kdbxl>${contactInfo.phone}</p> </div> </div> </div> </div> <!-- Right Side: Contact Form --> <div class="space-y-6" data-astro-cid-uw5kdbxl> <!-- Subtitle --> <div class="space-y-3" data-astro-cid-uw5kdbxl> <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black" data-astro-cid-uw5kdbxl>Get in touch with us.</h3> <p class="text-gray-600 leading-relaxed max-w-md" data-astro-cid-uw5kdbxl>
At Legacy Contracting Inc., there is no job too big or too small. We look forward to discussing your renovation needs.
</p> </div> <!-- Form --> <form id="contact-form" class="space-y-5" data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> <label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-uw5kdbxl>Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200" placeholder="Your Name" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <label for="email" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-uw5kdbxl>Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200" placeholder="Your Email" data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <label for="phone" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-uw5kdbxl>Phone Number</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200" placeholder="Your Ph. No." data-astro-cid-uw5kdbxl> </div> <div data-astro-cid-uw5kdbxl> <label for="message" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-none" placeholder="Your Message" data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="w-full bg-primary text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wide text-sm" data-astro-cid-uw5kdbxl>
Submit
</button> </form> </div> </div> </div> </section> ` })} <!-- ✅ SUCCESS MODAL --> <div id="success-modal" class="fixed inset-0 bg-black/60 hidden items-center justify-center z-50" data-astro-cid-uw5kdbxl> <div class="bg-white rounded-2xl p-8 text-center max-w-sm w-full animate-scaleIn" data-astro-cid-uw5kdbxl> <!-- CHECK ICON --> <div class="mx-auto w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4" data-astro-cid-uw5kdbxl> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-astro-cid-uw5kdbxl></path> </svg> </div> <h3 class="text-2xl font-bold mb-2" data-astro-cid-uw5kdbxl>Message Sent!</h3> <p class="text-gray-600 mb-6" data-astro-cid-uw5kdbxl>
Thank you for contacting us. We’ll get back to you shortly.
</p> <button id="close-modal" class="px-6 py-2 bg-[#C89945] text-white rounded-lg font-semibold" data-astro-cid-uw5kdbxl>
Close
</button> </div> </div> ${renderScript($$result, "/home/ocode-2023/FrontendHFS/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/ocode-2023/FrontendHFS/src/pages/contact.astro", void 0);

const $$file = "/home/ocode-2023/FrontendHFS/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
