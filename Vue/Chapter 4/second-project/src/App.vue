<template>
    <div>
        <h1 class="title" ref="title">{{books[0].title}}</h1>

        <section class="form">
            <input type="text" ref="name" placeholder="Enter Your Name">
            <button @click="clickHandler">Click</button>
        </section>

        <article class="modal">
            <button @click="showModalClick">Show</button>
        </article>

        <ModalComponent v-if="showModal" title="Go to Homepage" :book="books[2].title" theme="success"/>
    </div>
</template>

<script>
import ModalComponent from "./components/ModalComponent.vue";
export default {
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
            showModal: false
        }
    },
    methods: {
        clickHandler() {
            this.$refs.name.focus();
            this.$refs.title.textContent = this.books[1].title;
        },
        showModalClick() {
            this.showModal = !this.showModal;
        }
    },
    components: {
        ModalComponent
    }
}
</script>

<style scoped>
    .modal {
        width: 89px;
        height: 98px;
        border: 1px solid #FC0;
        box-shadow: 10px 10px 5px gray;
        border-radius: 20px;

        position: absolute;
        right: 60px;
        top: 45%;
    }

    .modal button {
        padding: 4px 8px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.3rem;
        border: none;
        margin: 40% 10px;
    }

    .title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 2rem;
        letter-spacing: 5px;
        font-size: 3rem;
        text-align: center;
        margin-top: 20px;
        color: lightblue;
        -webkit-text-stroke: 1px black;
        text-shadow:  #FC0 1px 0 10px;
    }

    .form {
        width: 300px;
        min-height: 10rem;
        box-shadow: 10px 10px 5px gray;
        border: 2px solid #FC0;
        border-radius: 20px;

        position: absolute;
        top: 30%;
        left: 40%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    input,
    button {
        border-radius: 20px;
        box-shadow: 4px 4px 10px gray;
        outline: none;

        padding: 10px 20px;
    }

    input {
        border: none;
    }

    button {
        border: 1px solid #FC0;
        cursor: pointer;
    }

    input:focus {
        border: 2px double #FC0;
    }
</style>