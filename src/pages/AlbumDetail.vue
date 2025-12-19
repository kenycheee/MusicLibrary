<template>
  <!-- ALBUM FOUND -->
  <q-page v-if="album" class="q-pa-xl">

    <!-- HEADER -->
    <div class="row q-col-gutter-xl items-center">
      <div class="col-12 col-md-4">
        <q-img
          :src="album.cover"
          ratio="1"
          class="detail-cover"
        />
      </div>

      <div class="col-12 col-md-8">
        <div class="text-caption text-grey-6">Album</div>
        <h3 class="q-my-sm">{{ album.title }}</h3>
        <div class="text-subtitle2 text-grey-7">
          {{ album.artist }} • {{ album.year }}
        </div>

        <q-btn
          icon="play_arrow"
          label="Play"
          color="dark"
          class="q-mt-lg"
        />
      </div>
    </div>

    <!-- TRACK LIST -->
    <q-list class="q-mt-xl">
      <q-item
        v-for="(track, index) in album.tracks"
        :key="index"
        clickable
        class="track-item"
      >
        <q-item-section side>
          {{ index + 1 }}
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ track.title }}</q-item-label>
        </q-item-section>

        <q-item-section side class="text-grey-6">
          {{ track.duration }}
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>

  <!-- ALBUM NOT FOUND -->
  <q-page
    v-else
    class="q-pa-xl flex flex-center text-grey-6"
  >
    Album not found
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

/* =====================
   TYPES
===================== */
type Track = {
  title: string
  duration: string
}

type Album = {
  id: number
  title: string
  artist: string
  year: string
  cover: string
  tracks: Track[]
}

/* =====================
   ROUTE
===================== */
const route = useRoute()
const albumId = Number(route.params.id)

/* =====================
   DATA
===================== */
const albums: Album[] = [
  {
    id: 1,
    title: 'Mozart Violin Concertos',
    artist: 'Chloe Chua',
    year: '2025',
    cover: '/images/mozart.jpg',
    tracks: [
      { title: 'Violin Concerto No.3', duration: '21:35' },
      { title: 'Violin Concerto No.4', duration: '24:12' },
      { title: 'Violin Concerto No.5', duration: '31:40' }
    ]
  },
  {
    id: 2,
    title: 'Butterfly Lovers & Paganini',
    artist: 'Chloe Chua',
    year: '2024',
    cover: '/images/butterfly.jpg',
    tracks: [
      { title: 'Butterfly Lovers Concerto', duration: '28:10' },
      { title: 'Paganini Caprice No.24', duration: '4:52' }
    ]
  },
  {
    id: 3,
    title: 'Vivaldi Four Seasons',
    artist: 'Chloe Chua',
    year: '2023',
    cover: '/images/vivaldi.jpg',
    tracks: [
      { title: 'Spring', duration: '10:30' },
      { title: 'Summer', duration: '11:12' },
      { title: 'Autumn', duration: '12:01' },
      { title: 'Winter', duration: '9:45' }
    ]
  }
]

/* =====================
   COMPUTED ALBUM
===================== */
const album = albums.find(a => a.id === albumId)
</script>

<style scoped>
.detail-cover {
  border-radius: 10px;
}

.track-item {
  border-radius: 6px;
}

.track-item:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
