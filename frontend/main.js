import Vue from 'vue'
import Category from './Components/Categories.vue'
import Account from './Components/Accounts.vue'
import Expense from './Components/Expense.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


 const router = new VueRouter({
    mode : 'history' ,
    routes : [
        {path : '/' , component : Category},
        {path : '/account', component : Account},
        {path : '/expense', component : Expense}
    ]
})

new Vue({
    el: '#mainContainer',
   router,
    mounted() {
        console.log('mounted')
    }
//   / components: { Category, Account }
})