<template>
  <div id="pageDashboard">
    <v-layout row wrap>
      <v-flex v-for="(item,index) in trending" :key="index">
        <circle-statistic
          :title="item.subheading"
          :sub-title="item.headline"
          :caption="item.caption"
          :color="item.linear.color"
          :value="item.linear.value"
        ></circle-statistic>
      </v-flex>
    </v-layout>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex>
          <donut-chart :data="dataChart" :title="donutTitle" :show="dataChartShow"></donut-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DonutChart from "@/components/DonutChart";
import CircleStatistic from "@/components/CircleStatistic";
import dashboardMixin from "@/mixins/dashboard-mixin";

export default {
  name: "pageDashboard",
  mixins: [dashboardMixin],
  components: {
    CircleStatistic,
    DonutChart
  },
  computed: {
    ...mapState(["feedbacks"])
  },
  beforeCreate() {
    this.$store.dispatch("subscribeFeedbacks");
  },
  mounted() {
    this.onLoad(this.feedbacks);
  }
};
</script>
