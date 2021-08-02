Vue.createApp({
    data() {
        return {
            tasks: [],
            taskName: "",
            isShowing: true,
            toggleTaskListText: "Hide list",
        };
    },
    watch: {
        isShowing(value) {
            if (value) {
                this.toggleTaskListText = "Hide list";
            } else {
                this.toggleTaskListText = "Show list";
            }
        }
    },
    methods: {
        onAddTask() {
            this.tasks.push(this.taskName);
            this.taskName = "";
        },
        onToggleList() {
            this.isShowing = !this.isShowing;
        }
    }
}).mount("#assignment");
