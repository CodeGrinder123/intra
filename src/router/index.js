import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import MainContainers from '../components/MainContainers.vue'
import MainContainers_one from '../components/MainContainers_one.vue'
import MainContainers_two from '../components/MainContainers_two.vue'
import MainContainers_three from '../components/MainContainers_three.vue'
import MainContainers_four from '../components/MainContainers_four.vue'
import MainContainers_five from '../components/MainContainers_five.vue'
import MainContainers_six from '../components/MainContainers_six.vue'
import MainContainers_last from '../components/MainContainers_last.vue'
import MainContainers_end from '../components/MainContainers_end.vue'
const routes = [
    {
        path: '/',
        component: App,
    },
    { path: '/one' ,component: MainContainers, name: 'one', props: true },
    { path: '/two', component: MainContainers_one, name: 'two', props: true },
    { path: '/three', component: MainContainers_two, name: 'three', props: true },
    { path: '/four',component: MainContainers_three, name: 'four', props: true },
    { path: '/five', component: MainContainers_four, name: 'five', props: true },
    { path: '/six', component: MainContainers_five, name: 'six', props: true },
    { path: '/seven', component: MainContainers_six, name: 'seven', props: true },
    { path: '/eight', component: MainContainers_last, name: 'eight', props: true },
    { path: '/nine', component: MainContainers_end, name: 'nine', props: true },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router