import Util from "../util";
export default {
    data: () => ({
        donutTitle: "Quantidade de feedbacks por grupo",
        feedbackTableTitle: "Feedbacks",
        dataChart: null,
        dataChartShow: false,
        trending: [],
        grades: []
    }),
    methods: {
        onLoad(feedbacks) {
            this.dataChart = null;
            this.dataChartShow = feedbacks.length > 0;
            this.dataChart = feedbacks.map(this.filterGroup).reduce(Util.groupBy, {});
            this.onTrendingLoad(feedbacks);
        },
        onTrendingLoad(feedbacks) {
            let grades = feedbacks.map(this.filterGrade).reduce(Util.groupBy, {});
            this.trending = Object.keys(grades).map(key => {
                key = key.toString();
                let obj = this.getTemplateStatistic(key);
                let totalRegisters = feedbacks.length;
                let percent = Util.getPercent(grades[key], totalRegisters);
                return this.createNewTrending(obj.name, obj.color, percent);
            });
        },
        createNewTrending(name, color, percent) {
            return {
                subheading: `Quantidade de feedbacks ${name}`,
                headline: `${percent}%`,
                caption: "",
                percent: "",
                linear: {
                    value: percent,
                    color: color
                }
            };
        },
        getTemplateStatistic(key) {
            switch (key) {
                case "1":
                    return {
                        name: "Insuficientes",
                        color: "error"
                    };
                case "2":
                    return {
                        name: "Bons",
                        color: "info"
                    };
                default:
                    return {
                        name: "Excelentes",
                        color: "success"
                    };
            }
        },
        filterGroup(feedback) {
            return feedback.group;
        },
        filterGrade(feedback) {
            return feedback.grade;
        }
    },
    watch: {
      async feedbacks() {
        this.onLoad(this.feedbacks);
      }
    }
}