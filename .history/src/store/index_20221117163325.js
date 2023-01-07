import { createStore } from 'vuex'

export default createStore({
  state: {
    Device:"",
    Group:"",
    DeviceType:"",
    Remark:""
  },
  mutations: {
    addItem() {
      var item = { Device: this.add.Device, Group: this.add.Group, DeviceType: this.add.DeviceType, Remark: this.add.Remark, };
      console.log(item);
      if (this.add.Device == '' || this.add.Remark == '') {
        alert('新增資料失敗! 請輸入Device或Remark!!')
      } else if( this.add.DeviceType == '') {
        alert('新增資料失敗! DeviceType是必選選項!!')
      } else if( this.add.Group == '') {
        alert('新增資料失敗! Group是必選選項!!')
      } else {
        alert('新增資料成功!')
        this.add.Device = '';
        this.add.Group = '';
        this.add.DeviceType = '';
        this.add.Remark = '';
        this.gridData.push(item);
        this.$router.push('/DeviceManagement/Device');
      }
    },
  },
  actions: {
    updateLoading (context, status) {
      context.commit('addItem', status)
    }
  },
  modules: {
  }
})
