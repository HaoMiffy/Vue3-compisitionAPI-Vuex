<script setup>
import DemoGrid from './components/HelloWorld.vue'
import { ref } from 'vue'
import { PublicStore } from '@/store/index'

const main = PublicStore()


const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = main.state.countries
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