<template>
	<div class="flex flex-nowrap w-full h-full">
		<Navigation class="h-full w-2/6 border-2 border-red-500" />
		<router-view />
	</div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Navigation from '@/renderer/components/Navigation'

export default defineComponent({
	components: {
		Navigation
	},
	setup() {
		onMounted(() => {
		})

		return {
		}
	},
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
