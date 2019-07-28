<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号?</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
          <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
          <span class="status" v-show="statusMsg">{{statusMsg}}</span>
        </el-form-item>
         <el-form-item label="验证码">
          <el-input v-model="form.code" maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpass">
          <el-input type="password" v-model="form.cpass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">同意以下协议并注册</el-button>
          <div class="error">{{error}}</div>
        </el-form-item>
        <el-form-item>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default {
  layout: "blank",
  data() {
    return {
      statusMsg: "",
      error: "",
      form: {
        name: "",
        email: "",
        cpass: "",
        code: "",
        pass: ""
      },
      rules: {
        name: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          type: 'email',
          message: '请输入邮箱',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        }],
        cpass: [{
          required: true,
          message: '确认密码',
          trigger: 'blur'
        }, {
          validator: (rule, value, callback) => {
            if(value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.form.pass) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    onSubmit() {
      let self = this
      this.$refs['form'].validate(valid => {
        if (valid) {
          axios.post('/users/signup', {
            username: window.encodeURIComponent(self.form.name),
            password: CryptoJS.MD5(self.form.pass).toString(),
            email: self.form.email,
            code: self.form.code
          }).then(({status, data}) => {
            if (status === 200) {
              if (data && data.code === 0) {
                self.error = ''
                location.href = '/login'
              } else {
                self.error = data.msg
              }
            } else {
              self.error = `服务器出错，错误码:${status}`
            }
          })
        }
      })
    },
    sendMsg () {
      const self = this
      let namePass, emailPass
      if (self.timerid) {
        return false
      }
      this.$refs['form'].validateField('name', valid => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['form'].validateField('email', valid => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        axios.post('/users/verify', {
          username: encodeURIComponent(self.form.name),
          email : self.form.email
        }).then(({status, data}) => {
          if (status === 200 && data && data.code === 0) {
            let count = 60
            self.timerid = setInterval(() => {
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              if(count === 0) {
                self.statusMsg = ''
                clearInterval(self.timerid)
              }
            }, 1000)
          } else {
            self.statusMsg = data.msg
          }
        })
      }
    }
  }
};
</script>
<style lang="scss">
  @import "@/assets/css/register/index.scss"
</style>
