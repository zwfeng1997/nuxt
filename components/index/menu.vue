<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in $store.state.menu.menu"
        :key="index"
        @mouseenter="enter(index)"
      >
        <i :class="item.type"></i>{{item.name}}<span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-show="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, index) in curdetail.child">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, inx) in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kind: false,
      curdetail: []
    }
  },
  computed: {

  },
  methods: {
    mouseleave () {
      this._timer = setTimeout(() => {
        this.kind = false
        this.curdetail =  []
      },150)
    },
    enter (index) {
      this.kind = true
      this.curdetail = this.$store.state.menu.menu[index]
    },
    sover () {
      clearTimeout(this._timer)
    },
    sout () {
      this.kind = false
      this.curdetail =  []
    }
  }
}
</script>
<style>
</style>
