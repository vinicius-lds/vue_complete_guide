Vue.createApp({
    data() {
        return {
            isReseting: false,
            output: "",
            value: 0,
        };
    },
    computed: {

    },
    methods: {
        add(value) {
            this.value += value;
        }
    },
    watch: {
        value(value) {
            if (value < 37) {
                this.output = "Not there yet";
            } else {
                if (value > 37) {
                    this.output = "Too much!";
                } else {
                    this.output = "37";
                }
                if (!this.isReseting) {
                    setTimeout(() => {
                        this.value = 0;
                        this.isReseting = false;
                    }, 5000);
                }
            }
        }
    },
}).mount("#assignment");