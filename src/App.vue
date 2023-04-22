<template>
  <v-app>
    <Header v-if="movieFlag===false" @changePage="changePage" />
    <v-content>
      <TopPage v-if="pageId === 0" @emit-change="changeMovie"/>
      <Works v-if="pageId === 1"/>
      <Flow v-if="pageId === 2"/>
      <Company v-if="pageId === 3"/>
      <Contact v-if="pageId === 4"/>
    </v-content>
    <FooterComponent class='mt-10' />
  </v-app>
</template>
<script>
import Header from './components/Header.vue'
import TopPage from './components/TopPage.vue'
import Works from './components/Works.vue'
import Flow from './components/Flow.vue'
import Company from './components/Company.vue'
import Contact from './components/Contact.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',

  components: {
    Header, FooterComponent, TopPage, Works, Flow, Company, Contact
  },
  data: () => ({
    pageId: 0,
    movieFlag: false
  }),
  methods: {
    changePage (val) {
      this.pageId = val
    },
    changeMovie (val) {
      this.movieFlag = val
    }
  }
}
</script>
<style>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @media (min-width: 960px) {
    display: none !important;
  }
}
.v-tabs {
  display: none;

  @media (min-width: 960px) {
    display: block !important;
  }
}
</style>
