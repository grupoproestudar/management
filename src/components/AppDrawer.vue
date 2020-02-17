<template>
  <v-navigation-drawer id="appDrawer" fixed app v-model="drawer" width="200">
    <v-toolbar color="primary darken-1" dark>
      <v-toolbar-title class="ml-0 pl-3">
        <span>Gestão</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense expand>
        <template v-for="(item, i) in menus">
          <v-list-group :key="i" :prepend-icon="item.icon" :append-icon="null">
            <v-list-tile :to="item.to" slot="activator" ripple="ripple" >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  created () {
    window.getApp.$on('APP_DRAWER_TOGGLED', () => {
      this.drawer = (!this.drawer);
    });
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
  },
  data: () => ({
    drawer: true,
    menus: [{
        title: "Home",
        icon: 'home',
        to:"/"
    },
    {
        title: "Feedbacks",
        icon: 'feedback',
        to:"/feedback"
    },
    {
        title: "Apadrinhamento",
        icon: 'accessibility_new',
        to:"/mentoring"
    }],
    scrollSettings: {
      maxScrollbarLength: 160
    }
  })
};
</script>

<style lang="stylus">
#appDrawer {
  overflow: hidden;

  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
</style>
