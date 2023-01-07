<script>
import DemoGrid from './components/HelloWorld.vue'
export default {
  computed: {
    getCountries() {
      return this.$store.state.DeviceData;
    }
  },
  components: {
    DemoGrid
  },
  data() {
    return {
      searchQuery: '',
      Device: '',
      Group: '',
      DeviceType: '',
      Remark: '',
      gridColumns: ['name', 'power'],
      gridData: this.$store.state.countries,

    }
  },
}
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