<template>
  <div>
    <PostList
      title="posts"
      :posts="posts"
      :show-load-more-btn="showLoadMoreBtn"
      :load-more-btn-text="loadMoreBtnText"
      @load-more="loadMore()"
    >
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
    </PostList>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostItem,
    PostList,
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
      showLoadMoreBtn: true,
      loadMoreBtnText: 'Load More',
      limit: 6,
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
      this.loadMoreBtnText = '...'
      const res = await this.$axios.$get(`${process.env.baseUrl}/posts`, {
        params: {
          _start: this.start,
          _limit: this.limit,
          _sort: this.sort,
        },
      })

      if (res.length === 0) {
        this.showLoadMoreBtn = false
        return
      }

      this.loadMoreBtnText = 'Load More'
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
