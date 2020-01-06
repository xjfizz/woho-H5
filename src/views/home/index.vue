<!--
 * @Author: your name
 * @Date: 2019-12-25 11:50:47
 * @LastEditTime : 2020-01-02 09:10:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-h5-template-vue-h5-template\src\views\home\index.vue
 -->
<!-- home -->
<template>
  <div>
    <h1>woho商城</h1>
    <van-button type="primary">H5页面</van-button>
  </div>
</template>

<script>
// import { api } from '@/config'
import {
  Button
} from 'vant'
export default {
  components: {
    'van-button': Button
  },

  data () {
    return {}
  },

  computed: {},

  mounted () {
    console.log(process.env)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
h1 {
  background: red;
  width: 375px;
}
</style>
