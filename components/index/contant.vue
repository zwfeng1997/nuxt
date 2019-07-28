<template>
  <div class="wrapper">
    <dl>
      <dd>有格调</dd>
      <dd @mouseenter="enter(1)" :class="kind === 1 ? 'active': ''">全部</dd>
      <dd @mouseenter="enter(2)" :class="kind === 2 ? 'active': ''">约会聚餐</dd>
      <dd @mouseenter="enter(3)" :class="kind === 3 ? 'active': ''">丽人SPA</dd>
      <dd @mouseenter="enter(4)" :class="kind === 4 ? 'active': ''">电影出演</dd>
      <dd @mouseenter="enter(5)" :class="kind === 5 ? 'active': ''">品质出游</dd>
    </dl>
    <div class="content">
      <div class="item" v-for="(item, index) in layList">
        <img :src="item.urlImg" alt="">
        <h3>{{item.content}}</h3>
        <div>{{item.miao}}</div>
        <ul v-show="item.pin">
          <li v-for="(value, id) in item.pin">{{value}}</li>
        </ul>
        <p class="price" v-show="item.price">￥<span>{{item.price}}</span>/起</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kind: 1,
      layList:  [
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        }
      ],
      list: [
      {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }, {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }, {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }, {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }, {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }, {
        urlImg: '//p1.meituan.net/tdchotel/d934bfb143d08d93e868b71a13c0e1be1007988.png@460w_260h_1e_1c',
        content: '武汉丹白露酒店',
        pin: ['新客优惠','亲子酒店','房量充足','发票推荐'],
        price: 600
      }
    ],
      wholeList: [
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        },
        {
          urlImg: '//p0.meituan.net/msmerchant/896f73b5774ed60897ba176cbad2192c73635.jpg@460w_260h_1e_1c',
          content: '苗小串',
          miao: '新年特惠双人特惠套餐, 免费提供wifi',
          price: 86
        }
      ],
      moveList: [
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        },
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        },
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        },
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        },
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        },
        {
          urlImg: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@460w_260h_1e_1c',
          content: '金逸影城（销品茂IMAX店）',
          miao: '可停车，儿童票，IMAX厅，中国巨幕厅，EealD 6FL厅',
          price: 20
        }
      ],
      spanList: [
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        },
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        },
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        },
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        },
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        },
        {
          urlImg: '//p0.meituan.net/wedding/b1d233c7930f87d0b47a8927ae1ede3774142.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
          content: 'YESIDO椰岛造型（水岸国际店）',
          miao: 'YESIDO椰岛造型（水岸国际店）',
        }
      ],
      playList: [
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        },
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        },
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        },
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        },
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        },
        {
          urlImg: '//p1.meituan.net/msmerchant/f16a55358e018b55177df25d0d1b923b474479.jpg@460w_260h_1e_1c',
          content: '狼爱上羊音乐火锅酒馆（江汉路店）',
          miao: '豪华双人餐，包间免费',
          price: 108
        }
      ]
    }
  },
  methods: {
    enter (index) {
      this.kind = index
      switch (index) {
        case 1:
          this.layList = this.wholeList
          break;
        case 2:
          this.layList = this.playList
          break;
        case 3:
          this.layList = this.spanList
          break;
        case 4:
          this.layList = this.moveList
          break;
        case 5:
          this.layList = this.list
          break;
        default: this.layList = this.wholeList
      }
    }
  }
}
</script>
<style scoped>
.item div{
  font-size: 12px;
  margin-top: 10px;
  color: #999
}
.price{
  color: #BE9E4D;
}
.price span{
  font-size: 16px;
}
ul{
  margin-top: 10px;
}
li{
  display: inline-block;
  list-style:none;
  font-size: 12px;
  color: rgb(153,153,153);
  border: 1px solid #d8d8d8;
  padding: 0 3px;
  margin-right: 5px;
}
.item img{
  height: 203px;
}
.item{
  box-sizing: border-box;
  display: inline-block;
  width: 33.33%;
  height: 50%;
  padding: 15px
}
.content{
  height: 640px;
  background: #fff
}
.wrapper{
  margin-top: 50px;
  margin-left: 20px
}
dl{
  background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
  height: 44px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  line-height: 44px;
  color: #fff
}
.active{
  position: relative;
}
.active:after{
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #fff;
  content: " ";
  display: block;
  width: 2px;
  height: 0;
  top: 37px;
  left: 0px;
  right: 0;
  margin: auto;
}
dl dd{
  display: inline-block;
  margin: 0 10px;
  cursor:pointer;
}
</style>
