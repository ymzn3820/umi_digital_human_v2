(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-figure-figure"],{"0f58":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uIcon:i("fc92").default,uModal:i("f5e8").default,uInput:i("34d4").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{id:"chat"}},[i("v-uni-view",{staticClass:"chat-top"},[i("v-uni-view",{class:1==t.live_type?"check-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getList(1)}}},[t._v("定制数字人")]),i("v-uni-view",{class:0==t.live_type?"check-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getList(0)}}},[t._v("真人数字人")])],1),i("v-uni-view",{staticClass:"chat-list"},[i("v-uni-view",{staticClass:"chat-list-title"},[t._v("当前可创建次数："+t._s(t.number?t.number:"0"))]),i("v-uni-scroll-view",{staticClass:"list_ul",attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"ul_li"},[i("v-uni-view",{staticClass:"ul_style",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gocreat()}}},[i("v-uni-view",{staticClass:"li_style"},[i("v-uni-view",{staticClass:"li_wz"},[i("v-uni-view",{staticClass:"created-box"},[i("u-icon",{attrs:{name:"plus",size:"35"}})],1)],1),i("v-uni-view",{staticClass:"li_text",staticStyle:{opacity:"0"}},[t._v("空白符号")])],1)],1),t._l(t.infoList,(function(e,a){return t.infoList.length>0?i("v-uni-view",{key:a,staticClass:"ul_style"},[i("v-uni-view",{staticClass:"li_style",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCodeNum(3,e)}}},[i("v-uni-view",{staticClass:"li_wz"},[i("v-uni-image",{staticClass:"li_img",attrs:{src:t.getImgUrl(e.video_cover_url),mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"li_text"},[t._v(t._s(e.live_name))])],1)],1):t._e()}))],2)],1)],1),t._e(),i("u-modal",{attrs:{show:t.show,confirmText:"兑换",confirmColor:"#1F64FF;",showCancelButton:!0},on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeKey.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.changeKey.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"key_cont"},[i("v-uni-view",{staticClass:"title"},[t._v("卡密兑换")]),i("u-input",{attrs:{customStyle:{padding:"8px",width:"100%"},inputAlign:"center",placeholder:"请输入兑换码",type:"text"},model:{value:t.cardName,callback:function(e){t.cardName="string"===typeof e?e.trim():e},expression:"cardName"}})],1)],1)],1)},s=[]},"0fb7":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("4de4"),i("d3b7");var a=i("4c53"),n=i("8b2f"),s={data:function(){return{live_type:"",infoList:[],infoDetail:"",number:0,cardName:"",show:!1,isval:!1}},onShow:function(){this.getRecord(1),this.getCodeNum(1)},methods:{gocreat:function(){this.isval=!0,this.getCodeNum(1)},getCodeNum:function(t,e){var i=this,a={activate_type_id:t};(0,n.getActivateResidueNumber)(a).then((function(a){if(console.log(a.data.number,t,i.isval,1051),2e4==a.code)if(1!=t||i.isval)if(a.data[1]>0&&1==t&&i.isval)i.isval=!1,uni.navigateTo({url:"/pages/figure/figure_video"});else if(a.data[3]>0&&3==t)uni.navigateTo({url:"/pages/figure/video?info="+JSON.stringify(e)});else{var n;n=1==t&&i.isval?"您的形象克隆次数已消耗完毕！\n请兑换卡密以补充次数":"您的视频时长已消耗完毕！\n请兑换卡密以补充可用时长",uni.showModal({content:n,confirmText:"兑换卡密",success:function(t){t.confirm&&(i.show=!0)}})}else i.number=a.data.number;else i.$api.msg(a.msg)})).catch((function(t){i.$api.msg("获取失败")}))},openKey:function(){this.show=!0},changeKey:function(){var t=this;if(console.log("进来了"),""!=this.cardName){if(0==this.isClick)return!1;this.isClick=!1;var e={activate_code:this.cardName};(0,a.cardChange)(e).then((function(e){2e4==e.code?(uni.showToast({title:"提交成功",icon:"success",duration:1500}),t.cardName="",t.show=!1,t.isClick=!0):(t.isClick=!0,t.$api.msg(e.msg))})).catch((function(e){t.isClick=!0,t.$api.msg("兑换失败")}))}else this.$api.msg("卡密不能为空")},closeKey:function(){this.cardName="",this.show=!1},getImgUrl:function(e){return t.baseImg+"/"+e},getList:function(t){this.select_type=t,this.getRecord(t)},getRecord:function(t){var e=this;this.live_type=t;var i={live_type:this.live_type};(0,a.getHumanList)(i).then((function(t){2e4==t.code?(e.infoList=t.data.data.filter((function(t){return 1!=t.make_status})),""==e.infoDetail&&(e.infoDetail=e.infoList[0])):e.$api.msg(t.msg)})).catch((function(t){e.$api.msg("获取录音列表失败")}))}}};e.default=s}).call(this,i("c8ba"))},"19b1":function(t,e,i){"use strict";i.r(e);var a=i("0fb7"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},7766:function(t,e,i){"use strict";var a=i("cd67"),n=i.n(a);n.a},"776f":function(t,e,i){"use strict";i.r(e);var a=i("0f58"),n=i("19b1");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7766");var c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"8b6db24e",null,!1,a["a"],void 0);e["default"]=o.exports},"8b2f":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.activateConsume=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/activate_consume",data:e})},e.againVoice=function(e){return(0,a.JsomPut)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.creatMessage=function(e){return(0,a.post)({url:t.figureUrl+"/beings/message/",data:e})},e.creatModel=function(e){return(0,a.post)({url:t.figureUrl+"/beings/models/",data:e})},e.creatVoice=function(e){return(0,a.JsomPost)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.delMessage=function(e){return(0,a.del)({url:t.figureUrl+"/beings/message/",data:e})},e.delModel=function(e){return(0,a.del)({url:t.figureUrl+"/beings/models/",data:e})},e.editModel=function(e){return(0,a.JsomPut)({url:t.figureUrl+"/beings/models/",data:e})},e.getActivateResidueNumber=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/get_activate_residue_number",data:e})},e.getBaseModel=function(e){return(0,a.get)({url:t.figureUrl+"/beings/base_models/",data:e})},e.getBusiness=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/get_business",data:e})},e.getEnv=function(e){return(0,a.get)({url:t.figureUrl+"/beings/env_change/",data:e})},e.getExchange=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/activate_exchange",data:e})},e.getInteract=function(e){return(0,a.post)({url:t.figureUrl+"/beings/interact/",data:e})},e.getMessage=function(e){return(0,a.get)({url:t.figureUrl+"/beings/message/",data:e})},e.getModelList=function(e){return(0,a.get)({url:t.figureUrl+"/beings/models/",data:e})},e.getShare=function(e){return(0,a.post)({url:t.figureUrl+"/beings/share/",data:e})},e.getStats=function(e){return(0,a.post)({url:t.figureUrl+"/beings/stats/",data:e})},e.getVoiceIdQuery=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/VoiceIdQuery",data:e})},e.getVoiceList=function(e){return(0,a.get)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.getapplication=function(e){return(0,a.JsomPost)({url:t.memberUrl+"/pay/message_center/",data:e})},e.getapplicationContent=function(e){return(0,a.JsomPost)({url:t.memberUrl+"/pay/message_center_content/",data:e})},e.openVoice=function(e){return(0,a.put)({url:t.baseUrl+"/api/sv_voice/enable_voice",data:e})},e.postDuration=function(e){return(0,a.post)({url:t.baseUrl+"/api/sv_voice/short_video_get_duration",data:e})},e.postHumanCl=function(e){return(0,a.post)({url:t.baseUrl+"/api/sv_voice/short_video_digital_human_clone",data:e})},e.updateVisit=function(e){return(0,a.put)({url:t.figureUrl+"/beings/visit/",data:e})};i("49e2");var a=i("135e")}).call(this,i("c8ba"))},cd67:function(t,e,i){var a=i("ffe4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("202cf2fc",a,!0,{sourceMap:!1,shadowMode:!1})},ffe4:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".list_ul[data-v-8b6db24e]{width:100%}.list_ul .ul_li[data-v-8b6db24e]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}.ul_style[data-v-8b6db24e]{width:50%}.li_style[data-v-8b6db24e]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:95%}.li_style .li_wz[data-v-8b6db24e]{position:relative}.li_style .li_img[data-v-8b6db24e]{width:%?320?%;height:%?320?%;border-radius:%?30?%;border:1px solid #e9e9e9;background:#fff}.li_style .li_text[data-v-8b6db24e]{color:#000;font-size:%?22?%;font-style:normal;font-weight:400;line-height:%?50?%}.li_top[data-v-8b6db24e]{display:flex;align-items:center;justify-content:space-between;margin-bottom:%?18?%}.top_l[data-v-8b6db24e]{ont-weight:400;font-size:%?28?%;line-height:%?42?%;color:#333;width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.top_r[data-v-8b6db24e]{ont-weight:400;font-size:%?24?%;line-height:%?30?%;color:#6e7480}.li_btn[data-v-8b6db24e]{font-weight:400;font-size:%?24?%;line-height:%?35?%;color:#6e7480}#chat[data-v-8b6db24e]{width:100vw;height:100vh;padding:%?30?%;box-sizing:border-box}#chat .chat-top[data-v-8b6db24e]{width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:%?20?%}#chat .chat-top .check-on[data-v-8b6db24e]{background-color:#1684fc;color:#fff}#chat .chat-top uni-view[data-v-8b6db24e]{width:30%;text-align:center;padding:%?15?% %?0?%;border:1px solid #1684fc;color:#1684fc}#chat .chat-top uni-view[data-v-8b6db24e]:first-child{border-radius:%?8?% %?0?% %?0?% %?8?%}#chat .chat-top uni-view[data-v-8b6db24e]:last-child{border-radius:0 %?8?% %?8?% 0}#chat .created-box[data-v-8b6db24e]{display:flex;justify-content:center;align-items:center;width:%?320?%;height:%?320?%;border-radius:%?30?%;border:1px solid #e9e9e9}#chat .chat-list[data-v-8b6db24e]{width:100%;padding-bottom:%?100?%}#chat .chat-list .chat-list-title[data-v-8b6db24e]{text-align:center;margin-bottom:%?20?%}#chat .chat-list .chat-list-content[data-v-8b6db24e]{margin-top:%?20?%;display:flex;justify-content:space-between;flex-wrap:wrap}#chat .chat-list .chat-list-content .chat-box[data-v-8b6db24e]{width:48%}#chat .chat-list .chat-list-content .chat-box > uni-view[data-v-8b6db24e]:first-child{width:100%;padding-top:100%;border:1px solid #999;border-radius:%?24?%;position:relative}#chat .chat-list .chat-list-content .chat-box > uni-view:first-child uni-image[data-v-8b6db24e]{height:100%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#chat .chat-list .chat-list-content .chat-box > uni-view[data-v-8b6db24e]:last-child{width:100%;text-align:center;margin:%?30?% %?0?%}#chat .chat-created[data-v-8b6db24e]{width:100%;height:calc(90% - %?70?% - %?60?%);display:flex;flex-direction:column;justify-content:center;align-items:center}#chat .chat-created > uni-view[data-v-8b6db24e]:nth-child(2){margin:%?24?% %?0?%}#chat .chat-created > uni-view[data-v-8b6db24e]:last-child{color:#fff;padding:%?20?% %?54?%;background-color:#4095e5;border-radius:%?12?%}",""]),t.exports=e}}]);