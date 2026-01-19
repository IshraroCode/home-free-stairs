import { e as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from './astro/server_Bc-coSIJ.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './PageLayout_7vC72bwJ.mjs';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$ConactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConactSection;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    id,
    isDark = true,
    // Default to dark for this theme
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const contactInfo = {
    email: "info@legacycontracting.com",
    phone: "(555) 123-4567"
  };
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "sectionBgClass": "bg-btn", "data-astro-cid-2yj7ufmd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" data-astro-cid-2yj7ufmd> <!-- Dark gradient background overlay for depth --> <div class="absolute inset-0 " data-astro-cid-2yj7ufmd></div> <div class="relative z-10" data-astro-cid-2yj7ufmd> <!-- Grid: Left content, Right form --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto" data-astro-cid-2yj7ufmd> <!-- Left Side: Booking Consultation --> <div class="space-y-6 lg:space-y-8 text-white" data-astro-cid-2yj7ufmd> <!-- Main Heading --> <div class="space-y-4" data-astro-cid-2yj7ufmd> <h2 class="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight" data-astro-cid-2yj7ufmd>
Book a<br class="hidden sm:inline" data-astro-cid-2yj7ufmd> <span class="text-white bg-clip-text text-transparent" data-astro-cid-2yj7ufmd>consultation</span><br data-astro-cid-2yj7ufmd>
to discuss<br data-astro-cid-2yj7ufmd>
your needs.
</h2> <p class="text-xl text-slate-300 leading-relaxed max-w-md" data-astro-cid-2yj7ufmd>
Share your needs and we'll help you<br class="hidden md:inline" data-astro-cid-2yj7ufmd>
choose the right service.
</p> </div> <!-- Contact Info --> <div class="space-y-4 pt-6" data-astro-cid-2yj7ufmd> <div class="flex flex-col md:flex-row items-center md:items-start gap-3" data-astro-cid-2yj7ufmd> <div class="flex-shrink-0 w-10 h-10 bg-[#C89945] rounded-full flex items-center justify-center" data-astro-cid-2yj7ufmd> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2yj7ufmd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-2yj7ufmd></path> </svg> </div> <div class="w-full space-y-1" data-astro-cid-2yj7ufmd> <p class="text-sm font-medium text-slate-300" data-astro-cid-2yj7ufmd>E-mail:</p> <p class="text-base font-semibold truncate" data-astro-cid-2yj7ufmd>${contactInfo.email}</p> </div> </div> <div class="flex flex-col md:flex-row items-center md:items-start gap-3" data-astro-cid-2yj7ufmd> <div class="flex-shrink-0 w-10 h-10 bg-[#C89945] rounded-full flex items-center justify-center" data-astro-cid-2yj7ufmd> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2yj7ufmd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-2yj7ufmd></path> </svg> </div> <div class="w-full space-y-1" data-astro-cid-2yj7ufmd> <p class="text-sm font-medium text-slate-300" data-astro-cid-2yj7ufmd>Ph. no:</p> <p class="text-base font-semibold truncate" data-astro-cid-2yj7ufmd>${contactInfo.phone}</p> </div> </div> </div> </div> <!-- Right Side: Contact Form --> <div class="space-y-6" data-astro-cid-2yj7ufmd> <!-- Subtitle --> <div class="space-y-3" data-astro-cid-2yj7ufmd> <h3 class=" text-3xl md:text-4xl lg:text-5xl  text-white" data-astro-cid-2yj7ufmd>Get in touch with us.</h3> <p class="text-slate-300 leading-relaxed max-w-md" data-astro-cid-2yj7ufmd>
At Legacy Contracting Inc., there is no job too big or too small. We look forward to discussing your renovation needs.
</p> </div> <!-- Form --> <form id="contact-form" class="space-y-5" data-astro-cid-2yj7ufmd> <div data-astro-cid-2yj7ufmd> <label for="name" class="block text-sm font-medium text-slate-300 mb-2" data-astro-cid-2yj7ufmd>Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Your Name" data-astro-cid-2yj7ufmd> </div> <div data-astro-cid-2yj7ufmd> <label for="email" class="block text-sm font-medium text-slate-300 mb-2" data-astro-cid-2yj7ufmd>Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3  bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Your Email" data-astro-cid-2yj7ufmd> </div> <div data-astro-cid-2yj7ufmd> <label for="phone" class="block text-sm font-medium text-slate-300 mb-2" data-astro-cid-2yj7ufmd>Phone Number</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3  bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" placeholder="Your Ph. No." data-astro-cid-2yj7ufmd> </div> <div data-astro-cid-2yj7ufmd> <label for="message" class="block text-sm font-medium text-slate-300 mb-2" data-astro-cid-2yj7ufmd>Message</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Your Message" data-astro-cid-2yj7ufmd></textarea> </div> <button type="submit" class="w-full bg-[#C89945] text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 uppercase tracking-wide text-sm" data-astro-cid-2yj7ufmd>
Submit
</button> </form> </div> </div> </div> </section> ` })} <!-- ✅ SUCCESS MODAL --> <div id="success-modal" class="fixed inset-0 bg-black/60 hidden items-center justify-center z-50" data-astro-cid-2yj7ufmd> <div class="bg-white rounded-2xl p-8 text-center max-w-sm w-full animate-scaleIn" data-astro-cid-2yj7ufmd> <!-- CHECK ICON --> <div class="mx-auto w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4" data-astro-cid-2yj7ufmd> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2yj7ufmd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" data-astro-cid-2yj7ufmd></path> </svg> </div> <h3 class="text-2xl font-bold mb-2" data-astro-cid-2yj7ufmd>Message Sent!</h3> <p class="text-gray-600 mb-6" data-astro-cid-2yj7ufmd>
Thank you for contacting us. We’ll get back to you shortly.
</p> <button id="close-modal" class="px-6 py-2 bg-[#C89945] text-white rounded-lg font-semibold" data-astro-cid-2yj7ufmd>
Close
</button> </div> </div> ${renderScript($$result, "/home/ocode-2023/FrontendHFS/src/components/HomePage/ConactSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/ocode-2023/FrontendHFS/src/components/HomePage/ConactSection.astro", void 0);

export { $$ConactSection as $ };
