import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {


  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    }
  }
};

export default config;
// export default {
//   kit: {
// 		paths: {
// 			base: "/josepe"
// 		},
//     adapter: adapter({
//       // default options are shown. On some platforms
//       // these options are set automatically — see below
//       pages: 'dist',
//       assets: 'dist',
//       fallback: null,
//       precompress: false,
//       domain: '',
//       jekyll: false
//     })
//   }
// };
