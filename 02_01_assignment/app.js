Vue.createApp({
    data: () => ({
        inputValue: "Some default value!",
        myAge: 22,
        myName: "Vinícius",
        vueWallpaper: "https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png",
    }),
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
}).mount("#assignment");
