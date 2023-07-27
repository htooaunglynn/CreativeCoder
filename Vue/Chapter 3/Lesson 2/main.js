const app = Vue.createApp({
	data() {
		return {
			lesson: "Vue",
			title: "You don't JS.",
			author: "Kyle Simpson",
			number: 1
		}
	},
	methods: {
		increase() {
			// alert("Hello World");
			this.number++;
		},
		decrease() {
			// alert("Hello World");
			this.number--;  
		}
	}
});

app.mount("#app");