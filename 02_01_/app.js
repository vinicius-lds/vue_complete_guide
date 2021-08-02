const app = Vue.createApp({
    data: () => ({
        courseGoalA: "Finish the course and learn Vue!",
        courseGoalB: "Finish the course and master Vue!",
        vueLink: "https://vuejs.org/",

    }),
    methods: {
        ouputGoal() {
            return Math.random() < 0.5 ? this.courseGoalA : this.courseGoalB;
        },
    }
});

app.mount("#user-goal");
