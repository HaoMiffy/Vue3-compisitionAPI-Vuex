<script>
import DemoGrid from './components/HelloWorld.vue'
import { ref,computed  } from 'vue'
export default {
  components: {
    DemoGrid
  },
  setup() {

    const searchQuery = ref('')

    const gridColumns = ['name', 'power']



    return {
      gridData: computed(() => this.store.state.count),
      searchQuery,
      gridColumns,
    }
  }
}

</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <DemoGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </DemoGrid>
</template>