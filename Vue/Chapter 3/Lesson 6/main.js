const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: "A Smarter Way to Learn JavaScript",
                    author: "Mark Myers",
                    img: "../img/A Smarter Way to Learn JavaScript.jpg",
                    bottom: false
                },
                {
                    title: "JavaScript: The Definitive Guide",
                    author: "David Flanagan",
                    img: "../img/JavaScript The Definitive Guide.jpg",
                    bottom: true
                },
                {
                    title: "Head First JavaScript Programming",
                    author: "Eric T Morrison",
                    img: "../img/Head First JavaScript Programming.jpg",
                    bottom: false
                },
                {
                    title: "Eloquent JavaScript, 3rd Edition",
                    author: "Marijn Haverbeke",
                    img: "../img/Eloquent JavaScript, 3rd Edition.jpg",
                    bottom: false
                }
            ],
            showBook: true,
            link: "https://www.google.com/",
        }
    }
});

app.mount("#app");