import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import News from '../views/News.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/search',
		name: 'Search',
		component: Search,
	},
	{
		path: '/news',
		name: 'News',
		component: News,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
