import { e as decodeKey } from './chunks/astro/server_C9Ip5n67.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BQ094GHK.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/","cacheDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/node_modules/.astro/","outDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/dist/","srcDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/","publicDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/public/","buildClientDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/dist/client/","buildServerDir":"file:///C:/Users/max/Proyectos/maximo-ozonas-portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/max/Proyectos/maximo-ozonas-portfolio/node_modules/.pnpm/astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cilxvsac.mjs","\u0000@astrojs-manifest":"manifest_lECPceAR.mjs","C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CkuofwdN.js","C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BYIGGjQ2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.createElement(\"div\");t.classList.add(\"custom-cursor\"),document.body.appendChild(t);const o=document.createElement(\"div\");o.classList.add(\"cursor-dot\"),document.body.appendChild(o);const c=e=>{const r=e.clientX,s=e.clientY;t.style.left=`${r}px`,t.style.top=`${s}px`,o.style.left=`${r}px`,o.style.top=`${s}px`};window.addEventListener(\"mousemove\",c),document.querySelectorAll('a, button, input, textarea, [role=\"button\"]').forEach(e=>{e.addEventListener(\"mouseenter\",()=>{t.classList.add(\"cursor-grow\"),o.classList.add(\"cursor-hide\")}),e.addEventListener(\"mouseleave\",()=>{t.classList.remove(\"cursor-grow\"),o.classList.remove(\"cursor-hide\")})}),document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(r){r.preventDefault();const s=this.getAttribute(\"href\");if(!s)return;const n=document.querySelector(s);n&&window.scrollTo({top:n.offsetTop,behavior:\"smooth\"})})})});"],["C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const i=document.querySelector(\"header\"),r=50,d=document.querySelectorAll(\".nav-link\"),c={};d.forEach(o=>{const e=o.getAttribute(\"data-section\");if(e){const n=document.getElementById(e);n&&(c[e]=n)}});const u=()=>{window.scrollY>r?i.classList.add(\"header-scrolled\"):i.classList.remove(\"header-scrolled\");const o=window.scrollY+i.offsetHeight;for(const e in c){const n=c[e];if(n){const a=n.offsetTop,m=a+n.offsetHeight;if(o>=a&&o<m){d.forEach(f=>f.classList.remove(\"active\"));const l=document.querySelector(`.nav-link[data-section=\"${e}\"]`);l&&l.classList.add(\"active\");break}}}};window.addEventListener(\"scroll\",u);const s=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");s&&t&&(s.addEventListener(\"click\",()=>{t.classList.contains(\"hidden\")?(t.classList.remove(\"hidden\"),setTimeout(()=>{t.classList.add(\"menu-visible\")},10)):(t.classList.remove(\"menu-visible\"),setTimeout(()=>{t.classList.add(\"hidden\")},300)),s.setAttribute(\"aria-expanded\",s.getAttribute(\"aria-expanded\")===\"true\"?\"false\":\"true\");const e=s.querySelector(\"svg\");e&&e.classList.toggle(\"menu-open\")}),document.addEventListener(\"click\",e=>{!s.contains(e.target)&&!t.contains(e.target)&&!t.classList.contains(\"hidden\")&&(t.classList.add(\"hidden\"),s.setAttribute(\"aria-expanded\",\"false\"))}),t.querySelectorAll(\"a\").forEach(e=>{e.addEventListener(\"click\",()=>{t.classList.add(\"hidden\"),s.setAttribute(\"aria-expanded\",\"false\")})}))});"]],"assets":["/_astro/index.KU9LLvFw.css","/favicon.svg","/imagen.jpg","/Maximo Ozonas CV Eng.pdf","/Maximo Ozonas CV.pdf","/projects/madryn-buceo.jpeg","/projects/madryn-empleos.jpeg","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Nvwq+h8HyAoob1YmpZjykxhO3+2e5ZCtCGKZpm2WpU0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
