(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice"],{"02b5":function(a,t,e){var i=e("afac");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("20aaadc5",i,!0,{sourceMap:!1,shadowMode:!1})},"12de":function(a,t,e){"use strict";var i=e("02b5"),n=e.n(i);n.a},9642:function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"chat_cont"},[e("v-uni-view",{staticClass:"is_read",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.readAll.apply(void 0,arguments)}}},[a._v("一键已读")]),a.messageList.length>0?e("v-uni-scroll-view",{staticClass:"list_ul",attrs:{"scroll-y":"true"}},a._l(a.messageList,(function(t,i){return e("v-uni-view",{key:i,staticClass:"ul_style"},[e("v-uni-view",{staticClass:"li_style",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.toDetail(t)}}},[e("v-uni-view",{class:[1==t.is_read?"li_read_title":"li_title"]},[a._v(a._s(t.title))]),e("v-uni-view",{class:[1==t.is_read?"li_read_desc":"li_desc"]},[a._v(a._s(t.desc))])],1)],1)})),1):e("v-uni-view",{staticClass:"on_order"},[e("v-uni-image",{staticClass:"order_img",attrs:{src:a.backImg}})],1),1==a.loadingType?e("v-uni-view",{staticClass:"on_order_list"},[a._v("没有更多内容了!")]):a._e()],1)],1)},n=[]},a71c:function(a,t,e){"use strict";(function(a){e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("e25e"),e("d3b7"),e("159b"),e("14d9");var i=e("4c53"),n={data:function(){return{active:0,searchValue:"",loadingType:0,page_no:1,page_count:10,messageList:[],pageTotal:0,backImg:a.baseImg+"/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg"}},components:{},onLoad:function(){},onShow:function(){this.getMessageList()},methods:{version:function(a){0==a?this.active=0:1==a?this.active=1:2==a?this.active=2:4==a&&(this.active=4),this.page_no=1,this.loadingType=0,this.searchValue="",this.getMessageList()},search:function(){this.page_no=1,this.loadingType=0,this.getMessageList()},getMessageList:function(){var a=this,t=JSON.parse(uni.getStorageSync("userInfo")),e={user_id:t.user_id,page_index:this.page_no,page_count:this.page_count};(0,i.getMessage)(e).then((function(t){if(2e4==t.code){a.messageList=t.data;var e=t.total;e%a.page_count==0?a.pageTotal=e/a.page_count:a.pageTotal=parseInt(e/a.page_count)+1,1==a.pageTotal&&(a.loadingType=1)}else a.$api.msg(t.msg)})).catch((function(t){a.$api.msg("获取公告失败")}))},onReachBottom:function(){var a=this;if(1!=this.loadingType){this.page_no++;var t=JSON.parse(uni.getStorageSync("userInfo")),e={user_id:t.user_id,page_index:this.page_no,page_count:this.page_count};(0,i.getMessage)(e).then((function(t){if(2e4==t.code){var e=t.total;if(0==e)return;var i=t.data,n=a.messageList;i.forEach((function(a){n.push(a)})),e%a.page_count==0?a.pageTotal=e/a.page_count:a.pageTotal=parseInt(e/a.page_count)+1,a.pageTotal<=a.page_no&&(a.loadingType=1)}else a.$api.msg(t.msg)})).catch((function(t){a.$api.msg("获取订单信息失败")}))}},readAll:function(){var a=this,t=JSON.parse(uni.getStorageSync("userInfo")),e={user_id:t.user_id};(0,i.editMessage)(e).then((function(t){2e4==t.code?(a.page_no=1,a.loadingType=0,a.getMessageList()):a.$api.msg(t.msg)})).catch((function(t){a.$api.msg("修改失败")}))},toDetail:function(a){uni.navigateTo({url:"/pages/notice/notice_detail?message_id="+a.message_id})}}};t.default=n}).call(this,e("c8ba"))},af84:function(a,t,e){"use strict";e.r(t);var i=e("a71c"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a},afac:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,"uni-page-body[data-v-27affaa2]{background:#f6f8fb}body.?%PAGE?%[data-v-27affaa2]{background:#f6f8fb}.top_cont[data-v-27affaa2]{width:100%;height:%?142?%;background:#fff;position:fixed;top:0;z-index:10}.search_cont[data-v-27affaa2]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 %?25?%}.search[data-v-27affaa2]{width:100%;height:%?72?%;background:#f6f6f6;border-radius:%?100?%;display:flex;align-items:center;justify-content:center;padding:0 %?32?%;margin-bottom:%?20?%}.search_input[data-v-27affaa2]{flex:1}.search_img[data-v-27affaa2]{width:%?36?%;height:%?36?%}.cont_tabs[data-v-27affaa2]{width:100%;display:flex}.tabs_l[data-v-27affaa2]{width:25%;display:flex;align-items:center;justify-content:center}.active_tabs[data-v-27affaa2]{font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?50?%;color:#1f64ff;border-bottom:%?5?% solid #1f64ff}.tabs[data-v-27affaa2]{font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?50?%;color:#999}.list_ul[data-v-27affaa2]{padding:%?0?% %?10?% %?25?% %?10?%;margin-bottom:%?30?%}.ul_style[data-v-27affaa2]{display:flex;flex-direction:column;padding:%?15?%;background:#fff;border-radius:%?8?%;margin-bottom:%?15?%}.ul_style .li_title[data-v-27affaa2]{font-size:%?30?%;line-height:%?50?%;color:#333;width:70%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ul_style .li_desc[data-v-27affaa2]{font-size:%?26?%;line-height:%?40?%;color:#666}.ul_style .li_read_title[data-v-27affaa2]{font-size:%?30?%;line-height:%?40?%;color:#bfbfbf;width:70%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ul_style .li_read_desc[data-v-27affaa2]{font-size:%?26?%;line-height:%?40?%;color:#bfbfbf}.on_order[data-v-27affaa2]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw}.order_img[data-v-27affaa2]{width:%?450?%;height:%?450?%}.on_order_list[data-v-27affaa2]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}.is_read[data-v-27affaa2]{width:100%;text-align:right;color:#1f64ff;font-size:%?26?%;line-height:%?40?%;padding:%?20?%}",""]),a.exports=t},d936:function(a,t,e){"use strict";e.r(t);var i=e("9642"),n=e("af84");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("12de");var o=e("f0c5"),f=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"27affaa2",null,!1,i["a"],void 0);t["default"]=f.exports}}]);