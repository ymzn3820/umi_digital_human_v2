(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-answer-answer"],{"0ccba":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("34d4")),o=a(n("575b")),r={name:"u--input",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvInput:i.default}};e.default=r},"1b9a":function(t,e,n){"use strict";n.r(e);var a=n("aa50"),i=n("7cb6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7b34");var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"711e1092",null,!1,a["a"],void 0);e["default"]=u.exports},"2d95":function(t,e,n){"use strict";n.r(e);var a=n("3466"),i=n("b176");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},3466:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uvInput",{attrs:{value:t.value,type:t.type,fixed:t.fixed,disabled:t.disabled,disabledColor:t.disabledColor,clearable:t.clearable,password:t.password,maxlength:t.maxlength,placeholder:t.placeholder,placeholderClass:t.placeholderClass,placeholderStyle:t.placeholderStyle,showWordLimit:t.showWordLimit,confirmType:t.confirmType,confirmHold:t.confirmHold,holdKeyboard:t.holdKeyboard,focus:t.focus,autoBlur:t.autoBlur,disableDefaultPadding:t.disableDefaultPadding,cursor:t.cursor,cursorSpacing:t.cursorSpacing,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,adjustPosition:t.adjustPosition,inputAlign:t.inputAlign,fontSize:t.fontSize,color:t.color,prefixIcon:t.prefixIcon,suffixIcon:t.suffixIcon,suffixIconStyle:t.suffixIconStyle,prefixIconStyle:t.prefixIconStyle,border:t.border,readonly:t.readonly,shape:t.shape,customStyle:t.customStyle,formatter:t.formatter,ignoreCompositionEvent:t.ignoreCompositionEvent},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("focus")},blur:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("blur",e)}.apply(void 0,arguments)},keyboardheightchange:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("keyboardheightchange")},change:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("change",e)}.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("input",e)}.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.$emit("confirm",e)}.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("clear")},click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")}}},[t._t("prefix",null,{slot:"prefix"}),t._t("suffix",null,{slot:"suffix"})],2)},i=[]},"4f66":function(t,e,n){"use strict";var a=n("92eb"),i=n.n(a);i.a},"5f9a":function(t,e,n){"use strict";n.r(e);var a=n("fd85"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"7b34":function(t,e,n){"use strict";var a=n("bd56"),i=n.n(a);i.a},"7cb6":function(t,e,n){"use strict";n.r(e);var a=n("ffd7"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"92eb":function(t,e,n){var a=n("b679");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("58035ec0",a,!0,{sourceMap:!1,shadowMode:!1})},aa50:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uTextarea:n("b9c0").default,"u-Input":n("2d95").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{padding:"30upx"}},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"title_l"},[t._v("*")]),a("v-uni-text",{staticClass:"title_r"},[t._v("请选择问题类型")])],1),a("v-uni-view",{staticClass:"ans_list"},t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"ans_item",style:[{background:t.active==n?"rgba(31,100,255,0.15)":"#fff",color:t.active==n?"#1F64FF":"#333"}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.question(n)}}},[t._v(t._s(e))])})),1),a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"title_l"},[t._v("*")]),a("v-uni-text",{staticClass:"title_r"},[t._v("请描述你问到的问题")])],1),a("v-uni-view",{staticClass:"qs_cont"},[a("u-textarea",{attrs:{height:"100",autoHeight:!0,border:"none",placeholder:"请在此输入您目前遇到的问题,越清晰越利于我们为您解决,感谢您的反馈"},model:{value:t.qs_cont,callback:function(e){t.qs_cont=e},expression:"qs_cont"}})],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"title_r"},[t._v("请在此上传你所遇到问题的截图/视频")])],1),a("v-uni-view",{staticClass:"qs_cont",staticStyle:{"background-color":"none"}},[a("v-uni-view",{staticClass:"qs_img"},[t._l(t.qsImg,(function(t,e){return a("v-uni-view",{key:e},[a("img",{staticClass:"up_img",attrs:{src:t,alt:""}})])})),t.qsImg.length<6?a("img",{staticClass:"up_img",attrs:{src:n("fd2e"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}}):t._e()],2)],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"title_r"},[t._v("联系方式")])],1),a("v-uni-view",{staticClass:"qs_phone"},[a("u--input",{attrs:{customStyle:{background:"#fff",padding:"8px"},border:"none",placeholder:"请输入您的联系方式：手机号/邮箱",type:"text"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-uni-view",{staticClass:"tips"},[t._v("Tips：您的反馈将用于改进我们的产品与服务，发送后请您耐心等待，我们会有专门的人员为您处理问题...")]),a("v-uni-view",{staticClass:"qs_btn"},[a("v-uni-view",{staticClass:"chat_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[]},b176:function(t,e,n){"use strict";n.r(e);var a=n("0ccba"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b418:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{value:{type:[String,Number],default:uni.$u.props.textarea.value},placeholder:{type:[String,Number],default:uni.$u.props.textarea.placeholder},placeholderClass:{type:String,default:uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:uni.$u.props.input.placeholderStyle},height:{type:[String,Number],default:uni.$u.props.textarea.height},confirmType:{type:String,default:uni.$u.props.textarea.confirmType},disabled:{type:Boolean,default:uni.$u.props.textarea.disabled},count:{type:Boolean,default:uni.$u.props.textarea.count},focus:{type:Boolean,default:uni.$u.props.textarea.focus},autoHeight:{type:Boolean,default:uni.$u.props.textarea.autoHeight},fixed:{type:Boolean,default:uni.$u.props.textarea.fixed},cursorSpacing:{type:Number,default:uni.$u.props.textarea.cursorSpacing},cursor:{type:[String,Number],default:uni.$u.props.textarea.cursor},showConfirmBar:{type:Boolean,default:uni.$u.props.textarea.showConfirmBar},selectionStart:{type:Number,default:uni.$u.props.textarea.selectionStart},selectionEnd:{type:Number,default:uni.$u.props.textarea.selectionEnd},adjustPosition:{type:Boolean,default:uni.$u.props.textarea.adjustPosition},disableDefaultPadding:{type:Boolean,default:uni.$u.props.textarea.disableDefaultPadding},holdKeyboard:{type:Boolean,default:uni.$u.props.textarea.holdKeyboard},maxlength:{type:[String,Number],default:uni.$u.props.textarea.maxlength},border:{type:String,default:uni.$u.props.textarea.border},formatter:{type:[Function,null],default:uni.$u.props.textarea.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}};e.default=a},b5fe:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-711e1092]{background:#f6f8fb}body.?%PAGE?%[data-v-711e1092]{background:#f6f8fb}.qs_cont[data-v-711e1092]{background:#fff;border-radius:%?16?%;padding:%?10?%;margin-bottom:%?30?%}.title[data-v-711e1092]{display:flex;align-items:center;font-weight:500;font-size:%?30?%;line-height:%?40?%;color:#333;margin-bottom:%?15?%}.title_r[data-v-711e1092]{color:#333}.ans_list[data-v-711e1092]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:%?20?%;margin:%?32?% 0}.ans_list .ans_item[data-v-711e1092]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:%?20?% %?46?%;width:calc(25%-10upx);background:#fff;color:#333;border-radius:%?8?%}.qs_img[data-v-711e1092]{display:flex;align-items:center;justify-content:flex-start;margin:%?20?%;flex-wrap:wrap}.qs_img .up_img[data-v-711e1092]{width:%?120?%;height:%?120?%;padding:%?10?%}.qs_btn[data-v-711e1092]{position:fixed;bottom:%?100?%;width:calc(100% - %?60?%);display:flex;align-items:center;justify-content:center}.chat_btn[data-v-711e1092]{width:calc(100% - %?60?%);display:flex;align-items:center;justify-content:center;background:#1f64ff;border-radius:%?12?%;line-height:%?90?%;font-style:normal;font-weight:500;font-size:%?34?%;color:#fff}.chat_btn[data-v-711e1092]:active{opacity:.5}.tips[data-v-711e1092]{color:#949494;font-size:%?24?%;font-weight:400;line-height:150%;margin-top:%?20?%}",""]),t.exports=e},b679:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-1ba40ab6], uni-scroll-view[data-v-1ba40ab6], uni-swiper-item[data-v-1ba40ab6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-textarea[data-v-1ba40ab6]{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.u-textarea--radius[data-v-1ba40ab6]{border-radius:4px}.u-textarea--no-radius[data-v-1ba40ab6]{border-radius:0}.u-textarea--disabled[data-v-1ba40ab6]{background-color:#f5f7fa}.u-textarea__field[data-v-1ba40ab6]{flex:1;font-size:15px;color:#606266;width:100%}.u-textarea__count[data-v-1ba40ab6]{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}',""]),t.exports=e},b9c0:function(t,e,n){"use strict";n.r(e);var a=n("beb1"),i=n("5f9a");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4f66");var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"1ba40ab6",null,!1,a["a"],void 0);e["default"]=u.exports},bd56:function(t,e,n){var a=n("b5fe");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("8110ac4e",a,!0,{sourceMap:!1,shadowMode:!1})},beb1:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-textarea",class:t.textareaClass,style:[t.textareaStyle]},[n("v-uni-textarea",{staticClass:"u-textarea__field",style:{height:t.$u.addUnit(t.height)},attrs:{value:t.innerValue,placeholder:t.placeholder,"placeholder-style":t.$u.addStyle(t.placeholderStyle,"string"),"placeholder-class":t.placeholderClass,disabled:t.disabled,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed,cursorSpacing:t.cursorSpacing,cursor:t.cursor,showConfirmBar:t.showConfirmBar,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,adjustPosition:t.adjustPosition,disableDefaultPadding:t.disableDefaultPadding,holdKeyboard:t.holdKeyboard,maxlength:t.maxlength,confirmType:t.confirmType,ignoreCompositionEvent:t.ignoreCompositionEvent},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},linechange:function(e){arguments[0]=e=t.$handleEvent(e),t.onLinechange.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyboardheightchange.apply(void 0,arguments)}}}),t.count?n("v-uni-text",{staticClass:"u-textarea__count",style:{"background-color":t.disabled?"transparent":"#fff"}},[t._v(t._s(t.innerValue.length)+"/"+t._s(t.maxlength))]):t._e()],1)},i=[]},fd2e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAB+CAYAAAD/cVlWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB7d3BTSJhGIfxd0ZOeqEEvEgmMVmpYLUC7cAS1ArEClY6YDvYrUA6gBuRmEAJXMSoAfZ9ZdywmPyPy4Tv+SXIDMPJPHlnOMw3mW0YDoene3t758vl8sJ3G4YUDLIsG8zn87uiKCbrB7LPjX6/Xz84OLj1MK4NyfJQ7p+fn+9ardb0Yz/+RBz7+/sPvnnir+lisej4e89r6hl23mg0OvHpcZ3n+WX50WA2m51FJFn5hR/l5Jh4HGebYwZp8MuLhkcSg6IRk+To6OgmKz8cxxc8jkPiSFvZQ9836zEscr8gvS2PdYkD0UB5iRHXIxe5n1riusPe3987Bqz04o8Hcp49Pj4uY6fZbGYGlD67yA0QCAQSgUAiEEgEAolAIBEIJAKBRCCQCAQSgUAiEEgEAolAIBEIJAKBRCCQCAQSgUAiEEgEAolAINUM/3h6erqcz+f3vhk3L7ebzeZPSxgTZIPH0fa3uq2Wvri3xBHIV4217boljkAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBBKBQCIQSAQCiUAgEQgkAoFEIJAIBFLl1gdZW5+jEnfWfz4e9D+aWIXWJancBFlbnyNVDavQuiRVPMUkvyaHrVY3qoTKBbJYLG5sNWZTNfX/wZ1VROWuQYqi6Ppb17Zk85oj9UfW8ysGEoFAIhBIBAKJQCARCCQCgUQgkAgEEoFAIhBIBAKJQCARCCQCgUQgkAgEEoFAIhBIBAKJQCARCCQCgUQgkAgEEoFAIhBIBPLV+p31E0scgWxYW12gUnfZb0vl7u7ftm2vLlA1TBBIBAKJQCARCCQCgUQgkAgEEoFAIhBIBAKJQCARCCQCgUQgkAgEEoFAIhBIBAKJQCARCCQCgUQgkCKQSWwMh8NTA9xoNDopNwf5crn8Xe6cGrByVb4PspgceZ4/2OpOslZRFBNDsryHhvcwjm3v4TD3IHo+RTq+X49Q4guGJJVxxLCwaCKGxcdDg8fjcf3t7S0OfJx7sizr+n7n+Ph4YNh5cRap1WrffWJc+27dX4PZbHbWarWmf58qHZG8vr62PY4rQ7Jicry8vLQjjtj/8tjx8hTT9lHzzcqJgp03iR8r/voVlxzrB/4AvzcBS756bZ4AAAAASUVORK5CYII="},fd85:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("14d9");var i=a(n("b418")),o={name:"u-textarea",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:function(t){return t}}},watch:{value:{immediate:!0,handler:function(t,e){this.innerValue=t,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{textareaClass:function(){var t=[],e=this.border,n=this.disabled;this.shape;return"surround"===e&&(t=t.concat(["u-border","u-textarea--radius"])),"bottom"===e&&(t=t.concat(["u-border-bottom","u-textarea--no-radius"])),n&&t.push("u-textarea--disabled"),t.join(" ")},textareaStyle:function(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},methods:{setFormatter:function(t){this.innerFormatter=t},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t),uni.$u.formValidate(this,"blur")},onLinechange:function(t){this.$emit("linechange",t)},onInput:function(t){var e=this,n=t.detail||{},a=n.value,i=void 0===a?"":a,o=this.formatter||this.innerFormatter,r=o(i);this.innerValue=i,this.$nextTick((function(){e.innerValue=r,e.valueChange()}))},valueChange:function(){var t=this,e=this.innerValue;this.$nextTick((function(){t.$emit("input",e),t.changeFromInner=!0,t.$emit("change",e),uni.$u.formValidate(t,"change")}))},onConfirm:function(t){this.$emit("confirm",t)},onKeyboardheightchange:function(t){this.$emit("keyboardheightchange",t)}}};e.default=o},ffd7:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9");var a=n("5c9b"),i={data:function(){return{qs_cont:"",phone:"",qsImg:[],upImg:[],list:["使用问题","产品错误","产品建议","不良内容","购买问题","其他问题"],active:0}},components:{},onLoad:function(){},onShow:function(){},methods:{question:function(t){this.active=t},uploadImg:function(){var e=this;uni.chooseImage({count:1,mediaType:["image"],sourceType:["album","camera"],success:function(n){var a=n.tempFilePaths[0];uni.uploadFile({url:t.loginUrl+"/api/user/oss_upload",filePath:a,name:"image",formData:{image:a,oss_dir:"static",cate:"problem_picture"},success:function(n){var a=JSON.parse(n.data);if(2e4==a.code){var i={picture_url:a.data.new_url};e.upImg.push(i),e.qsImg.push(t.baseImg+"/"+a.data.new_url)}}})}})},submit:function(){var t=this;if(""!=this.qs_cont){if(0==this.isClick)return!1;this.isClick=!1;var e={picture_url_list:this.upImg,contact:this.phone,problem:this.qs_cont,question_type:this.active+1};console.log(e,336),(0,a.feedback)(e).then((function(e){2e4==e.code?(uni.showToast({title:"提交成功",icon:"success",duration:1500}),t.qs_cont="",t.phone="",t.qsImg=[],t.upImg=[],t.isClick=!0):(t.isClick=!0,t.$api.msg(e.msg))})).catch((function(e){t.isClick=!0,t.$api.msg("内容提交失败")}))}else this.$api.msg("反馈内容不能为空！")}}};e.default=i}).call(this,n("c8ba"))}}]);