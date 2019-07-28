<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="19">
        <pic></pic>
      </el-col>
    </el-row>
    <el-row :span="24">
      <my-contant></my-contant>
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
import Pic from '@/components/index/pic.vue'
import MyContant from '@/components/index/contant.vue'
export default {
  components: {
    Emenu,
    Pic,
    MyContant
  }
}
</script>

<style lang="scss">
 @import "@/assets/css/index/index.scss";
</style>
