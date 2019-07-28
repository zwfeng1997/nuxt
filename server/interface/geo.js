const Router = require('koa-router')
const axios = require('./utils/axios')
const Province = require('../dbs/models/province')
let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx) => {
  let {status, data} = await axios.get('http://ip.360.cn/IPShare/info')
  if (status === 200) {
    let time = data.location.split('')
    let province = time[0] + time[1]
    let city = time[2] + time[3]
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

router.get('/menu', async (ctx) => {
  let {status, data:{list:{menu, hotPlace}}} = await axios.get('https://www.easy-mock.com/mock/5cd00d021a017c31e9caf6a3/ofo/menu');
  if (status === 200) {
    ctx.body = {
      menu,
      hotPlace
    }
  } else {
    ctx.body = {
      menu: [],
      hotPlace: []
    }
  }
})

router.get('/province', async (ctx) => {
  // let province = await Province.find()
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let {status, data: {
      list:{city}
    }} = await axios.get('https://www.easy-mock.com/mock/5cd00d021a017c31e9caf6a3/ofo/city')
  ctx.body = {
    province: status === 200
      ? city
      : []
  }
})
module.exports = router
