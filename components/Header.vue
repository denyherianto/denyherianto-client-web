<template>
  <section class="header">
    <nav class="navbar is-transparent is-fixed-top has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link :to="'/'" class="navbar-item">
            <img src="@/assets/images/logo.png" alt="eka" />
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger has-text-black"
            :class="{ 'has-menu-active': isActive }"
            aria-label="menu"
            aria-expanded="false"
            @click.prevent="toggleMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isActive }">
          <div class="navbar-end">
            <nuxt-link
              v-for="(v, k) in menus"
              :key="k"
              :to="'/' + v.link"
              class="navbar-item has-text-black font-light is-uppercase"
            >
              {{ v.name }}
            </nuxt-link>
            <!-- <a href="#" class="navbar-item">
              <ColorModePicker />
            </a> -->
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
// import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    // ColorModePicker,
  },
  data() {
    return {
      logo: '',
      isActive: false,
      menus: {
        notes: {
          link: 'notes',
          name: 'Notes',
        },
        bookmarks: {
          link: 'bookmarks',
          name: 'Bookmarks',
        },
        // projects: {
        //   link: 'projects',
        //   name: 'Projects',
        // },
        me: {
          link: 'me',
          name: '#me',
        },
      },
    }
  },
  watch: {
    '$route.fullPath': {
      handler(newVal) {
        if (newVal) {
          this.closeMenu()
        }
      },
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },
    closeMenu() {
      this.isActive = false
    },
  },
}
</script>
