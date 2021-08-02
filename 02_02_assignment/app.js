const app = Vue.createApp({
    data: () => ({
        confirmedEnteredValue: "",
        enteredValue: "",
    }),
    methods: {
        confirmEnteredValue(event) {
            this.confirmedEnteredValue = event.target.value;
        },
        updateEnteredValue(event) {
            this.enteredValue = event.target.value;
        },
        showAlert() {
            alert("Some random alert");
        },
    },
});
app.mount("#assignment");
