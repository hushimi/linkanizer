<template>
    <div id="home">
        <fa icon="phone" class="fa-icon mx-auto" />
        <p>{{ cpu }}</p>
        <p>{{ mem }}</p>
        <p>{{ total_mem }}</p>

        <button @click="openLink('file')"
            class="btn btn-blue">
            Open Text File
        </button>
        <button @click="openLink('folder')"
            class="btn btn-blue">
            Open Folder
        </button>
        <button @click="openLink('link')"
            class="btn btn-blue">
            Open Github
        </button>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
	components: {
	},

	setup() {
		// --------------------------------------------
		// イベント
		// --------------------------------------------
		const cpu = ref('CPU Usage(%): ')
		const mem = ref('Mem Usage(%): ')
		const total_mem = ref('Total Mem(GB): ')

		onMounted(() => {
			// PC リソース数取得
			window.ipc.on('usage', (payload) => {
				cpu.value = 'CPU Usage(%): ' + payload.cpu
				mem.value = 'Mem Usage(%): ' + payload.mem
				total_mem.value = 'Total Mem(GB): ' + payload.totalmem
			})

			// リンクオープン結果表示
			window.ipc.on('open', (payload) => {
				if (payload !== '') {
					console.log(payload)
				}
			})
		})

		/**
		 * ----------------------------------------------
		 * 外部リンクを開く
		 * @type {string} type
		 * ----------------------------------------------
		*/
		const openLink = (type) => {
			let link = ''
			if (type == 'file') {
				link = 'C:\\Users\\sato\\Desktop\\document.txt'
			} else if (type == 'link') {
				link = 'https://github.com'
			} else if (type == 'folder') {
				link = 'C:\\Users\\sato\\Desktop\\'
			}

			window.ipc.send('open', link)
		}

		return {
			// Variable
			cpu, mem, total_mem,

			// Function
			openLink
		}
	},
})
</script>
