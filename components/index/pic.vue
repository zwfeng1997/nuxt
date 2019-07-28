<template>
  <div class="pic">
    <el-row>
      <el-col :span="18" class="color">
        <el-row :gutter="10">
          <el-col :span="18">
            <el-carousel height="240px">
              <el-carousel-item v-for="(item, index) in list" :key="index" >
                <a href="#">
                  <img :src="item" alt="" class="img">
                </a>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="6">
            <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" class="left-1">
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="9" class="left-2">
            <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="" >
          </el-col>
          <el-col :span="9" class="left-2">
            <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="" >
          </el-col>
          <el-col :span="6" class="left-2 left-3">
            <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="color">
        <el-row :gutter="10">
          <el-col class="content">
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
            <h4>Hi！你好</h4>
            <nuxt-link to="/register" class="btn">注册</nuxt-link>
            <nuxt-link to="/login" class="btn">立即登录</nuxt-link>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col class="color1">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
            <h3>美团APP手机版</h3>
            <p>
              <span class="span">1元起</span>
              <span>吃喝玩乐</span>
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return{
      list: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      ]
    }
  }
}
</script>
<style scoped>
.span{
  color: red
}
.color1 h3{
  text-align: center;
}
.color1 p{
  font-size: 12px;
  text-align: center
}
.color1{
  margin-top: 10px;
  height: 162px;
  background: #fff;
}
.color1 img{
  display: block;
  width: 95px;
  margin: 10px auto
}
.content{
  background: #fff;
  height: 240px
}
.content img{
  display: block;
  margin: 20px auto;
  width: 47px;
  height: 47px;
  border-radius: 50%
}
.content h4{
  font-size: 16px;
  text-align: center;
}
.btn{
  display: block;
  width: 118px;
  line-height: 38px;
  border: 1px solid #f6f6f6;
  border-radius: 40px;
  margin: 10px auto;
  text-align: center;
  color: #333
}
.pic{
  margin-top: 137px;
  height: 424px;
  box-sizing: border-box;
  padding: 10px 0 0 10px
}
.img{
  width: 550px;
  height: 240px
}
.left-1{
  height: 240px
}
.left-2{
 height: 165px
}
.left-2 img{
  width: 100%;
  height: 169px
}
.left-3 img{
  width: 90%
}
</style>
