import Vue from 'vue'
import App from './App' //apartir do componente App todos os outros componentes serão filhos deste componente (App)

new Vue({
    el: '#app',
    render: h => h(App) //forma padrao para renderizar os componentes
}).$mount("#app") 