<template>
  <div class="bread-wrapper has-padding-bt-4">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link :to="'/'" class="has-text-black font-light is-uppercase">
              Home
            </nuxt-link>
          </li>
          <li class="is-active">
            <a
              href="#"
              aria-current="page"
              class="font-regular is-uppercase color-secondary"
              >{{ currentCategory }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentCategory: {
      type: String,
      default: '',
    },
  },
}
</script>
