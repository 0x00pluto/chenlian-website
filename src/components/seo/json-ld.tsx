import { buildHomeJsonLd } from "@/lib/geo/json-ld";

export function JsonLd() {
  const data = buildHomeJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
