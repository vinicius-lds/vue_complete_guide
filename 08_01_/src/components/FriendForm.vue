<template>
  <div>
    <form @submit.prevent="add">
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input id="phone" v-model="phone" type="text" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="email" v-model="email" type="text" />
      </div>
      <div>
        <button>Add Friend</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Friend } from '../models/Friend'

export default defineComponent({
  data () {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  emits: {
    submit: (friend: Friend) => {}
  },
  methods: {
    add (): void {
      this.$emit('submit', {
        id: new Date().toString(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: false
      })
    }
  }
})
</script>
