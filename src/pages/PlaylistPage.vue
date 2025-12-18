<template>
  <q-page padding>
    <h2>Playlist Favorit Saya</h2>

    <q-list bordered>
      <q-item v-for="(song, index) in songs" :key="index">
        <q-item-section>
          <q-item-label>{{ song.title }}</q-item-label>
          <q-item-label caption>{{ song.artist }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <audio controls :src="song.url"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      songs: [
        { title: "Nama Lagu 1", artist: "Artis 1", url: "/music/lagu1.mp3" },
        { title: "Nama Lagu 2", artist: "Artis 2", url: "/music/lagu2.mp3" },
      ],
    };
  },
};
</script>
