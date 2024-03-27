<template>
  <div>
    <section class="main">
      <div class="main-wrapper has-margin-t-4">
        <Hero />
        <div class="container">
          <h6 class="title is-5 is-uppercase font-light">
            Latest <span class="font-regular">Notes</span>
          </h6>

          <div class="posts has-margin-b-2">
            <div class="columns is-multiline">
              <nuxt-link
                v-for="post in posts"
                :key="post.id"
                :to="`/notes/${toSlug(post.post_title)}-${post.id}`"
                class="column is-4"
              >
                <PostItem :post="post" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import PostItem from '@/components/PostItem.vue'

export default {
  components: {
    Hero,
    PostItem,
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get(`${process.env.baseUrl}/posts`, {
      params: {
        _start: 0,
        _limit: 6,
        _sort: 'created_at:desc',
      },
    })
    return { posts: res }
  },
  data() {
    return {
      loadingBtn: 'Load More',
      posts: [],
      limit: 3,
      page: 1,
      sort: 'created_at:desc',
    }
  },
  computed: {
    start() {
      return (this.page - 1) * this.limit
    },
  },
  methods: {
    async loadMore() {
      this.page++
      this.loadingBtn = '...'
      const res = await this.$axios.$get(`${process.env.baseUrl}/posts`, {
        params: {
          _start: this.start,
          _limit: this.limit,
          _sort: this.sort,
        },
      })
      this.loadingBtn = 'Load More'
      this.posts = this.posts.concat(...res)
    },
    toSlug(text) {
      /* eslint-disable */
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    },
  },
  head() {
    return {
      meta: [
        {
          name: 'og:title',
          content: "Deny's Daily",
        },
        {
          name: 'og:image',
          content: '/logo.png',
        },
        {
          name: 'og:url',
          content: process.env.siteUrl,
        },
      ],
    }
  },
}
</script>
