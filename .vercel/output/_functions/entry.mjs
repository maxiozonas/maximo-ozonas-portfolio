import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dsgbocin.mjs';
import { manifest } from './manifest_lECPceAR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_lang_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.0_@netlify+blobs@_1b896e46cfa550b2853122677dff950f/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[lang]/index.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b21d4ee2-e6fb-4bac-9420-3456ef399c76",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
