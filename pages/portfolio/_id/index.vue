<template>
  <div>
    <section class="main">
      <div class="caption-wrapper has-padding-t-4 has-padding-b-6">
        <div class="container">
          <div class="content">
            <div
              class="title font-title-regular is-size-2 has-text-weight-normal"
            >
              {{ portfolio.portfolio_title }}
            </div>

            <div class="columns">
              <div class="post-author column">
                <Author
                  :created-at="portfolio.created_at"
                  name="Deny Herianto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper has-margin-b-2">
        <div class="container">
          <!-- <div class="cover has-margin-b-4">
            <img :src="imageUrl" :alt="portfolio.portfolio_title" />
          </div> -->
          <div class="content font-light is-size-5 has-padding-t-2">
            <vue-markdown>{{ portfolioContent }}</vue-markdown>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Author from '@/components/Author.vue'

export default {
  components: {
    VueMarkdown,
    Author,
  },
  async asyncData({ app, params }) {
    const splittedParams = params.id.split('-')
    const id = splittedParams[splittedParams.length - 1]
    const url = `${process.env.baseUrl}/portfolios/${id}`
    const res = await app.$axios.$get(url)
    return { portfolio: res, url: params.id }
  },
  data() {
    return {
      portfolio: {},
      url: '',
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.portfolio.portfolio_image.url}`
    },
    portfolioContent() {
      return (this.portfolio.portfolio_content ?? '').replaceAll(
        '/uploads',
        `${process.env.baseUrl}/uploads`
      )
    },
  },
  head() {
    return {
      title: `${this.portfolio.portfolio_title} - ${process.env.title}`,
      meta: [
        {
          property: 'og:title',
          content: this.portfolio.portfolio_title,
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
