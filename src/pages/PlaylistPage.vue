<template>
  <q-page>

    <!-- HERO -->
    <section class="hero-section">
      <video class="bg" autoplay muted loop playsinline>
        <source src="/videos/classical-bg.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- ALBUM GRID -->
    <section class="albums-section q-pa-xl">
      <div class="row q-col-gutter-xl">

        <div
          v-for="album in albums"
          :key="album.id"
          class="col-6 col-md-4 col-lg-3"
        >
          <q-card
            class="album-card"
            flat
            @click="goToAlbum(album.id)"
          >
            <q-img
              :src="album.cover"
              ratio="1"
              class="album-cover"
            />

            <q-card-section class="q-pa-sm">
              <div class="album-title">
                {{ album.title }}
              </div>
              <div class="album-artist">
                {{ album.artist }}
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </section>

  </q-page>
</template>

<script lang="ts">
  import PlaylistPage from '../script/PlaylistPage'

  export default PlaylistPage
</script>

<style src="../css/PlaylistPage.scss" scoped></style>
