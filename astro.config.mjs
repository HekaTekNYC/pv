import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://www.perfectviewutah.com" || "http://localhost:4321",
  // site: "https://www.perfectviewutah.com",
  integrations: [sitemap()],
});
