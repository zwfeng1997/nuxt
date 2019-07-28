<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/2fecdcf/img/logo.png" alt="">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            placeholder="搜索商家或地点"
            v-model="search"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
          <dl class="hotPlace" v-show="isHotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotPlace"
              :key="index"
            >
              {{item}}
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearchList">
            <dd
              v-for="(item, index) in searchList"
              :key="index"
            >
              {{item}}
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            href="#"
            v-for="(item, index) in suggest"
            :key="index"
          >
            {{item}}
          </a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col class="right" :span="6">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="text">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="text">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="text">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isFocus: false,
      search: '',
      hotPlace: ['故宫博物院','天坛','明十三陵','欢乐谷','长城','东湖绿道', '黄鹤楼', '光谷步行街','美丽姐'],
      searchList: ['汽车','车厘子','爱车','火影忍者','汽车人'],
      suggest: ['故宫博物院','天坛','明十三陵','欢乐谷','长城']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus&&!this.search
    },
    isSearchList () {
      return this.isFocus&&this.search
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(() => {
        this.isFocus = false
      }, 300)
    },
    input () {
      console.log('input')
    }
  }
}
</script>
<style scoped>
.m-header .m-header-searchbar .center .wrapper .hotPlace, .m-header .m-header-searchbar .center .wrapper{
  z-index: 10
}
.m-header .m-header-searchbar .center .wrapper .hotPlace, .m-header .m-header-searchbar .center .wrapper .searchList{
  width: 468px
}
.m-header .m-header-searchbar .center .nav li{
  margin: 0 19px
}
.m-header .m-header-searchbar .center .nav li:first-child{
  margin-left: 0
}
.m-header .m-header-searchbar .center .nav li:last-child{
  margin-right: 0
}
</style>
