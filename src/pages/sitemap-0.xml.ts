import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { deskSlug } from "../site.config";
import site from "../site.config";

const origin = "https://www.info.org.pl";

export const GET: APIRoute = async () => {
  const posts = await getCollection("wiadomosci");
  const pages = ["/", "/live/", "/wiadomosci/", "/deski/", "/redakcja/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...site.desks.map((d) => `${origin}/deski/${deskSlug(d.name)}/`),
    ...posts.map((p) => `${origin}/wiadomosci/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
