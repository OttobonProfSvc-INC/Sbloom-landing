import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("industries/education", "routes/education.tsx"),
  route("industries/healthcare", "routes/healthcare.tsx"),
  route("industries/professional-services", "routes/professional-services.tsx"),
  route("solutions", "routes/solutions.tsx"),
  route("solutions/build", "routes/build.tsx"),
  route("solutions/create", "routes/create.tsx"),
  route("solutions/promote", "routes/promote.tsx"),
  route("about", "routes/about.tsx"),
  route("how-it-works", "routes/how-it-works.tsx"),
  route("creative-workspace", "routes/creative-workspace.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
