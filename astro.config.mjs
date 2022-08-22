import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://gleeful-elf-90e583.netlify.app/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
