<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-toolbar class="app--toolbar" v-if="currentUser"></app-toolbar>
        <app-drawer class="app--drawer" v-if="currentUser"></app-drawer>
        <v-content>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption">Grupo Pró - Estudar &copy; {{ new Date().getFullYear() }}</span>
          </v-footer>
        </v-content>
      </v-app>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AppToolbar from "@/components/AppToolbar";
import AppDrawer from "@/components/AppDrawer";
import Util from "./util.js";
export default {
  components: {
    AppToolbar,
    AppDrawer
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    window.getApp = this;
    setInterval(() => {
      this.$store.dispatch("logout");
    }, 600000);
    window.getApp.$on("APP_REFRESH", () => {
      Util.onRefresh();
    });
  }
};
</script>
 <style lang="stylus" scoped>
 .setting-fab {
   top: 50% !important;
   right: 0;
   border-radius: 0;
 }

 .page-wrapper {
   min-height: calc(100vh - 64px - 50px - 81px);
 }
</style>