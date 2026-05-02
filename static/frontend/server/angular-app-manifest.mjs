
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 611, hash: 'e255d60584e7329ee69ec00649f645f70b93ea198b9e471ec4915b07b5071910', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '6c0cbfae0d0277a806cb2b9dc613e4018f7f14f35ed73e6acfdaabd5b1018e4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24487, hash: '8d432a080f2bf0d07f3261af9de6bf71a21bbabc61a9e695cff0eac78ff60ed2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RPSFXESW.css': {size: 53, hash: 'UmQcBcgvrjM', text: () => import('./assets-chunks/styles-RPSFXESW_css.mjs').then(m => m.default)}
  },
};
