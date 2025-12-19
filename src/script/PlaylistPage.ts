import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const router = useRouter()

    const goToAlbum = (id: number) => {
      void router.push(`/album/${id}`)
    }

    const albums = [
      {
        id: 1,
        title: 'Mozart Violin Concertos',
        artist: 'Chloe Chua',
        cover: '/images/saxophone-bg.jpg'
      },
      {
        id: 2,
        title: 'Butterfly Lovers & Paganini',
        artist: 'Chloe Chua',
        cover: '/images/butterfly.jpg'
      },
      {
        id: 3,
        title: 'Vivaldi Four Seasons',
        artist: 'Chloe Chua',
        cover: '/images/vivaldi.jpg'
      }
    ]

    return {
      albums,
      goToAlbum
    }
  }
})
