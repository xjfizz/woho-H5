import qs from 'qs'
import request from '@/utils/request'
import { api } from '@/config'
// api
const { common_api } = api

// 获取商品详情
const goods = {
    getGoodsDetail: function(params) {
    return request({
      url: '/api/goods/imgList',
      method: 'get',
      params: params
    })
  }
}
export default goods
