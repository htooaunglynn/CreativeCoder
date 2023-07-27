const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: "A Smarter Way to Learn JavaScript",
                    author: "Mark Myers",
                },
                {
                    title: "JavaScript: The Definitive Guide",
                    author: "David Flanagan",
                },
                {
                    title: "Head First JavaScript Programming",
                    author: "Eric T Morrison",
                },
                {
                    title: "Eloquent JavaScript, 3rd Edition",
                    author: "Marijn Haverbeke",
                }
            ],
            showBook: false,
            link: "https://www.google.com/",
        };
    },
});

app.mount("#app");
