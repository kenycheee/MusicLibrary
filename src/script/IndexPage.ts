import { defineComponent, ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

type Song = {
  title: string
  artist: string
  src: string
  cover: string
}

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const audio = ref<HTMLAudioElement | null>(null)
    const isPlaying = ref(false)

    const songs = ref<Song[]>([
      {
        title: 'Dotonbori Dash',
        artist: 'Alan Lee Silva',
        src: '/audio/Dotonbori Dash.mp3',
        cover: '/images/Dotonbori.png'
      },
      {
        title: 'Carmen Fantasy',
        artist: 'Chloe Chua · Shanghai Symphony',
        src: '/audio/Carmen.mp3',
        cover: '/images/Carmen.png'
      },
      {
        title: 'Violin Concerto No.1',
        artist: 'Chloe Chua · Guiyang Symphony',
        src: '/audio/ViolinConcerto.mp3',
        cover: '/images/Violin.png'
      },
      {
        title: 'Violin Concerto No.1',
        artist: 'Chloe Chua · Guiyang Symphony',
        src: '/audio/ViolinConcerto.mp3',
        cover: '/images/Violin.png'
      },
      {
        title: 'Violin Concerto No.1',
        artist: 'Chloe Chua · Guiyang Symphony',
        src: '/audio/ViolinConcerto.mp3',
        cover: '/images/Violin.png'
      }
    ])

    const currentIndex = ref(0)

    const defaultSong: Song = {
      title: '',
      artist: '',
      src: '',
      cover: ''
    }

    const currentSong = computed<Song>(() => {
      return songs.value[currentIndex.value] || defaultSong
    })

    /* ===== TIME ===== */
    const duration = ref(0)
    const currentTime = ref(0)

    const progress = computed(() =>
      duration.value ? (currentTime.value / duration.value) * 100 : 0
    )

    /* ===== PLAYER ===== */
    const play = async () => {
      if (!audio.value) return
      await audio.value.play()
      isPlaying.value = true
    }

    const pause = () => {
      if (!audio.value) return
      audio.value.pause()
      isPlaying.value = false
    }

    const togglePlay = () => {
      void (isPlaying.value ? pause() : play())
    }

    /* ===== SEEK ===== */
    const seek = (e: MouseEvent) => {
      if (!audio.value) return
      const bar = e.currentTarget as HTMLElement
      const rect = bar.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audio.value.currentTime = percent * duration.value
    }

    /* ===== SONG CHANGE ===== */
    const selectSong = async (index: number) => {
      currentIndex.value = index
      isPlaying.value = false
      await nextTick()
      await play()
    }

    const nextSong = async () => {
      currentIndex.value = (currentIndex.value + 1) % songs.value.length
      isPlaying.value = false
      await nextTick()
      await play()
    }

    // ⏮ RESET DULU BARU PINDAH
    const prevSong = async () => {
      if (!audio.value) return

      if (audio.value.currentTime > 1) {
        audio.value.currentTime = 0
        return
      }

      currentIndex.value =
        (currentIndex.value - 1 + songs.value.length) % songs.value.length

      isPlaying.value = false
      await nextTick()
      await play()
    }

    /* ===== AUDIO EVENTS ===== */
    onMounted(() => {
      if (!audio.value) return

      audio.value.onloadedmetadata = () => {
        duration.value = audio.value?.duration || 0
      }

      audio.value.ontimeupdate = () => {
        currentTime.value = audio.value?.currentTime || 0
      }
    })

    // ===== BACK TO TOP =====
    const showBackToTop = ref(false)

    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 400
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      audio,
      songs,
      currentSong,
      currentIndex,
      isPlaying,
      progress,
      togglePlay,
      seek,
      nextSong,
      prevSong,
      selectSong,
      showBackToTop,
      scrollToTop
    }
  }
})
