<template>
  <div>
    <div class="card is-shadowless">
      <div class="card-image">
        <figure
          :style="
            'background-image: url(' +
            imageUrl +
            '); background-size: cover; background-position: center;'
          "
          class="image is-5by3 is-rounded"
        />
      </div>
      <div class="card-content is-paddingless-lr has-padding-bt-7">
        <div class="content">
          <h5
            class="title-posts font-bold has-text-weight-normal is-marginless-b font-title-regular"
          >
            {{ post.post_title }}
          </h5>

          <div v-if="post.post_category" class="has-margin-t-8">
            <span class="title-category font-bold is-uppercase color-secondary"
              >{{ post.post_category.post_category_name }}&nbsp;</span
            >
            <span
              v-if="post.created_at"
              class="title-post-time font-light is-uppercase"
              >{{ post.created_at | date }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(value) {
      return dayjs(value).format('D MMMM YYYY')
    },
  },
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    imageUrl() {
      const RGX_LEADING_SLASH = /^\//
      if (RGX_LEADING_SLASH.test(this.post.post_image.url)) {
        return `${process.env.baseUrl}${this.post.post_image.url}`
      }

      return this.post.post_image.url
    },
  },
}
</script>
