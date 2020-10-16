<template>
  <div>
    <PostList
      title="bookmarks"
      :posts="bookmarks"
      :show-load-more-btn="showLoadMoreBtn"
      :load-more-btn-text="loadMoreBtnText"
      @load-more="loadMore()"
    >
      <div class="columns is-multiline">
        <nuxt-link
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :to="`/bookmarks/${toSlug(bookmark.bookmark_title)}-${bookmark.id}`"
          class="column is-4"
        >
          <BookmarkItem :bookmark="bookmark" />
        </nuxt-link>
      </div>
    </PostList>
  </div>
</template>

<script>
import BookmarkItem from '@/components/BookmarkItem.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    BookmarkItem,
    PostList,
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get(`${process.env.baseUrl}/bookmarks`, {
      params: {
        _start: 0,
        _limit: 6,
        _sort: 'created_at:desc',
      },
    })
    return { bookmarks: res }
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
      const res = await this.$axios.$get(`${process.env.baseUrl}/bookmarks`, {
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
      this.bookmarks = this.bookmarks.concat(...res)
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
