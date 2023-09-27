import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../Navigation/Homepage.vue'
import announcement from '../Navigation/Announcement.vue'
import question_bank from '../Navigation/QuestionBank.vue'
import help from '../Navigation/Help.vue'
import login from '../Top/Login.vue'
import register from '../Top/Register.vue'
import submissions from '../Navigation/QuestionBank/Submissions.vue'
import questions from '../Navigation/QuestionBank/Questions.vue'
import submit from '../Navigation/QuestionBank/Submit.vue'
import question_description from '../Navigation/Element/QueDescription.vue'
import subtopic from '../Navigation/QuestionBank/SubTopic.vue'
import subsample from '../Navigation/QuestionBank/SubSample.vue'
const routes = [
    { path: '/', redirect: '/homepage' },
    { path: '/question_bank', redirect: '/question_bank/questions'},
    { path: '/homepage', component: homepage },
    { path: '/announcement', component: announcement },
    { path: '/question_bank', component: question_bank,
      children: [{ path: 'submissions', component: submissions },
                 { path: 'questions', component: questions },
                 { path: 'submit',component: submit},
                 { path: 'question_description',component: question_description},
                 { path: 'submit_topic',component: subtopic},
                 { path: 'submit_sample',component: subsample}]
    },
    { path: '/help', component: help },
    { path: '/login', component: login },
    { path: '/register', component: register },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'router-link-active',
});

export default router;