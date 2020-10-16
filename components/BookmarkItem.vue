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
            {{ bookmark.bookmark_title }}
          </h5>
          <div class="has-margin-t-8">
            <span class="title-category font-bold is-uppercase color-secondary"
              >{{
                bookmark.bookmark_category.bookmark_category_name
              }}&nbsp;</span
            >
            <span class="title-post-time font-light is-uppercase">{{
              bookmark.created_at | date
            }}</span>
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
    bookmark: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.bookmark.bookmark_media[0].formats.small.url}`
    },
  },
}
</script>
