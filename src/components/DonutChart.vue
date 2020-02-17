<template>
  <div v-if="show">
    <v-card>
      <v-card-text>
        <pie-chart :data="data" :donut="true" :title="title"></pie-chart>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    title: String,
    show: Boolean
  }
};
</script>

<style>
</style>
