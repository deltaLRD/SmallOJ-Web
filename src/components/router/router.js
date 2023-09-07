import { createRouter,createWebHistory} from 'vue-router'
import homepage from '../Navigation/Homepage.vue'
import announcement from '../Navigation/Announcement.vue'
import question_bank from '../Navigation/QuestionBank.vue'
import help from '../Navigation/Help.vue'
import login from '../Top/Login.vue'
import register from '../Top/Register.vue'



const routes = [
    {path:'/homepage',component: homepage},
    {path:'/announcement',component: announcement},
    {path:'/question_bank',component: question_bank},
    {path:'/help',component: help},
    {path:'/login',component: login},
    {path:'/register',component: register},
];

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
});

export default router;