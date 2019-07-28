<template>
  <div></div>
</template>
<script>
import { async } from 'q';
export default {
  layout: "blank",
  mounted () {
    let {status,data}= this.$axios.get('/users/exit')
    .then((res) => {
      if (res.status === 200 && res.data.code === 0) {
         window.location.href='/'
      }
    })
  }
}
</script>
<style>

</style>
