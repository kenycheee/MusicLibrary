<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>My Music World</q-toolbar-title>
        <q-btn flat label="Home" to="/" />
        <q-btn flat label="About" to="/about" />
        <q-btn flat label="Playlist" to="/playlist" />
        <q-btn flat label="Gallery" to="/gallery" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- ================= FOOTER ================= -->
    <footer class="site-footer">
      <div class="footer-container">

        <!-- LEFT -->
        <div class="footer-brand">
          <h3>My Music World</h3>
          <p>
            A personal archive of classical and instrumental music,
            collected and curated through my own listening journey.
          </p>
        </div>

        <!-- CENTER -->
        <div class="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/playlist">Playlist</a></li>
            <li><a href="#/gallery">Gallery</a></li>
            <li><a href="#/about">About</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        © 2025 My Music World — Personal Music Archive
      </div>
    </footer>
  </q-layout>
</template>

<style src="../css/footer.scss" scoped></style>
