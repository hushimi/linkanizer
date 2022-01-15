<template>
    <div class="w-full h-full">
        <Menubar />
        <div class="flex flex-nowrap w-full view-container">
            <Navigation class="h-full w-2/6" />
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Navigation from '@/renderer/components/Navigation'
import Menubar from '@/renderer/components/Menubar'

export default defineComponent({
	components: {
		Navigation, Menubar
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
  height: calc(100% - 30px);
}

.view-container {
    position: absolute;
    top: 30px;
    left: 0;
    height: calc(100% - 30px);
}

</style>
