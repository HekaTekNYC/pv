import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react(), sitemap()],
  site: "https://www.perfectviewutah.com",
});
