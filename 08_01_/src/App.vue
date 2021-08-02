<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <ul>
      <friend-form @submit="onFriendSubmit"></friend-form>
      <friend-item
        v-for="friend in friends"
        :data="friend"
        :key="friend.id"
        @toggle-favorite="onToggleFavorite"
        @delete="onDelete"
      ></friend-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Friend as FriendModel } from './models/Friend'
import FriendForm from './components/FriendForm.vue'
import FriendItem from './components/FriendItem.vue'

export default defineComponent({
  components: {
    FriendForm,
    FriendItem
  },
  data () {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          isFavorite: true
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221991',
          email: 'julie@localhost.com',
          isFavorite: false
        }
      ] as FriendModel[]
    }
  },
  methods: {
    onDelete (id: string): void {
      this.friends = this.friends.filter(friend => friend.id !== id)
    },
    onFriendSubmit (friend: FriendModel): void {
      this.friends.push(friend)
    },
    onToggleFavorite (id: string): void {
      const friend = this.friends.find(item => item.id === id)
      if (friend) {
        if (friend.isFavorite) {
          friend.isFavorite = false
        } else {
          this.friends.forEach(item => (item.isFavorite = false))
          friend.isFavorite = true
        }
      }
    }
  }
})
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
