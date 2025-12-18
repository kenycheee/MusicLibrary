const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      { path: "playlist", component: () => import("pages/PlaylistPage.vue") },
      { path: "gallery", component: () => import("pages/GalleryPage.vue") },
    ],
  },
];

export default routes;
