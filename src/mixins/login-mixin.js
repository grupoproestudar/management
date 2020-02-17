export default {
    data: () => ({
        loading: false,
        loginForm: {
            email: "",
            password: ""
        }
    }),
    methods: {
        login() {
            this.loading = true;
            this.$store.dispatch("signIn", {
                login: this.loginForm,
                callback: () => {
                    this.$router.push("/home");
                },
                callbackErr: (err) => {
                    this.loading = false;
                    if (err.code === "auth/user-not-found") {
                        alert("Usuário ou Senha inválidos");
                        return;
                    }
                    alert("Sistema Indisponível!");
                }
            })
        }
    }
}