<script>
import DemoGrid from './components/HelloWorld.vue'
import { ref,computed  } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    DemoGrid
  },
  setup() {

    const searchQuery = ref('')

    const gridColumns = ['name', 'power']

    const store = useStore()


    return {
      gridData: computed(() => store.state.countries),
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