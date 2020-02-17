<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title> Grupo Pró - Estudar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="onRefresh()">
      <v-icon>refresh</v-icon>
    </v-btn>
     <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>
  
  </v-toolbar>
</template>

<script>
import Util from '../util';
export default {
  name: "app-toolbar",
  methods: {
    onRefresh() {
      window.getApp.$emit("APP_REFRESH");
    },
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
    handleFullScreen () {
      Util.toggleFullScreen();
    }
  }
};
</script>
