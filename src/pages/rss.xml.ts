import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Alumno | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://unrivaled-mochi.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}