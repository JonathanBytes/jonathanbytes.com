/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  mdx: async filename => {
    const [rehypeHighlight] = await Promise.all([
      import('rehype-highlight').then(mod => mod.default)
    ])
    return {
      rehypePlugins: [rehypeHighlight]
    }
  },
  browserNodeBuiltinsPolyfill: {
    modules:
    {
      fs: true,
      path: true,
      process: true
    }
  }
};
