<template>
  <div>
    <section class="main">
      <Breadcrumb :current-category="post.post_category.post_category_name" />

      <div class="caption-wrapper has-padding-t-4 has-padding-b-6">
        <div class="container">
          <div class="content">
            <div
              class="title font-title-regular is-size-2 has-text-weight-normal"
            >
              {{ post.post_title }}
            </div>

            <div class="columns">
              <div class="post-author column">
                <Author :created-at="post.created_at" name="Deny Herianto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper has-margin-b-2">
        <div class="container">
          <div class="cover has-margin-b-4">
            <img :src="imageUrl" :alt="post.title" />
          </div>
          <div class="content font-light is-size-5">
            <vue-markdown>{{ postContent }}</vue-markdown>
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
    const url = `${process.env.baseUrl}/posts/${id}`
    const res = await app.$axios.$get(url)
    return { post: res, url: params.id }
  },
  data() {
    return {
      post: {},
      url: '',
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.post.post_image.url}`
    },
    postContent() {
      return this.post.post_content.replaceAll(
        '/uploads',
        `${process.env.baseUrl}/uploads`
      )
    },
  },
  head() {
    return {
      title: `${this.post.post_title} - ${process.env.title}`,
      meta: [
        {
          property: 'og:title',
          content: this.post.post_title,
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
