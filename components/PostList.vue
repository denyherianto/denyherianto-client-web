<template>
  <div>
    <section class="main">
      <div class="main-wrapper has-padding-t-2">
        <div class="container">
          <h6 class="title is-5 is-uppercase font-light">
            <!-- Personal <span class="font-regular">{{ title }}</span> -->
            Personal {{ title }}
          </h6>

          <slot />

          <div class="posts has-margin-b-2">
            <!-- Load More -->
            <div v-if="showLoadMoreBtn" class="columns">
              <div class="column is-one-third is-offset-one-third">
                <a
                  class="button is-primary is-outlined is-fullwidth is-uppercase font-bold is-size-6 has-padding-bt-4"
                  @click.prevent="loadMore()"
                >
                  {{ loadMoreBtnText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    showLoadMoreBtn: {
      type: Boolean,
      default: true,
    },
    loadMoreBtnText: {
      type: String,
      default: 'Load More',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
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
    loadMore() {
      this.$emit('load-more')
    }
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
