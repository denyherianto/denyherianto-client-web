<template>
  <div>
    <HeroInvitations />
    <PostList title="Templates" :posts="portfolios" :show-load-more-btn="false">
      <div class="columns is-multiline">
        <nuxt-link
          v-for="portfolio in portfolios"
          :key="portfolio.id"
          :to="`/invitations/${toSlug(portfolio.portfolio_title)}-${
            portfolio.id
          }`"
          class="column is-4"
        >
          <PostItem
            :post="{
              post_title: portfolio.portfolio_title,
              post_content: portfolio.portfolio_content,
              post_image: portfolio.portfolio_image,
              post_category: portfolio.portfolio_category,
            }"
          />
        </nuxt-link>
      </div>
    </PostList>
  </div>
</template>

<script>
import HeroInvitations from '@/components/HeroInvitations.vue'
import PostItem from '@/components/PostItem.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    HeroInvitations,
    PostItem,
    PostList,
  },
  // async asyncData({ app }) {
  //   const res = await app.$axios.$get(`${process.env.baseUrl}/portfolios`, {
  //     params: {
  //       _start: 0,
  //       _limit: 30,
  //       _sort: 'created_at:desc',
  //     },
  //   })
  //   return { portfolios: res }
  // },
  data() {
    return {
      showLoadMoreBtn: false,
      loadMoreBtnText: 'Load More',
      limit: 6,
      page: 1,
      sort: 'created_at:desc',
      portfolios: [
        {
          id: 3,
          portfolio_title: 'Traditional Java',
          portfolio_content: '',
          published_at: '2022-08-29T09:30:54.585Z',
          // created_at: '2022-08-29T09:30:52.739Z',
          updated_at: '2022-08-29T09:50:45.113Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 30,
            name: '94eab880-9c88-11ee-bd64-398d859cbf06.jpg',
            alternativeText: '',
            caption: '',
            width: 1800,
            height: 1200,
            hash: '64e746b97a16b95fcf3f82ebc157fc78_60506610ac',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 284.39,
            url: '/uploads/94eab880_9c88_11ee_bd64_398d859cbf06_6be3468067.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:50:43.197Z',
            updated_at: '2022-08-29T09:50:43.208Z',
          },
        },
        {
          id: 4,
          portfolio_title: 'Flowering White',
          portfolio_content: '',
          published_at: '2022-08-29T09:47:03.099Z',
          created_at: '2022-08-29T09:47:01.286Z',
          updated_at: '2022-08-29T09:47:03.126Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 27,
            name: 'eo0t8h1dq1xdamaxdmqx.jpg',
            alternativeText: '',
            caption: '',
            width: 1366,
            height: 628,
            hash: 'eo0t8h1dq1xdamaxdmqx_72b887a19c',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 176.5,
            url: '/uploads/0dddf750_c373_11ee_8d0a_a51e76a96d8a_f3c1ecf58c.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:46:59.153Z',
            updated_at: '2022-08-29T09:46:59.166Z',
          },
        },
        {
          id: 5,
          portfolio_title: 'Vintage Brown',
          portfolio_content: '',
          published_at: '2022-08-29T09:49:36.056Z',
          created_at: '2022-08-29T09:49:34.452Z',
          updated_at: '2022-08-29T09:49:55.448Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 29,
            name: '64765dc0-f39c-11ed-9bca-81274156d864.jpeg',
            alternativeText: '',
            caption: '',
            width: 1000,
            height: 563,
            hash: 'What_Is_Justice_And_Law_For_The_Whole_Society_a7fd868986',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 61.37,
            url: '/uploads/64765dc0_f39c_11ed_9bca_81274156d864_102a924458.jpeg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:49:31.442Z',
            updated_at: '2022-08-29T09:49:31.453Z',
          },
        },
        {
          id: 6,
          portfolio_title: 'Majestic Citadel',
          portfolio_content: '',
          published_at: '2022-08-29T09:49:36.056Z',
          created_at: '2022-08-29T09:49:34.452Z',
          updated_at: '2022-08-29T09:49:55.448Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 29,
            name: '64765dc0-f39c-11ed-9bca-81274156d864.jpeg',
            alternativeText: '',
            caption: '',
            width: 1000,
            height: 563,
            hash: 'What_Is_Justice_And_Law_For_The_Whole_Society_a7fd868986',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 61.37,
            url: '/uploads/45cf4150_d96c_11ee_87b2_dd402f354725_8ae453b8f7.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:49:31.442Z',
            updated_at: '2022-08-29T09:49:31.453Z',
          },
        },
        {
          id: 7,
          portfolio_title: 'White Roses',
          portfolio_content: '',
          published_at: '2022-08-29T09:49:36.056Z',
          created_at: '2022-08-29T09:49:34.452Z',
          updated_at: '2022-08-29T09:49:55.448Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 29,
            name: '64765dc0-f39c-11ed-9bca-81274156d864.jpeg',
            alternativeText: '',
            caption: '',
            width: 1000,
            height: 563,
            hash: 'What_Is_Justice_And_Law_For_The_Whole_Society_a7fd868986',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 61.37,
            url: '/uploads/86434770_f39b_11ed_b658_c7cadb77c24a_caf933e3f1.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:49:31.442Z',
            updated_at: '2022-08-29T09:49:31.453Z',
          },
        },
        {
          id: 8,
          portfolio_title: 'Beautiful Green',
          portfolio_content: '',
          published_at: '2022-08-29T09:49:36.056Z',
          created_at: '2022-08-29T09:49:34.452Z',
          updated_at: '2022-08-29T09:49:55.448Z',
          portfolio_category: {
            id: 1,
            post_category_name: 'Rp. 350.000,-',
            created_at: '2020-10-18T13:55:31.648Z',
            updated_at: '2020-10-18T13:55:31.708Z',
          },
          portfolio_image: {
            id: 29,
            name: '64765dc0-f39c-11ed-9bca-81274156d864.jpeg',
            alternativeText: '',
            caption: '',
            width: 1000,
            height: 563,
            hash: 'What_Is_Justice_And_Law_For_The_Whole_Society_a7fd868986',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 61.37,
            url: '/uploads/050fc240_f39c_11ed_b658_c7cadb77c24a_0b2fb87ebc.jpeg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            created_at: '2022-08-29T09:49:31.442Z',
            updated_at: '2022-08-29T09:49:31.453Z',
          },
        },
      ],
    }
  },
  computed: {
    start() {
      return (this.page - 1) * this.limit
    },
  },
  methods: {
    // async loadMore() {
    //   this.page++
    //   this.loadMoreBtnText = '...'
    //   const res = await this.$axios.$get(`${process.env.baseUrl}/portfolios`, {
    //     params: {
    //       _start: this.start,
    //       _limit: this.limit,
    //       _sort: this.sort,
    //     },
    //   })

    //   if (res.length === 0) {
    //     this.showLoadMoreBtn = false
    //     return
    //   }

    //   this.loadMoreBtnText = 'Load More'
    //   this.portfolios = this.portfolios.concat(...res)
    // },
    toSlug(text) {
      /* eslint-disable */
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    },
  },
  head() {
    return {
      meta: [
        {
          name: 'og:title',
          content: 'Invitation Online',
        },
        {
          name: 'og:image',
          content: '/logo.png',
        },
        {
          name: 'og:url',
          content: process.env.siteUrl,
        },
      ],
    }
  },
}
</script>
