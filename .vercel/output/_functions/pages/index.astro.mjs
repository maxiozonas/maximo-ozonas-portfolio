import { c as createComponent, r as renderTemplate, d as defineScriptVars, a as addAttribute } from '../chunks/astro/server_C9qIs3A1.mjs';
import { d as defaultLang } from '../chunks/ui_IPvj4P7X.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<meta http-equiv="refresh"', "><script>(function(){", "\n  window.location.pathname = `/${defaultLang}`;\n})();<\/script>"], ['<meta http-equiv="refresh"', "><script>(function(){", "\n  window.location.pathname = \\`/\\${defaultLang}\\`;\n})();<\/script>"])), addAttribute(`0;url=/${defaultLang}`, "content"), defineScriptVars({ defaultLang }));
}, "C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/max/Proyectos/maximo-ozonas-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
