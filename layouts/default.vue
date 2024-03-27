<template>
  <div>
    <Header v-if="!['invitations', 'invitations-id'].includes($route.name)" />
    <HeaderInvitation
      v-if="['invitations', 'invitations-id'].includes($route.name)"
    />
    <nuxt />
    <Footer v-if="!['invitations', 'invitations-id'].includes($route.name)" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderInvitation from '@/components/HeaderInvitation.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    HeaderInvitation,
    Footer,
  },
}
</script>
