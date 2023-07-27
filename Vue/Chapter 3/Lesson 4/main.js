const app = Vue.createApp({
    data() {
        return {
            title: "A Smarter Way to Learn JavaScript",
            author: "Mark Myers"
        }
    },
    methods: {
        mouseoverHandler (e, data) {
            console.log("Mouse over is working", e.type, data);
        },
        mouseleaveHandler() {
            console.log("Mouse leave is working");
        },
    }
});

app.mount('#app');