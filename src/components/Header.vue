<template>
  <header class="back">
    <v-app-bar
      app
      color="transparent"
      flat
    >
      <v-img
        position="relative"
        style="width: 300px; margin-left:-10px"
        src="../assets/logo4.png"
      ></v-img>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-tabs absolute right v-model="page">
        <v-tab v-for="(menuItem, index) in menuItems" :key="index" @click='getScrollY()'>
          {{ menuItem.name }}
        </v-tab>
         <v-tabs-slider color="transparent" />
      </v-tabs>
      <v-img
        position="relative"
        style="width: 15px; margin-left: 30px;"
        src="../assets/twitter.png"
      ></v-img>
      <v-img
        position="relative"
        style="width: 15px; margin-left: 20px;"
        src="../assets/insta.png"
      ></v-img>
      <v-img
        position="relative"
        style="width: 70px; margin-left: 30px;"
        src="../assets/documents.png"
      ></v-img>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary style="position:fixed;">
      <v-list nav dense>
        <v-list-item-group v-model="page">
          <v-list-item v-for="(menuItem, index) in menuItems" :key="index" @click='getScrollY()'>
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems,
      page: 0
    }
  },
  watch: {
    page: function (val) {
      this.$emit('changePage', val)
    }
  },
  methods: {
    getScrollY () {
      window.scroll(
        {
          top: 0,
          behavior: 'smooth'
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/bahnschrift');

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
    position: auto;
    display: block !important;
  }
}

.v-tab {
    text-transform: none;
    font-family: Bahnschrift;
    font-weight: bold;
    font-size: 105%;
}

.v-image {
  display: none;

  @media (min-width: 960px) {
    position: auto;
    display: block !important;
  }
}

.back {
  background-color: rgba(255, 187, 0, 0.089);
}

</style>
