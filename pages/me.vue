<template>
  <div>
    <section class="main">
      <div class="main-wrapper has-padding-b-6">
        <Breadcrumb current-category="me" />
        <div class="container has-padding-t-4">
          <div class="content">
            <div
              class="title font-title-regular is-size-2 has-text-weight-normal"
            >
              About Me
            </div>

            <div class="content font-light is-size-5">
              <p>
                I am currently working at Bukalapak as a Frontend Engineer. I am
                now in the Logistics team, responsible for building, refining &
                maintaining various core features related to Couriers, Shipping
                and Addresses.
              </p>
              <p>
                We recently launched new delivery services namely Bayar di
                Tempat (COD), Kurir Lapak, and Indah Logistic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper has-margin-b-2"></div>
    </section>
  </div>
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
