<template>
  <div class="author media">
    <figure class="media-left has-margin-r-6 is-marginless-bl">
      <p class="image is-48x48">
        <img :src="imageUrl" class="is-circle" alt="Me" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="title is-6">{{ name }}</div>
        <div v-if="!!createdAt" class="subtitle is-7">{{ createdAt | date }}</div>
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
    name: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '/me@48.png',
    },
  },
}
</script>
