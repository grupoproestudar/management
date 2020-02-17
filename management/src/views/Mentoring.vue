<template>
  <div v-if="showTable">
    <grid-details :dialog="dialog" :detail="detail"/>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Filtrar" single-line></v-text-field>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="basic.headers"
        :items="basic.items"
        :search="search"
        hide-actions
        class="elevation-0 table-striped"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.feedback | resume }}</td>
          <td class="text-xs-center"> <v-rating v-model="props.item.grade"  length="3"  readonly></v-rating></td>
          <td class="text-xs-center">{{ props.item.createdAt }}</td>
          <td class="text-xs-center">
            <v-tooltip bottom>
              <v-icon slot="activator" small class="mr-2" @click="details(props.item)">visibility</v-icon>
              <span>Detalhar</span>
            </v-tooltip>
          </td>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Não foi encontrado "{{ search }}" nos feedbacks.</v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import GridDetails from "@/components/GridDetails";
import Util from "../util";
import mentoringMixin from "@/mixins/mentoring-mixin"
export default {
  components: { GridDetails },
  mixins:[mentoringMixin],
  computed: {
    showTable() {
      return this.basic.items.length > 0;
    }
  },
  async created() {
    window.getApp.$on("APP_REFRESH", async () => {
      Util.onRefresh();
      await this.onLoad();
    });
    window.getApp.$on("ClOSE_DIALOG", () => {
      this.detail = "";
      this.dialog = false;
    });
  },
  async mounted() {
    await this.onLoad();
  }
};
</script>

<style>
</style>
