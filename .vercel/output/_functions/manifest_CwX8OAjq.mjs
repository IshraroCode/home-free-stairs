import 'piccolore';
import { v as decodeKey } from './chunks/astro/server_Bc-coSIJ.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DiHISxRw.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ocode-2023/FrontendHFS/","cacheDir":"file:///home/ocode-2023/FrontendHFS/node_modules/.astro/","outDir":"file:///home/ocode-2023/FrontendHFS/dist/","srcDir":"file:///home/ocode-2023/FrontendHFS/src/","publicDir":"file:///home/ocode-2023/FrontendHFS/public/","buildClientDir":"file:///home/ocode-2023/FrontendHFS/dist/client/","buildServerDir":"file:///home/ocode-2023/FrontendHFS/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes scaleIn{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-2yj7ufmd]{animation:scaleIn .25s ease-out}\n"},{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes scaleIn{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-ikzcxylh]{animation:scaleIn .25s ease-out}\n"},{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/assessment","isIndex":false,"type":"page","pattern":"^\\/assessment$","segments":[[{"content":"assessment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/assessment.astro","pathname":"/assessment","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes scaleIn{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-uw5kdbxl]{animation:scaleIn .25s ease-out}\n"},{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:3rem}@media(max-width:1024px){.material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:2.5rem}}@media(max-width:640px){.material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:2rem}}\n@keyframes scaleIn{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-2yj7ufmd]{animation:scaleIn .25s ease-out}\n"},{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/services/[slug]","isIndex":false,"type":"page","pattern":"^\\/services\\/([^/]+?)$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/services/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes scaleIn{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-2yj7ufmd]{animation:scaleIn .25s ease-out}\n.material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:3rem}@media(max-width:1024px){.material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:2.5rem}}@media(max-width:640px){.material-symbols-rounded[data-astro-cid-3ag3xutg]{font-size:2rem}}\n"},{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"}],"routeData":{"route":"/terms-and-conditions","isIndex":false,"type":"page","pattern":"^\\/terms-and-conditions$","segments":[[{"content":"terms-and-conditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-and-conditions.astro","pathname":"/terms-and-conditions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Dpe5v9Qh.css"},{"type":"inline","content":"@keyframes scaleIn{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.animate-scaleIn[data-astro-cid-2yj7ufmd]{animation:scaleIn .25s ease-out}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://example.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/home/ocode-2023/FrontendHFS/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/assessment.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/services/[slug].astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/terms-and-conditions.astro",{"propagation":"none","containsHead":true}],["/home/ocode-2023/FrontendHFS/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/assessment@_@astro":"pages/assessment.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/terms-and-conditions@_@astro":"pages/terms-and-conditions.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CwX8OAjq.mjs","/home/ocode-2023/FrontendHFS/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BjKBgCxt.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/Homepage.png":"chunks/Homepage_BoGZm7R7.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/Homepage2.png":"chunks/Homepage2_DVh_AiBv.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/aboutSection.png":"chunks/aboutSection_DZh8MvaO.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/app-store.png":"chunks/app-store_DRugKMfk.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/assessment.png":"chunks/assessment_Cna0l5BO.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/consultation.png":"chunks/consultation_GmFoe-iC.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/default.png":"chunks/default_B-Vz9D11.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/google-play.png":"chunks/google-play_ejBSiY1R.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/hero-image.png":"chunks/hero-image_DvC7lH1A.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/icon.png":"chunks/icon_B5Chrqel.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/installation.png":"chunks/installation_3HiPTqRI.mjs","/home/ocode-2023/FrontendHFS/src/assets/images/user.png":"chunks/user_CZuksunW.mjs","/home/ocode-2023/FrontendHFS/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DxD0LfhQ.js","/home/ocode-2023/FrontendHFS/src/components/HomePage/ConactSection.astro?astro&type=script&index=0&lang.ts":"_astro/ConactSection.astro_astro_type_script_index_0_lang.CATlm-kL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/ocode-2023/FrontendHFS/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"contact-form\"),e=document.getElementById(\"success-modal\"),n=document.getElementById(\"close-modal\");t?.addEventListener(\"submit\",async s=>{s.preventDefault();const o=Object.fromEntries(new FormData(t));try{if(!(await fetch(\"http://0.0.0.0:8055/items/ContactUs/\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)})).ok)throw new Error(\"Failed\");e.classList.remove(\"hidden\"),e.classList.add(\"flex\"),t.reset()}catch{alert(\"Something went wrong. Please try again.\")}}),n?.addEventListener(\"click\",()=>{e.classList.add(\"hidden\"),e.classList.remove(\"flex\")})});"],["/home/ocode-2023/FrontendHFS/src/components/HomePage/ConactSection.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"contact-form\"),e=document.getElementById(\"success-modal\"),n=document.getElementById(\"close-modal\");t?.addEventListener(\"submit\",async s=>{s.preventDefault();const o=Object.fromEntries(new FormData(t));try{const a=await fetch(\"http://0.0.0.0:8055/items/ContactUs/\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)});e.classList.remove(\"hidden\"),e.classList.add(\"flex\"),t.reset()}catch{alert(\"Something went wrong. Please try again.\")}}),n?.addEventListener(\"click\",()=>{e.classList.add(\"hidden\"),e.classList.remove(\"flex\")})});"]],"assets":["/_astro/aboutSection.CtjLX9rq.png","/_astro/favicon.LSYYyxmX.ico","/_astro/user.Cjxu169C.png","/_astro/hero-image.J4rOSOtB.png","/_astro/Homepage2.B2z30Ije.png","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/hfslog.ZY0SP9Aw.png","/_astro/Qurova-Regular.CdqbP9uM.otf","/_astro/Qurova-Bold.BHN3N-B0.ttf","/_astro/app-store.t3tG4Jz3.png","/_astro/Homepage.DUmhE6Uw.png","/_astro/google-play.ISTMcpLO.png","/_astro/icon.D8Thc9_O.png","/_astro/assessment.D8bJTmN7.png","/_astro/consultation.Dn1l5i5X.png","/_astro/installation.BBrLDhH2.png","/_astro/default.BiNq7Vvb.png","/_astro/material-symbols-sharp.0IfmRZ0c.woff2","/_astro/material-symbols-outlined.Bgl3Icaq.woff2","/_astro/material-symbols-rounded.GzsEeY_J.woff2","/_astro/about.Dpe5v9Qh.css","/_headers","/robots.txt","/assets/headerbanner.png","/assets/hfslog.png","/assets/hfslog2.png","/decapcms/config.yml","/decapcms/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"mSYwaX+QJkfs6f5Ym3FVyY4D12K94ro825OxuvrDrD4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
