import MentoringService from "@/services/mentoring-service";
export default {
  data: () => ({
    dialog: false,
    detail: "",
    search: "",
    basic: {
      headers: [{
          text: "Descrição",
          value: "feedback",
          align: "center",
          sortable: true
        },
        {
          text: "Avaliação",
          value: "grade",
          align: "center",
          sortable: true
        },
        {
          text: "Data",
          value: "createdAt",
          align: "center",
          sortable: true
        },
        {
          text: "Ações",
          value: null,
          align: "center",
          sortable: false
        }
      ],
      items: []
    }
  }),
  methods: {
    async onLoad() {
      this.basic.items = await new MentoringService().get();
    },
    details(el) {
      this.detail = el.feedback;
      this.dialog = true;
    }
  }
}