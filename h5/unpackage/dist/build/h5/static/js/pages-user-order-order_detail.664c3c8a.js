(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-order_detail"],{3716:function(t,e,i){"use strict";i.r(e);var r=i("529c"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},3784:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".container[data-v-400686c3]{padding:%?20?% %?24?%}.cont[data-v-400686c3]{padding:%?12?% %?36?%;background:#fff;border-radius:16px}.cont_top[data-v-400686c3]{padding:%?20?% 0}.order_sn[data-v-400686c3]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#333}.order_price[data-v-400686c3]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#6e7480}.bottom[data-v-400686c3]{width:calc(100% - %?48?%);position:fixed;bottom:%?100?%}.bottom_cont[data-v-400686c3]{width:100%;display:flex;justify-content:center;flex-direction:column}.bottom_buy[data-v-400686c3]{width:100%;height:%?80?%;background:#1f64ff;border-radius:6px;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:#fff;display:flex;justify-content:center;align-items:center;margin:auto}",""]),t.exports=e},"529c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("466d"),i("e9c4");var r=i("5c9b"),n=i("4c53"),a={data:function(){return{orderInfo:"",isClick:!0,timer:0}},components:{},onLoad:function(t){this.order_id=t.order_id},onShow:function(){this.getOrderList()},onUnload:function(){console.log("隐藏了"),clearInterval(this.timer)},methods:{getOrderList:function(){var t=this,e=JSON.parse(uni.getStorageSync("userInfo")),i={user_id:e.user_id,order_id:this.order_id,prod_cate_id:"[3]"};(0,n.orderList)(i).then((function(e){2e4==e.code?t.orderInfo=e.data[0]:t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取订单信息失败")}))},pay:function(){var t=this,e=JSON.parse(uni.getStorageSync("userInfo")),i=navigator.userAgent.toLowerCase();if("h5"==this.orderInfo.source||"umi_h5"==this.orderInfo.source){if("micromessenger"==i.match(/MicroMessenger/i)){if("h5"==this.orderInfo.source)return void uni.showModal({title:"提示",content:"当前不支持此订单支付，请前往网页端打开支付",confirmText:"知道了",showCancel:!1})}else if("umi_h5"==this.orderInfo.source)return void uni.showModal({title:"提示",content:"当前不支持此订单支付，请前往公众号打开支付",confirmText:"知道了",showCancel:!1});var n={order_id:this.orderInfo.order_id,user_id:e.user_id};if(0==this.isClick)return!1;this.isClick=!1;var a=this;(0,r.againPay)(n).then((function(e){if(2e4==e.code)if(a.isClick=!0,"micromessenger"==i.match(/MicroMessenger/i)){var r=JSON.parse(e.data[0].pay_data);WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:r.app_id,timeStamp:r.time_stamp,nonceStr:r.nonce_str,package:r.package,signType:r.sign_type,paySign:r.pay_sign},(function(t){"get_brand_wcpay_request:ok"==t.err_msg?(a.getPayResult(order_id),a.isClick=!0):"get_brand_wcpay_request:fail"==t.err_msg?(console.log("支付失败"),a.isClick=!0):(console.log("取消支付"),a.isClick=!0)}))}else{var n=window.open("","_blank"),o=e.data[0].order_id;n.location=e.data[0].pay_data,t.timer=setInterval((function(){a.getPayResult(o)}),2e3)}else a.$api.msg(e.msg),a.isClick=!0})).catch((function(t){a.isClick=!0,a.$api.msg("获取支付信息失败！")}))}else uni.showModal({title:"提示",content:"当前不支持此订单支付，请前往订单来源处进行支付",confirmText:"知道了",showCancel:!1})},getPayResult:function(t){var e=this,i={order_id:t};(0,r.getResult)(i).then((function(t){if(2e4==t.code)if(1==t.data[0].status){e.$api.msg("支付成功"),e.isClick=!0,clearInterval(e.timer);var i=JSON.stringify(t.data[0]);uni.redirectTo({url:"/pages/user/vip/pay_success?info="+i})}else 2==t.data[0].status?(e.isClick=!0,clearInterval(e.timer),e.$api.msg("已退款")):(3==t.data[0].status||4==t.data[0].status)&&(e.isClick=!0,clearInterval(e.timer),e.$api.msg("支付失败"));else clearInterval(e.timer),e.isClick=!0,e.$api.msg(t.msg)})).catch((function(t){clearInterval(e.timer),e.isClick=!0,e.$api.msg("获取支付结果失败！")}))}}};e.default=a},"9e05":function(t,e,i){var r=i("3784");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("3ce76528",r,!0,{sourceMap:!1,shadowMode:!1})},ad8d:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_sn"},[t._v("订 单 号：")]),i("v-uni-text",{staticClass:"order_sn"},[t._v(t._s(t.orderInfo.order_id))])],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("商品总额：")]),i("v-uni-text",{staticClass:"order_price"},[t._v("￥"+t._s(t.orderInfo.total_amount))])],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("商品单价：")]),i("v-uni-text",{staticClass:"order_price"},[t._v("￥"+t._s(t.orderInfo.prod_price))])],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("商品数量：")]),i("v-uni-text",{staticClass:"order_price"},[t._v(t._s(t.orderInfo.quantity))])],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("套     餐：")]),i("v-uni-text",{staticClass:"order_price"},[t._v(t._s(t.orderInfo.prod_name))]),5==t.orderInfo.prod_cate_id?i("v-uni-text",{staticClass:"order_price"},[t._v("(流量包)")]):t._e()],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("购买日期：")]),i("v-uni-text",{staticClass:"order_sn"},[t._v(t._s(t.orderInfo.created_at))])],1),""!=t.orderInfo.expire_at?i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("有 效 期：")]),i("v-uni-text",{staticClass:"order_price"},[t._v(t._s(t.orderInfo.expire_at))])],1):t._e()],1),1==t.orderInfo.status?i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"bottom_cont"},[i("v-uni-view",{staticClass:"bottom_buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("待付款")])],1)],1):t._e()],1)},n=[]},d23a:function(t,e,i){"use strict";i.r(e);var r=i("ad8d"),n=i("3716");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("e4bd");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"400686c3",null,!1,r["a"],void 0);e["default"]=s.exports},e4bd:function(t,e,i){"use strict";var r=i("9e05"),n=i.n(r);n.a}}]);