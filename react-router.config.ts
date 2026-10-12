import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  appDirectory: "src",
  // Server-side render by default, to enable SPA mode set this to false
  ssr: true,
  async prerender() {
    return [
      "/",
      "/solutions",
      "/solutions/build",
      "/solutions/create",
      "/solutions/promote",
      "/industries/education",
      "/industries/healthcare",
      "/industries/professional-services",
      "/about",
      "/contact",
      "/creative-workspace",
      "/how-it-works"
    ];
  },
} satisfies Config;
