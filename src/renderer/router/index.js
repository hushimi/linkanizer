import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import News from '../views/News.vue'
import ToDo from '../views/ToDo.vue'
import TextGen from '../views/TextGen.vue'

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
		path: '/todo',
		name: 'ToDo',
		component: ToDo,
	},
	{
		path: '/news',
		name: 'News',
		component: News,
	},
	{
		path: '/textgen',
		name: 'TextGen',
		component: TextGen,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
