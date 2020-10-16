<template>
  <div>
    <section class="main">
      <Breadcrumb
        :current-category="bookmark.bookmark_category.bookmark_category_name"
      />

      <div class="caption-wrapper has-padding-t-4 has-padding-b-6">
        <div class="container is-smalls">
          <div class="content">
            <div
              class="title font-title-regular is-size-2 has-text-weight-normal"
            >
              {{ bookmark.bookmark_title }}
            </div>

            <div class="columns">
              <div class="post-author column">
                <Author
                  :created-at="bookmark.created_at"
                  name="Deny Herianto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper has-margin-b-2">
        <div class="container">
          <div class="cover has-margin-b-4">
            <img :src="imageUrl" :alt="bookmark.title" />
          </div>
          <div class="content font-light is-size-5">
            <vue-markdown>{{ bookmark.bookmark_description }}</vue-markdown>
          </div>

          <div class="content is-size-6">
            <a :href="bookmark.bookmark_source" target="_blank">Sauce here</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Author from '@/components/Author.vue'

export default {
  components: {
    VueMarkdown,
    Breadcrumb,
    Author,
  },
  async asyncData({ app, params }) {
    const splittedParams = params.id.split('-')
    const id = splittedParams[splittedParams.length - 1]
    const url = `${process.env.baseUrl}/bookmarks/${id}`
    const res = await app.$axios.$get(url)
    return { bookmark: res, url: params.id }
  },
  data() {
    return {
      bookmark: {},
      url: '',
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.bookmark.bookmark_media[0].url}`
    },
  },
  head() {
    return {
      title: `${this.bookmark.bookmark_title} - ${process.env.title}`,
      meta: [
        {
          property: 'og:title',
          content: this.bookmark.bookmark_title,
          template: (chunk) => `${chunk} - ${process.env.title}`,
          vmid: 'og:title',
        },
        {
          name: 'og:image',
          content: this.imageUrl,
        },
        {
          name: 'og:url',
          content: `${process.env.siteUrl}/${this.url}`,
        },
      ],
    }
  },
}
</script>
