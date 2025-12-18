<template>
  <q-page padding>
    <h2>Gallery</h2>
    <div class="q-gutter-sm row">
      <q-img v-for="img in images" :key="img" :src="img" class="col-4" />
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      images: [
        "/images/pic1.jpg",
        "/images/pic2.jpg",
      ],
    };
  },
};
</script>
