<template>
    <li>
        <h2>{{ data.name }}</h2>
        <button @click="toggle">Show Details</button>
        <ul v-if="isShowingDetails">
        <li><strong>Phone:</strong> {{ data.phone }}</li>
        <li><strong>Email:</strong> {{ data.email }}</li>
        </ul>
    </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    data() {
        return {
            isShowingDetails: false,
            data: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
            },
        }
    }
})
export default class Friend extends Vue {

  isShowingDetails: boolean = false;

  toggle(): void {
    this.isShowingDetails = !this.isShowingDetails;
  }

}
</script>
