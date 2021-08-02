<template>
  <li>
    <h2>{{ data.name }}{{ data.isFavorite ? ' (Favorite)' : '' }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="deleteThis">Delete</button>
    <ul v-if="isShowingDetails">
      <li><strong>Phone:</strong> {{ data.phone }}</li>
      <li><strong>Email:</strong> {{ data.email }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Friend as FriendModel } from '../models/Friend'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<FriendModel>,
      required: true
    }
  },
  emits: {
    'toggle-favorite': (id: string) => {},
    delete: (id: string) => {}
  },
  data () {
    return {
      isShowingDetails: true
    }
  },
  methods: {
    deleteThis () {
      this.$emit('delete', this.data.id)
    },
    toggleDetails () {
      this.isShowingDetails = !this.isShowingDetails
    },
    toggleFavorite () {
      this.$emit('toggle-favorite', this.data.id)
    }
  }
})
</script>
