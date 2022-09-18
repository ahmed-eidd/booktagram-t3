
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
});

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   i18n: {
//     locales: ['en', 'de'],
//     defaultLocale: 'en',
//   },
// };
