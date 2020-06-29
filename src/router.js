import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history', // history 모드를 사용하면 주소창에 hash가 없어집니다
	routes: [
		{
			path: '/',
			name: 'app',
			component: App,
		},						
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
		},
	],
});

export default router;