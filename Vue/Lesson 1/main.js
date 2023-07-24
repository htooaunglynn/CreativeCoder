const app = Vue.createApp({
    data() {
        return {
            lesson: "Vue",
            author: "Kyle Simpson",
            title: "You don't JS"
        }
    }
});

app.mount('#app');