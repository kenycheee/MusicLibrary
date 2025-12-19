const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      { path: "playlist", component: () => import("pages/PlaylistPage.vue") },

      {
        path: '/album/:id',
        component: () => import('pages/AlbumDetail.vue')
      }
    ],
  },
];

export default routes;
