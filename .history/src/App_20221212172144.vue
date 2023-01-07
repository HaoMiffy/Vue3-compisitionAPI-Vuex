<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref} from 'vue'
import { useStore } from "../src/store/index";
export default {
  components: {
    HelloWorld
  },
  setup() {

    const store = useStore();

    const searchQuery = ref('')
    const gridColumns = ['name', 'power']
    const gridData = store.$state.countries


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
  <HelloWorld :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </HelloWorld>
</template>