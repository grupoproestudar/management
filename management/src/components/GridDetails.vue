<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <p class="break">{{ detail }}</p>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close()">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "grid-details",
  props: {
    title: String,
    detail: String,
    dialog: Boolean
  },
  methods: {
    close() {
      window.getApp.$emit("ClOSE_DIALOG");
    }
  }
};
</script>

<style>
.break {
  word-break: break-all;
}
</style>
