export default {
      data: () => ({
        title:"",
        hideActions: true,
        hideHeaders: false,
        dialog: false,
        detail: "",
        search: "",
        titleDetails: "",
        basic: {
          headers: [
            {
              text: "Membro",
              value: "member",
              align: "center",
              sortable: true
            },
            {
              text: "Grupo",
              value: "group",
              align: "center",
              sortable: true
            },
            {
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
        details(el) {
          this.detail = el.feedback;
          this.dialog = true;
        }
      },
      watch: {
        feedbacks() {
          this.basic.items = this.feedbacks;
        }
      }
}