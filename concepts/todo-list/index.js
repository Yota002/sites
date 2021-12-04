const App = {
    data() {
        return {
            array: [],
            text: ""
        }
    },
    methods: {
        addItem() {
            let text = this.text;
            if (!text) return;
            this.array.push(text);
            this.text = "";
        }
    },
}

Vue.createApp(App).mount("#app");