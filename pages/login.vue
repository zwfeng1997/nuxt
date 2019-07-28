<template>
  <div calss="login">
    <div class="wrapper">
      <a href="/" class="site-logo"></a>
      <div class="content">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
        <section>
          <div class="div">
            <p>账号登录</p>
            <el-form ref="form" :model="form" label-width="70px" :rules="rules">
              <el-form-item label="账号" prop="number">
                <el-input v-model="form.number"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input v-model="form.pass" type="password"></el-input>
              </el-form-item>
              <div class="button" @click="onSubmit">登录</div>
          </el-form>
          </div>
        </section>
      </div>
      <div>{{error}}</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { async } from 'q';
export default {
  layout: "blank",
  data () {
    return {
      error: '',
      data: '',
      form: {
        number: '',
        pass: ''
      },
      rules: {
        number: [{
          required: true,
          type: 'string',
          message: '请输入账号',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          type: 'string',
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    onSubmit () {
      let self = this
      axios.post('/users/signin', {
        username: window.encodeURIComponent(self.form.number),
        password: CryptoJS.MD5(self.form.pass).toString(),
      }).then(({status, data}) => {
        if (status === 200) {
          if (data.code === 0) {
            self.error = ''
            location.href = '/'
          } else {
            self.error = data.msg
          }
        } else {
          self.error = `服务器出错，错误码:${status}`
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.button{
  text-align: center;
  background: #3a8ee6;
  color: #fff;
  border: none;
  line-height: 40px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 20px;
  border-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.item{
  width: 270px;
}
.wrapper{
  width: 980px;
  margin: 40px auto 0 auto;
}
.content{
  display: flex;
  margin-top: 30px;
}
p{
  margin-left: 20px;
  margin-bottom: 10px;
}
section{
  flex-grow: 1;
  overflow: hidden;
}
.div{
  width: 270px;
  float: right;
}
.site-logo {
  background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png);
  background-position: 0 !important;
  background-size: contain !important;
  width: 82px;
  height: 54px;
  display: block;
}
</style>
