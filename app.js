const App = {
    data() {
        return {
            counter: 0,
            title: 'Список заметок'
        }
    }

}




const app = Vue.createApp(App)
app.mount('#app')

// то же самое
// Vue.createApp(App).mount('#app')