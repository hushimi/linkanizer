<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CpuUsage />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CpuUsage from '@/components/cpuUsage.vue'

export default defineComponent({
  components: {
    CpuUsage,
  },
  setup() {},
})
</script>
