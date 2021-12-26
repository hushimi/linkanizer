<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ cpu }}</p>
    <p>{{ mem }}</p>
    <p>{{ total_mem }}</p>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  components: {
  },
  setup() {
    const cpu = ref('')
    const mem = ref('')
    const total_mem = ref('')
    onMounted(() => {
      // Get CPU Usage from Background process
      window.ipc.on('usage', (payload) => {
        cpu.value = 'CPU Usage(%): ' + payload.cpu
        mem.value = 'Mem Usage(%): ' + payload.mem
        total_mem.value = 'Total Mem(GB)' + payload.totalmem
      })
    })

    return {
      cpu, mem, total_mem
    }
  },
})
</script>
