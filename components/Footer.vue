<template>
  <section class="footer has-padding-bt-2">
    <div class="container">
      <div class="content">
        <div class="columns link-social has-text-centered">
          <div class="column is-vcentered">
            <span
              class="title-social title is-size-6 font-light has-margin-r-7"
            >
              Find me on:
            </span>
            <a
              :href="facebook"
              target="_blank"
              rel="noopener"
              class="has-margin-l-7"
            >
              <fa-icon :icon="['fab', 'facebook-square']" class="fa-2x" />
            </a>
            &nbsp;
            <a
              :href="instagram"
              target="_blank"
              rel="noopener"
              class="has-margin-l-7"
            >
              <fa-icon :icon="['fab', 'instagram']" class="fa-2x" />
            </a>
            &nbsp;
            <a
              :href="linkedin"
              target="_blank"
              rel="noopener"
              class="has-margin-l-7"
            >
              <fa-icon :icon="['fab', 'linkedin']" class="fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      facebook: 'https://facebook.com/deny.hrnt',
      instagram: 'https://www.instagram.com/dannyhrnt',
      linkedin: 'https://www.linkedin.com/in/deny-herianto-81761093/',
    }
  },
}
</script>
