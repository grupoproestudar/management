<template>
  <v-flex lg12 sm12 xs12>
    <template>
      <div id="feedbackTable" v-if="showTable">
        <grid-details :dialog="dialog" :detail="detail"/>
        <v-card>
          <v-card-title>
            {{ title }}
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Filtrar" single-line></v-text-field>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table
            :headers="basic.headers"
            :items="basic.items"
            :search="search"
            :hide-actions="hideActions"
            :hide-headers="hideHeaders"
            class="elevation-0 table-striped"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.member }}</td>
              <td class="text-xs-center">{{ props.item.group }}</td>
              <td class="text-xs-center">{{ props.item.feedback | resume }}</td>
              <td class="text-xs-center"> <v-rating v-model="props.item.grade"  length="3"  readonly></v-rating></td>
              <td class="text-xs-center">{{ props.item.createdAt }}</td>
              <td class="text-xs-center">
                <v-tooltip bottom>
                  <v-icon
                    slot="activator"
                    small
                    class="mr-2"
                    @click="details(props.item)"
                  >visibility</v-icon>
                  <span>Detalhar</span>
                </v-tooltip>
              </td>
            </template>
            <template
              slot="pageText"
              slot-scope="props"
            >Registros {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}</template>
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
  </v-flex>
</template>
<script>
import { mapState } from "vuex";
import GridDetails from "@/components/GridDetails";
import feedbackMixin from "@/mixins/feedback-mixin";
export default {
  name: "FeedbackTable",
  components: { GridDetails },
  mixins: [feedbackMixin],
  computed: {
    ...mapState(["feedbacks"]),
    showTable() {
      return this.basic.items.length > 0;
    }
  },
  beforeCreate() {
    this.$store.dispatch("subscribeFeedbacks");
  },
  mounted() {
    this.basic.items = this.feedbacks;
  },
  created() {
    window.getApp.$on("ClOSE_DIALOG", () => {
      this.detail = "";
      this.dialog = false;
    });
  }
};
</script>

<style>
</style>
