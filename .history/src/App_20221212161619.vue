<script setup>
import DemoGrid from './components/HelloWorld.vue'
import { ref, computed } from 'vue'
import { PublicStore } from './store/index.js'

const store = PublicStore()


const searchQuery = ref('')
const gridColumns = ['name', 'power']
this.gridData=computed(() => store.state.countries)
</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <DemoGrid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </DemoGrid>
</template>