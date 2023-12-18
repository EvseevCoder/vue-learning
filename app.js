const App = {
    data() {
        return {
            counter: 0,
            title: 'Список заметок',
            placeholder: "Введите название заметки",
            inputValue: "",
            notes: ['Заметка 1']
        }
    },
    methods : {
        InputChangeHandler() {
            this.inputValue = event.target.value
        }
    }

}




const app = Vue.createApp(App)
app.mount('#app')

// то же самое
// Vue.createApp(App).mount('#app')