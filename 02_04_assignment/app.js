Vue.createApp({
    data() {
        return {
            isVisible: true,
            pClass: "",
        }
    },
    computed: {
        pClasses() {
            const result = {
                hidden: !this.isVisible,
                visible: this.isVisible,
            };
            result[this.pClass] = true;
            return result;
        },
    },
    methods: {
        toggleParagraph() {
            this.isVisible = !this.isVisible;
        }
    }
}).mount("#assignment");
