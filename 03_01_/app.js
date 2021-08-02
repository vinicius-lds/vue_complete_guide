const app = Vue.createApp({
  data() {
    return {
      currentGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.currentGoal);
      this.currentGoal = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount("#user-goals");
