const App = {
    data() {
        return {
            counter: 0,
            title: 'Список заметок',
            placeholder: "Введите название заметки",
            inputValue: "",
            notes: ['Заметка 1', 'Заметка 2', 'Моя личная заметка']
        }
    },
    methods : {
        // InputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote(event) {
            if (this.inputValue.trim() != '') {
                this.notes.push(this.inputValue.trim())
                this.inputValue = ''
            }
            
        },
        inputKeyPress(event) {
            if (event.key == 'Enter') {
                this.addNewNote()
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        doubleCount() {
            return this.notes.length * 2
        },
        delite(idx, event) {
            this.notes.splice(idx, 1);
        }
    },
    // Computed - оптимизация программы. Метод вызываетяс, только при изменение this.
    computed: {
        doubleCountComputed() {
            console.log("computed");
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            console.log("Изменение - ", value);
            if (this.inputValue.length >= 30) {
                this.inputValue = ''
            }
        }
    }
}




const app = Vue.createApp(App)
app.mount('#app')

// то же самое
// Vue.createApp(App).mount('#app')