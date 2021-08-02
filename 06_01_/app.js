const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221991",
                    email: "julie@localhost.com",
                },
            ]
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component("app-friend", {
    template: `
    <li>
        <h2>{{ data.name }}</h2>
        <button @click="toggle">Show Details</button>
        <ul v-if="isShowingDetails">
        <li><strong>Phone:</strong> {{ data.phone }}</li>
        <li><strong>Email:</strong> {{ data.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            data: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
            },
            isShowingDetails: true,
        }
    },
    methods: {
        toggle() {
            this.isShowingDetails = !this.isShowingDetails;
        }
    }
});

app.mount("#app");