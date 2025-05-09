import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "products/:id",
    file: "routes/products/$id.tsx",
  },
] satisfies RouteConfig;
