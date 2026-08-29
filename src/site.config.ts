const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "INFO.ORG.PL",
  shortName: "INFO",
  domain: "info.org.pl",
  tagline: "Serwis informacyjny: Polska, świat, gospodarka i materiały wideo na żywo",
  emailUser: "haser88",
  emailDomain: "gmail.com",
  city: "Warszawa",
  address: "ul. Marszałkowska 84/92, 00-514 Warszawa",
  author: "Paweł Kruk",
  authorBio: "Redaktor dyżurny. Skraca fakty, nie dokłada narracji.",
  authorRole: "Redaktor dyżurny",
  authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1495020689067-958852a7765e", 1600),
  covers: {
    Polska: u("photo-1529107386315-e1a2ed48a620"),
    Świat: u("photo-1451187580459-43490279c0fa"),
    Gospodarka: u("photo-1611974789855-9c2a0a7236a3"),
    Technologia: u("photo-1518770660439-4636190af475"),
    Społeczeństwo: u("photo-1529156069898-49953e39b3ac"),
    default: u("photo-1495020689067-958852a7765e"),
  } as Record<string, string>,
  desks: [
    { name: "Polska", blurb: "Sejm, samorządy, infrastruktura, decyzje, które widać w sklepach i na torach." },
    { name: "Świat", blurb: "Konflikty, wybory, migracje — bez tłumaczenia wszystkiego w pięciu zdaniach." },
    { name: "Gospodarka", blurb: "Stopy, ceny, firmy i to, co realnie zmienia budżet domowy." },
    { name: "Technologia", blurb: "Sieci, AI, cyberbezpieczeństwo — praktycznie, nie z broszury." },
  ],
  /** Embedowalne kanały / streamy (YouTube). Live może być offline — wtedy YT pokazuje ostatni materiał. */
  liveFeeds: [
    {
      label: "Al Jazeera English — LIVE",
      region: "Świat",
      embed: "https://www.youtube.com/embed/gCNeDWCI0vo",
      note: "Kanał informacyjny na żywo — relacje międzynarodowe",
    },
    {
      label: "Lofi news desk — ambient (backup)",
      region: "Studio",
      embed: "https://www.youtube.com/embed/jfKfPfyJRdk",
      note: "Backup player gdy stream news jest offline",
    },
    {
      label: "Good Life Radio — 24/7",
      region: "Studio",
      embed: "https://www.youtube.com/embed/36YnV9STBqc",
      note: "Zapasowy stream embedowalny 24/7",
    },
    {
      label: "Al Jazeera English — LIVE (mirror)",
      region: "Świat",
      embed: "https://www.youtube.com/embed/gCNeDWCI0vo",
      note: "Ten sam feed — druga ramka na /live/",
    },
  ],

  ticker: [
    "Dyżur redakcyjny 7:00–23:00",
    "Materiały wideo: kanały live + reportaże",
    "Bez paywalla na teksty",
    "Dyżur: formularz /kontakt/",
  ],
};

export function deskSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
