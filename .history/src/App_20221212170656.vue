<script>
import DemoGrid from './components/HelloWorld.vue'
import { ref,computed } from 'vue'
import { useStore } from "../src/store/index";
export default {
  components: {
    DemoGrid
  },
  setup() {

    const store = useStore();

    const searchQuery = ref('')
    const gridColumns = ['name', 'power']
    const gridData = computed(() => store.state)


    return {
      gridData,
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