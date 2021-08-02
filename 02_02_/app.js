const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    onNameChange(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    reduce() {
      this.counter--;
    },
    submitForm(event) {
    }
  }
});

app.mount("#events");
