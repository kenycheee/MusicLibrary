<template>
  <q-page padding>
    <div class="about-wrapper">

      <div class="text-center q-mb-xl">
        <h1 class="about-title">About Me</h1>
        <p class="about-subtitle">
          Cerita singkat tentang musik dan selera saya 🎶
        </p>
      </div>

      <div class="row q-col-gutter-xl items-center">
        <!-- Foto -->
        <div class="col-12 col-md-4 text-center">
          <q-img
            src="/images/profile.jpg"
            ratio="1"
            class="profile-img"
          />
        </div>

        <!-- Deskripsi -->
        <div class="col-12 col-md-8">
          <p class="about-text">
            Saya membuat website ini sebagai tempat pribadi untuk
            menyimpan dan membagikan musik-musik yang sering saya dengarkan.
            Musik bagi saya bukan hanya hiburan, tapi juga teman dalam
            berbagai suasana.
          </p>

          <p class="about-text">
            Genre yang sering saya dengarkan mulai dari
            classical, instrumental, soundtrack, hingga music modern
            yang menemani aktivitas sehari-hari.
          </p>

          <p class="about-text">
            Website ini akan terus saya update seiring bertambahnya
            playlist dan referensi musik favorit saya.
          </p>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>

<style scoped>
.about-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 600;
}

.about-subtitle {
  color: #666;
  font-size: 1.1rem;
}

.profile-img {
  max-width: 250px;
  border-radius: 50%;
  margin: 0 auto;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
</style>
