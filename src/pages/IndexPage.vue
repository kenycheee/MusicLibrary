<template>
  <q-page class="home-page">

    <!-- ================= HERO ================= -->
    <section class="hero-section">

      <!-- Background Video -->
      <video
        class="bg-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/videos/classical-bg.mp4" type="video/mp4" />
      </video>

      <!-- Hero Content -->
      <div class="hero-box">
        <h1 class="hero-title">My Music World</h1>
        <p class="hero-subtitle">
          A personal collection of classical and instrumental music
        </p>
      </div>
    </section>

    <!-- ================= DETAILS SECTION ================= -->
    <section class="details-section">
      <div class="details-layout">

        <!-- LEFT -->
        <div class="details-title">
          <h2>My Personal Playlist</h2>
        </div>

        <!-- RIGHT -->
        <div class="details-text">
          <p>
            This website is a personal space where I collect and archive
            classical and instrumental music that I often listen to.
            Each playlist and performance shared here reflects my musical
            taste, inspiration, and moments in life accompanied by music.
          </p>

          <p>
            From orchestral works to violin performances, these selections
            are not curated for popularity, but chosen because they resonate
            deeply with me.
          </p>
        </div>

      </div>
    </section>

    <!-- ================= CONCERT SECTION ================= -->
    <section class="concert-section">
      <div class="concert-grid">

        <!-- CARD 1 -->
        <div class="concert-card highlight">
          <div class="date-badge">
            <span>DEC</span>
            <strong>31</strong>
          </div>

          <img src="/images/concert-1.jpg" alt="Concert" />

          <div class="concert-content">
            <h3>2026 Shanghai New Year Concert</h3>
            <p class="work">WAXMAN – Carmen Fantasy</p>

            <p class="details">
              Yu Long conductor<br />
              Chloe Chua violin<br />
              Shanghai Symphony Orchestra
            </p>

            <button class="more-btn">More Info</button>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="concert-card highlight">
          <div class="date-badge">
            <span>MAR</span>
            <strong>27</strong>
          </div>

          <img src="/images/concert-2.jpg" alt="Concert" />

          <div class="concert-content">
            <h3>Guiyang Concert</h3>
            <p class="work">
              MAX BRUCH – Violin Concerto No.1<br />
              R. STRAUSS – Also sprach Zarathustra
            </p>

            <p class="details">
              Zhang Guoyong conductor<br />
              Guiyang Symphony Orchestra
            </p>

            <button class="more-btn">More Info</button>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= MUSIC PLAYER ================= -->
    <section class="music-player-section">
      <div class="music-player">

        <!-- LEFT -->
        <div class="player-left">
          <img :src="currentSong.cover" class="album-cover" />

          <div class="player-info">
            <h4>{{ currentSong.title }}</h4>
            <p>{{ currentSong.artist }}</p>

            <audio ref="audio" :src="currentSong.src"></audio>

            <!-- PROGRESS -->
            <div class="progress-bar" @click="seek">
              <div class="progress-fill" :style="{ width: progress + '%' }"></div>
            </div>

            <!-- CONTROLS -->
            <div class="player-controls">
              <button @click="prevSong">⏮</button>
              <button @click="togglePlay">
                {{ isPlaying ? '❚❚' : '▶' }}
              </button>
              <button @click="nextSong">⏭</button>
            </div>
          </div>
        </div>

        <!-- RIGHT PLAYLIST -->
        <div class="playlist">
          <h5>Playlist</h5>
          <ul>
            <li
              v-for="(song, i) in songs"
              :key="song.title"
              :class="{ active: i === currentIndex }"
              @click="selectSong(i)"
            >
              <span>{{ song.title }}</span>
              <small>{{ song.artist }}</small>
            </li>
          </ul>
        </div>

      </div>
    </section>

  </q-page>

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

</template>

<script lang="ts">
import IndexPage from '../script/IndexPage'

export default IndexPage
</script>

<style src="../css/IndexPage.scss" scoped></style>
