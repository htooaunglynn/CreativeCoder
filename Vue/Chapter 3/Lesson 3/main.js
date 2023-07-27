const app = Vue.createApp({
    data() {
        return {
            book1: {
                title: "A Smarter Way to Learn JavaScript",
                author: "Mark Myers",
            },
            book2: {
                title: "JavaScript: The Definitive Guide",
                author: "David Flanagan",
            },
            book3: {
                title: "Head First JavaScript Programming",
                author: "Eric T Morrison",
            },
            book4: {
                title: "Eloquent JavaScript, 3rd Edition",
                author: "Marijn Haverbeke",
            },
            show: true,
        };
    },
});

app.mount("#app");
