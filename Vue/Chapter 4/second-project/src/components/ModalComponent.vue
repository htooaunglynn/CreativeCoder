<template>
    <div class="drop" @click.self="closeModel">
        <a href="https://www.google.com/" class="link">{{title}}</a>
        <section :class="{success:theme==='success'}">
            <p>{{book}}</p>
        </section>
    </div>
</template>

<script>
export default {
    props: ['title','book','theme'],
    methods: {
        closeModel() {
            this.$emit("close");
        }
    }
}
</script>

<style scoped>
    .drop {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #00000052;
    }
    .link {
        text-decoration: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 2rem;
        letter-spacing: 5px;
        font-size: 3rem;
        color: lightblue;
        -webkit-text-stroke: 1px black;
        text-shadow:  #FC0 1px 0 10px;

        position: absolute;
        top: 85%;
        left: 38%;
    }

    section {
        width: 200px;
        height: 200px;

        border: 2px solid #FC0;
        box-shadow: 10px 10px 5px gray;

        border-radius: 20px;

        position: absolute;
        top: 200px;
        left: 60px;
    }

    p {
        font-weight: light;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin: 10px 20px;
        font-size: 1.3rem;

        
    }

    .success {
        -webkit-text-stroke: 1px black;
        text-shadow:  #FC0 1px 0 10px;

        font-size: 2rem;
        font-weight: bolder;
    }
</style>