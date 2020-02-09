<!--  -->
<template>
  <div class="main">
    <!-- <div class="header">
      <span>宝贝详情</span>
    </div> -->
    <span v-if="imgList.length === 0" class="no_imgList">商家暂未上传商品图片</span>
    <div v-if="imgList.length > 0">
      <div class="tip-title">
        <span>每个订单默认配发一个礼盒,如需特殊需求，请联系线上彩妆顾问。</span>
      </div>
      <div class="detail-img">
        <div v-for="(item, index) in imgList" :key="index">
          <van-image width="100%" height="100%" :src="item.path"></van-image>
        </div>
      </div>
      <div class="bottom-text">
        <div class="bottom-text-des">价格说明</div>
        <div class="des-main">
          <div class="des-title">
            <span class="des-point">·</span>
            <span class="des-title-text font-sty-weight7">划线价格</span>
          </div>
          <div class="des-text">
            <span class="des-title-text">商品的专柜价，品牌价，正品零售价，厂商指导价或该商品的曾经展示过的销售价格，<span class="font-sty-weight7">并非原价</span>，仅供参考。</span>
          </div>
        </div>

        <div class="des-main">
          <div class="des-title">
            <span class="des-point">·</span>
            <span class="des-title-text font-sty-weight7">未划线价格</span>
          </div>
          <div class="des-text">
            <span class="des-title-text">商品的 <span class="font-sty-weight7"> 实时标价 </span>，不因表述的差异改变性质，具体成交价格根据商品参加活动，或会员使用优惠券，积分等发生变化，最终以订单结算页价格为准。</span>
          </div>
        </div>

        <div class="des-main">
          <div class="des-text-a">
            <span class="des-point-a">·</span>
            <span class="des-title-text">商家详情页(含主图) 以图片或文字形式标注的一口价，促销价，优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from 'vant'
import API from '../../api/index'
export default {
    components: {
     'van-image': Image
  },
  data() {
    return {
      id: null,
      imgList: [
        ]
    }
  },
  computed: {},

  mounted() {},
  created() {
    const { id } = this.$route.params
    console.log(id)
    this.id = id
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.getGoodsMessage()
    },
    // 获取商品图片信息
    getGoodsMessage() {
      const params = {
        id: this.id || ''
      }
      API.goods.getGoodsDetail(params).then(res => {
        if (res.code === 200) {
            console.log('res', res)
            this.imgList = res.data.list
        }
     })
    }
  }
}

</script>
<style lang='less' scoped>
.main{
   //background: #EFEEF4;
   background: #ffffff;
 // height: 100vh;
 .header{
   // background: #EFEEF4;
   color: #B5B5B7;
   font-size: 14px;
   min-height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 1px solid #dddde8;
   margin-bottom: 5px;
 }
 .tip-title{
   background: #ffffff;
   font-size: 13px;
   min-height: 40px;
   padding: 8px 15px;
   border-bottom: 1px solid #eaeaea;
 }
 .bottom-text{
   padding: 10px;
   .bottom-text-des{
     font-size: 15px;
     color :#a5a3a3
    }
    .des-main{
      margin-top: 10px;
      .des-title{
        display: flex;
        align-items: center;
        .des-point{
          width: 10px;
         font-size: 25px;
         color: #ee0a24;
        }
        .des-title-text{
          // margin-top: 10px;
        }
      }
      .des-text{
        margin-left: 10px;
        color: #a5a3a3;
     }
      .des-text-a{
        color: #a5a3a3;
         display: flex;
        align-items: stretch;
        .des-point-a{
          width: 10px;
          font-size: 25px;
          color: #ee0a24;
        }
        .des-title-text{
          margin-top: 8px;
          margin-left: 5px;
        }
      }
    }

 }
 .detail-img{
   margin-top: 10px;
 }

 .font-sty-weight7{
   font-weight: 600;
   font-size: 14px;
   color: #696868;
 }
 .no_imgList{
   display: flex;
   justify-content: center;
   align-items: center;
   color: #a5a3a3;
   margin-top: 15px;
 }

}
</style>

