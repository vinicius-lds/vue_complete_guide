const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      if (!this.name) {
        return "";
      }
      return `${this.name} Silva`;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  }
});

app.mount('#events');
