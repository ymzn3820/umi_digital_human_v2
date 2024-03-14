<template>
	<view id="chat">
		<view class="chat-top">
			<view :class="check == 0?'check-on':''" @click="check = 0">定制声音</view>
			<view :class="check == 1?'check-on':''" @click="check = 1">AI声音</view>
		</view>
		<!-- 定制声音 -->
		<view class="customized-audio" v-if="check == 0">
			<view class="created-audio">
				<view class="title">当前可创建次数：{{createNum}}</view>
				<!-- 创建盒子 -->
				<view class="created-box" @click="toCreated()">
					<u-icon name="plus" size="31"></u-icon>
					<view>创建新声音</view>
				</view>
				<!-- 音频列表 -->
				<view class="audio-list">
					<!-- 标题 -->
					<view class="title">我的声音</view>
					<!-- 列表 -->
					<view class="chat_cont">
						<scroll-view class="list_ul" scroll-y="true" v-if="voiceList.length > 0">
							<view class="ul_style" v-for="(item, index) in voiceList" :key="index">
								<view class="li_style">
									<view class="ul_right">
										<view class="li_top">
											<text class="top_l">{{ item.voice_name }}</text>
										</view>
										<view class="li_btn">
											<view class="btn_l">消耗次数</view>
											<view class="btn_r">1次</view>
										</view>

										<view class="li_btn">
											<view class="btn_l">状态</view>
											<view class="btn_r">
												<!-- <text style="color: #f9ae4d" v-if="item.voice_status == 1">待付款</text> -->
												<text style="color: #1F64FF" v-if="item.voice_status == 2">训练中</text>
												<text style="color: #32BE48" v-if="item.voice_status == 3">制作成功</text>
												<text style="color: #fa3534" v-if="item.voice_status == 4">制作失败</text>
												<text style="color: #333" v-if="item.voice_status == 5">已启用</text>
												<text style="color: #c8c9cc" v-if="item.voice_status == 6">已过期</text>
											</view>
										</view>
										<view class="li_btn">
											<view class="btn_l">创建时间</view>
											<view class="btn_r">{{ item.create_time }}</view>
										</view>

										<view class="li_edit">
											<view class="edit_l" v-if="item.voice_status == 3 || item.voice_status == 5"
												@click.stop="clonePlay(item.demo_audio)">试听</view>
											<view class="edit_l" v-if="item.voice_status == 3 || item.voice_status == 4"
												@click.stop="againVoice(item)">重新训练</view>
											<view class="edit_l" v-if="item.voice_status == 5"
												@click.stop="generatVoice(item)">合成
											</view>
											<view class="edit_l" v-if="item.voice_status == 3 || item.voice_status == 5"
												@click="toHistory()">记录</view>
											<view class="edit_r" v-if="item.voice_status == 3"
												@click.stop="openVoice(item.train_code)">启用</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>

						<view class="on_order" v-else>
							<image class="order_img" :src="backImg"></image>
						</view>

						<view class="on_order_list" v-if="loadingType == 1">没有更多内容了!</view>
					</view>

				</view>
			</view>
		</view>
		<view class="chat-audio" v-if="check == 1">
			<view class="main">
				<view class="main_title" style="display: flex; justify-content: space-between;">
					<view class="top">
						<view class="left"></view>
						<view class="middle">填写内容</view>
						<image :src="helpImg" mode="" class="top_img" @click="cptShow=true"></image>
					</view>
					<view class="right" @click="toHis">历史记录</view>
				</view>

				<textarea v-model="content" cols="25" rows="4" :placeholder="placeholder" maxlength='-1'
					style="border: 1px solid #999;padding: 10rpx;border-radius: 10rpx;box-sizing: border-box;height: 200rpx; width: calc(100% - 44rpx); margin: auto; margin-bottom: 20rpx;"></textarea>

				<view class="progress" v-if="speech_voice != ''">
					<view class="pro">
						<gw-audiott :autoplay="false" :src="getImgUrl(speech_voice)" />
					</view>
					<view class="img_r" @click.stop="saveShare(speech_voice)">
						<u-icon name="share-square" color="#2979ff" size="28"></u-icon>
						<view style="color: #2979ff;font-size: 24rpx;">分享</view>
					</view>
				</view>
				<view style="color: #B7B9C0;font-size: 24upx;margin-bottom: 48rpx">
					注意：请不要生成对个人及组织造成侵害的内容，此功能仅供个人学习、娱乐及研究使用
				</view>
				<view class="main_title">
					<view class="top">
						<view class="left"></view>
						<view class="middle">选择引擎</view>
					</view>
					<view style="color: #B7B9C0;font-size: 24upx;">
						(基础版速度更快，进阶版音质更好)
					</view>
				</view>

				<u-scroll-list :indicator='false'>
					<view class="item" v-for="(item, index) in engineList.slice(0,5)" :key="index"
						@click="engineChange(index, item.engine_code)"
						:style="[{background:(active==index?'rgba(31, 100, 255, 0.15)':''),color:(active==index?'#1F64FF':'')}]">
						<view>{{item.engine_name}}</view>
					</view>
				</u-scroll-list>

				<view class="main_title" style="margin-top: 48rpx;">
					<view class="top">
						<view class="left"></view>
						<view class="middle">当前播音员</view>
					</view>
				</view>
				<view class="user">
					<view class="info">
						<image style="width: 96rpx;height: 96rpx; border-radius: 50%;" :src="getImgUrl(userImg)">
						</image>
						<view style="margin-left: 24upx;">
							<view style="color: #000;font-size: 28rpx;font-weight: 500;">{{ voice_name }}</view>
							<!-- <view style="color: #ADB0B6;font-size: 28rpx;margin-top: 28rpx;">{{ voice_lang }}</view> -->
						</view>
						<view class="userBtn" style="margin: 0 52upx 0 108upx;" @click="play(voice_url)">
							<image :src="playImg" mode=""></image>
							<view class='userContent'>试听</view>
						</view>
						<view class="userBtn" @click="toChange">
							<image :src="changeImg" mode=""></image>
							<view class='userContent'>更换播音员</view>
						</view>
					</view>
					<view style="display: flex;" v-if="active > 1" class="line">
						<text style="color: #000;font-size: 28upx;white-space: nowrap;line-height: 250%;">语调</text>
						<u-slider style="width: calc(100% - 28upx);" v-model="intonation" :min="into_min"
							:max="into_max" showValue blockSize="13"></u-slider>
					</view>
					<view style="display: flex;" class="line">
						<text style="color: #000;font-size: 28upx;white-space: nowrap;line-height: 250%;">语速</text>
						<u-slider style="width: calc(100% - 28upx);" :value="speed" :min="speed_min" :max="speed_max"
							showValue blockSize="13"></u-slider>
					</view>
				</view>

			</view>

			<view class="bottom" style="margin-bottom: 20upx;">
				<button @click="todialogue"
					style="background-color: #1F64FF;color: #fff;width: 100%;height: 90upx;line-height: 90upx; bottom: 100rpx;"
					type="default">合成语音</button>
			</view>

			<u-popup :show="voiceShow" mode="bottom" :round="10" @close="closeVoice">
				<view class="pop_cont">
					<view class="pop_title">选择播音员</view>
					<view class="userList">
						<view class="user_item" v-for="item,index in userList" :key="index"
							:style="[{border:(userActive==index?'3rpx solid #1F64FF;':'')}]" @click="userClick(index)">
							<image :src="getImgUrl(item.voice_logo)"></image>
							<view class="user_name">{{item.voice_name}}</view>
							<view v-if="userActive==index" class="user_b" @click.stop="play(item.speech_url)">点击试听
							</view>
						</view>
					</view>
				</view>
				<view class="bottom" style="width: calc(100% - 80rpx); margin-bottom: 20upx;">
					<button @click="selectVoice"
						style="background-color: #1F64FF;color: #fff;width: 80%;height: 90upx;line-height: 90upx;"
						type="default">确认</button>
				</view>
			</u-popup>

			<u-popup :show="playShow" mode="center" :round="10" @close="playShow = false" :zIndex="10099"
				:closeOnClickOverlay="false">
				<view class="pop_voice">
					<image class="pop_img" :src="picImg"></image>

					<view class="pop_stop" @click="stop">停止播放</view>
				</view>

			</u-popup>

			<u-modal :show="cptShow" :title="cptTitle" :content='cptContent' :closeOnClickOverlay="true" width="500upx"
				confirmText='我知道了' confirmColor='#1F64FF' confirmButtonShape='square' @confirm='cptShow=false'
				@cancel="cptShow=false" @close="cptShow=false"></u-modal>
		</view>
		<!-- 创建数字人 -->
		<view class="chat-created" v-if="voiceList.length == 0">
			<view>你还没有定制的数字人</view>
			<view>当前可创建次数：{{createNum}}</view>
			<view @click="toCreated()">我要定制</view>
		</view>
		<u-popup :show="playShow" mode="center" :round="10" @close="playShow = false" :zIndex="10099"
			:closeOnClickOverlay="false">
			<view class="pop_voice">
				<image class="pop_img" :src="picImg"></image>

				<view class="pop_stop" @click="stop">停止播放</view>
			</view>
		</u-popup>
		<u-modal :show="show" @cancel="closeKey" confirmText="兑换" confirmColor="#1F64FF;" :showCancelButton='true'
			@confirm="changeKey">
			<view class="key_cont" style="">
				<view class="title">卡密兑换</view>
				<u-input :customStyle='{"padding":"8px", "width":"100%"}' inputAlign="center" v-model.trim="cardName"
					placeholder="请输入兑换码" type="text"></u-input>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getSpeechEngine,
		getSpeechVoice,
		goTextSpeech,
		getSpeechResult,
		getSpeechDetail,
		cardChange,
	} from '@/apis/user.js'
	import {
		getVoiceList,
		openVoice,
		getActivateResidueNumber
	} from '@/apis/home.js'
	import gwAudiott from '../../components/gw-audiott/gw-audiott.vue'
	export default {
		data() {
			return {
				show: false,
				cardName: '',
				createNum: '',

				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				loadingType: 0,
				page_no: 1,
				page_count: 10,
				voiceList: [],
				pageTotal: 0,
				backImg: global.baseImg + '/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg',
				addImg: global.baseImg + '/xcx/01fece57-06c7-4eff-ab60-671230d86f80.jpg',

				check: 0,
				log: global.baseImg + '/xcx/com/message_center/Frame%20427320411.png',
				ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
				hisImg: global.baseImg + '/xcx/com/message_center/clock.png',

				playImg: global.baseImg + '/xcx/com/message_center/play.png',
				changeImg: global.baseImg + '/xcx/com/message_center/change.png',
				img_l: global.baseImg + '/xcx/com/message_center/speechplay.png',
				img_r: global.baseImg + '/xcx/com/message_center/download.png',
				content: '',
				placeholder: '请输入你想转化的文本',
				active: 4,
				engineList: [],
				value: 5,
				provalue: 20,
				totalTime: 30,
				hashrate: '31.5',
				userActive: 0,
				voiceShow: false,
				userList: [],

				innerAudioContext: null,
				userImg: global.baseImg + '/xcx/com/message_center/皮特.png',
				voice_name: '',
				voice_lang: '',
				voice_url: '',

				intonation: 0,
				into_min: 0,
				into_max: 0,
				speed: 1,
				speed_min: 0.25,
				speed_max: 4,

				speech_time: 0,
				speech_voice: '',
				h_code: '',
				engine_code: '',
				voice_code: '',
				playShow: false,
				picImg: global.baseImg + '/xcx/com/message_center/%E6%9C%80%E6%96%B0%E5%8A%A8%E5%9B%BE.gif',
				helpImg: global.baseImg + '/xcx/com/message_center/help-circle.png',
				cptShow: false,
				cptTitle: '提示',
				cptContent: '根据你所要想的语音效果语言属性来输入所对应的语言，例如输入英文，转成英语效果语音',
			};
		},
		components: {},

		onLoad(option) {
			if (option.h_code) {
				this.h_code = option.h_code
				this.getSpeechDetail(this.h_code)
			}

			//语音播放初始化
			this.init()
		},
		async onShow() {
			this.getHumanList()
			this.getCodeNum()
			if (this.h_code == '') {
				this.active = 4
				await this.getSpeechEngine()
				this.engineChange(4, 1000010005)
			}

		},
		methods: {
			// 卡密次数
			getCodeNum() {
				let data = {
					activate_type_id: 2
				}
				getActivateResidueNumber(data).then(res => {
					if (res.code == 20000) {
						this.createNum = res.data[2]

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败')
				})
			},
			//卡密兑换
			openKey() {
				this.show = true
			},
			closeKey() {
				this.cardName = ''
				this.show = false
			},
			// 兑换卡密
			changeKey() {
				console.log('进来了');
				if (this.cardName == '') {
					this.$api.msg('卡密不能为空');
					return
				}

				if (this.isClick == false) {
					return false;
				}
				this.isClick = false;

				let val = {
					'activate_code': this.cardName,
					// 'user_id': this.userInfo.user_id
				}

				cardChange(val).then(res => {
					if (res.code == 20000) {
						uni.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 1500
						})
						this.cardName = '';
						this.show = false;
						this.isClick = true;
						this.getInfo()
					} else {
						this.isClick = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('兑换失败');
				})
			},

			//合成
			generatVoice(item) {
				uni.navigateTo({
					url: '/childCont/clone/copy_voice?item=' + JSON.stringify(item)
				})
			},
			//合成记录
			toHistory() {
				uni.navigateTo({
					url: '/childCont/clone/clone_history'
				})
			},
			//重新训练
			againVoice(item) {
				uni.navigateTo({
					url: '/childCont/clone/voice_clone?edit=2' + '&info=' + JSON.stringify(item)
				})
			},

			//启用
			openVoice(val) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定启用该声音吗？',
					confirmText: "启用",
					success(res) {
						if (res.confirm) {
							that.voiceStart(val)
						}
					}
				});
			},

			voiceStart(val) {
				// console.log(val,669)
				openVoice(val).then(res => {
					if (res.code == 20000) {
						this.$api.msg('启用成功');
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('启用失败');
				})
			},
			//页面触底事件
			onReachBottom() {
				if (this.loadingType == 1) return
				this.page_no++
				let val = {
					page_size: this.page_count,
					page: this.page_no,
					voice_name: this.voice_name,
					voice_status: this.voice_status
				}
				getVoiceList(val).then(res => {
					if (res.code == 20000) {

						let total = res.data.total;
						if (total == 0) return
						let List = res.data.data;
						let addList = this.voiceList;
						List.forEach(item => {
							addList.push(item);
						});

						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						console.log(this.pageTotal, 158)
						if (this.pageTotal <= this.page_no) {
							this.loadingType = 1
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},

			// 获取声音列表
			getHumanList() {
				let val = {
					page_size: this.page_count,
					page: this.page_no,
					voice_name: '',
					voice_status: ''
				}
				getVoiceList(val).then(res => {
					if (res.code == 20000) {
						this.voiceList = res.data.data;
						let total = res.data.total;
						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						if (this.pageTotal == 1) {
							this.loadingType = 1;
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取失败');
				})
			},



			// 跳转创建声音
			toCreated() {
				if (this.createNum > 0) {
					uni.navigateTo({
						url: '/childCont/clone/voice_clone'
					})
				} else {
					uni.showModal({
						content: '您的声音克隆次数已消耗完毕！\n请兑换卡密以补充次数',
						confirmText: '兑换卡密',
						success: (res) => {
							if (res.confirm) {
								this.show = true
							}
						}
					})
				}
			},
			init() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});

				this.innerAudioContext.onEnded(() => {
					console.log('播放停止了')
					this.innerAudioContext.stop()
					this.playShow = false
				})
			},

			toHis() {
				uni.navigateTo({
					url: '/pages/voice/speech_history'
				})
			},

			// 获取详情
			getSpeechDetail(code) {
				getSpeechDetail(code).then(res => {
					console.log('res', res);
					if (res.code == 20000) {
						this.content = res.data.content
						this.engine_code = res.data.engine_code
						this.voice_code = res.data.voice_code
						this.userImg = res.data.voice_logo
						this.voice_name = res.data.voice_name
						this.voice_lang = res.data.language
						this.voice_url = res.data.speech_url
						this.speed = res.data.speech_rate
						this.intonation = res.data.pitch_rate
						this.speech_voice = res.data.speech_url
						this.getSpeechEngine()
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			// 获取引擎
			getSpeechEngine() {
				getSpeechEngine().then(res => {
					if (res.code == 20000) {
						this.engineList = res.data
						// console.log(this.engine_code, 333)
						if (this.engineList.length > 0) {
							this.engineList.forEach((item, index) => {
								if (item.engine_code == this.engine_code) {
									this.active = index
									if (this.active == 0) {
										this.hashrate = 31.5
										this.intonation = 0
										this.into_min = 0
										this.into_max = 0
										this.speed = 1
										this.speed_min = 0.25
										this.speed_max = 4
									} else if (this.active == 1) {
										this.hashrate = 63
										this.intonation = 0
										this.into_min = 0
										this.into_max = 0
										this.speed = 1
										this.speed_min = 0.25
										this.speed_max = 4
									} else if (this.active == 2) {
										this.hashrate = 30
										this.intonation = 5
										this.into_min = 0
										this.into_max = 15
										this.speed = 5
										this.speed_min = 0
										this.speed_max = 15
									} else if (this.active == 3) {
										this.hashrate = 45
										this.intonation = 50
										this.into_min = 0
										this.into_max = 100
										this.speed = 0
										this.speed_min = 100
										this.speed_max = 100
									} else if (this.active == 4) {
										this.hashrate = 33
										this.intonation = 0
										this.into_min = -500
										this.into_max = 500
										this.speed = 0
										this.speed_min = -500
										this.speed_max = 500
									}
								}
							})
						}
						// if(this.h_code == '') {
						// 	this.getSpeechVoice(res.data[0].engine_code)
						// } else {
						// 	this.getSpeechVoice(this.engine_code)
						// }

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			// 获取音色
			getSpeechVoice(code) {
				let val = {
					'engine_code': code
				}
				getSpeechVoice(val).then(res => {
					if (res.code == 20000) {
						this.userList = res.data
						this.userImg = res.data[0].voice_logo
						this.voice_name = res.data[0].voice_name
						this.voice_lang = res.data[0].language
						this.voice_url = res.data[0].speech_url
						if (this.userList.length > 0 && this.h_code != '') {
							this.userList.forEach((item, index) => {
								if (item.voice_code == this.voice_code) {
									this.userActive = index
								}
							})
						}
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败！')
				})
			},

			play(url) {
				// this.stop()
				this.playShow = true
				let path = global.baseImg + '/' + url
				this.innerAudioContext.src = path;
				this.innerAudioContext.play();
			},
			clonePlay(url) {
				this.playShow = true;
				this.innerAudioContext.src = global.baseImg + '/' + url;
				this.innerAudioContext.play();
			},

			//原生停止
			stop() {
				this.innerAudioContext.stop();
				this.playShow = false
				// this.isPlay = false
				// console.log('停止播放')
			},

			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},

			toChange() {
				this.voiceShow = true
				// uni.navigateTo({
				// 	url: '/childCont/speech/speech_change'
				// })
			},
			engineChange(index, code) {
				console.log(index, code);
				if (index == 3) {
					this.$api.msg('开发中')
					return
				}
this.active=index
				if (index == 0) {
					this.hashrate = 31.5
					this.intonation = 0
					this.into_min = 0
					this.into_max = 0
					this.speed = 1
					this.speed_min = 0.25
					this.speed_max = 4
				} else if (index == 1) {
					this.hashrate = 63
					this.intonation = 0
					this.into_min = 0
					this.into_max = 0
					this.speed = 1
					this.speed_min = 0.25
					this.speed_max = 4
				} else if (index == 2) {
					this.hashrate = 30
					this.intonation = 5
					this.into_min = 0
					this.into_max = 15
					this.speed = 5
					this.speed_min = 0
					this.speed_max = 15
				} else if (index == 3) {
					this.hashrate = 45
					this.intonation = 50
					this.into_min = 0
					this.into_max = 100
					this.speed = 0
					this.speed_min = 100
					this.speed_max = 100
				} else if (index == 4) {
					this.hashrate = 33
					this.intonation = 0
					this.into_min = -500
					this.into_max = 500
					this.speed = 0
					this.speed_min = -500
					this.speed_max = 500
				}
				this.getSpeechVoice(code)
			},

			userClick(index) {
				this.userActive = index
			},

			closeVoice() {
				this.voiceShow = false
				this.stop()
			},
			selectVoice() {
				this.userImg = this.userList[this.userActive].voice_logo
				this.voice_name = this.userList[this.userActive].voice_name
				this.voice_lang = this.userList[this.userActive].language
				this.voice_url = this.userList[this.userActive].speech_url
				this.voiceShow = false
			},

			todialogue() {
				if (this.content == '') {
					return this.$api.msg('请填写需要转换的文本')
				}
				if (this.content.trim().length > 4096 && this.active < 2) {
					return this.$api.msg('普通版和高级版最多可输入4096个字符')
				}
				let that = this;
				console.log(this.engineList[this.active], 5589)
				let val = {
					'engine_code': this.engineList[this.active].engine_code,
					'voice_code': this.userList[this.userActive].voice_code,
					'content': this.content,
					'speech_rate': this.speed,
					'pitch_rate': this.intonation,
					"action_type":2
					
				}
				uni.showLoading({
					title: '合成中'
				});
				goTextSpeech(val).then(res => {
					if (res.code == 20000) {
						let datas = {
							"h_code": res.data.h_code,
						};
						let request_count = 0;
						that.speech_time = setInterval(() => {
							if (request_count < 51) { // 最多轮询50次
								getSpeechResult(datas).then(val => {
									if (val.code == 20000) {
										request_count += 1;
										if (val.data.h_status == 2) {
											that.speech_voice = val.data.speech_url;
											uni.hideLoading()
											that.$api.msg('合成成功')

											// console.log(that.speech_voice, 996)
											that.$forceUpdate()

											clearInterval(that.speech_time);
										} else if (val.data.h_status == 3) {
											that.$api.msg('合成失败')
											uni.hideLoading()
											clearInterval(that.speech_time);
										}

									} else {
										that.$api.msg(res.msg)
										uni.hideLoading()
										clearInterval(that.speech_time);
									}
								})
							} else {
								uni.hideLoading()
								clearInterval(that.speech_time);
								that.$api.msg('等待时间过长，请稍后前往历史记录查看')
							}


						}, 2000)
					} else {
						that.$api.msg(res.msg)
						clearInterval(that.speech_time);
					}
				}).catch(err => {
					that.$api.msg('获取失败！')
				})
			},

			saveShare(url) {
				// uni.showLoading({
				// 	title: '下载中'
				// });
				console.log(url, '我是下载URL');
				let that = this;
				uni.downloadFile({
					url: global.baseImg + '/' + url, //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
					success: (data) => {
						if (data.statusCode === 200) {
							wx.shareFileMessage({
								filePath: data.tempFilePath,
								showMenu: true, //关键点
								success: (res) => {
									//提示保存成功
									console.log('成功了')

									// uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											title: '分享成功',
											duration: 2000
										})
									}, 500);
								},
								fail: (res) => {
									//失败关闭提示信息！！！
									// uni.hideLoading();
									setTimeout(function() {
										uni.showToast({
											icon: 'none',
											title: '分享失败',
											duration: 2000
										})
									}, 500);

									console.log("分享失败", res);
								},
								complete: function(res) {
									//隐藏提示
									// uni.hideLoading();
									// uni.showToast({
									// 	icon: 'none',
									// 	title: '下载失败',
									// 	duration: 2000
									// })
								}
							})
						}
					},
					fail: (err) => {
						console.log(err, 'err')
						uni.showToast({
							icon: 'none',
							mask: true,
							title: '失败请重新下载',
						});
					},
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	#chat {
		width: 100%;
		height: 100vh;
		padding: 30rpx;
		box-sizing: border-box;

		.chat-top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			margin-bottom: 20rpx;

			.check-on {
				background-color: rgb(22, 132, 252);
				color: white;
			}

			view {
				width: 30%;
				text-align: center;
				padding: 15rpx 0rpx;
				border: 1px solid rgb(22, 132, 252);
				color: rgb(22, 132, 252);
			}

			view:first-child {
				border-radius: 8rpx 0rpx 0rpx 8rpx;
			}

			view:last-child {
				border-radius: 0 8rpx 8rpx 0;
			}
		}

		.chat-created {
			width: 100%;
			height: calc(90% - 70rpx - 60rpx);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			>view:nth-child(2) {
				margin: 24rpx 0rpx;
			}

			>view:last-child {
				color: #FFF;
				padding: 20rpx 54rpx;
				background-color: rgb(64, 149, 229);
				border-radius: 12rpx;
			}
		}

		.customized-audio {
			width: 100%;

			.created-audio {
				width: 100%;
				margin-bottom: 30rpx;

				.title {
					margin: 30rpx 0rpx;
				}

				.created-box {
					width: 100%;
					padding: 54rpx;
					box-sizing: border-box;
					border: 1px solid #999;
					border-radius: 10rpx;
					display: flex;
					align-items: center;

					>view:last-child {
						margin-left: 40rpx;
					}
				}
			}

			.audio-list {
				width: 100%;
				padding-bottom: 100rpx;

				.title {
					margin-bottom: 20rpx;
				}

				.list {
					width: 100%;

					.audio-box {
						width: 100%;
						padding: 30rpx;
						box-sizing: border-box;
						border: 1px solid #999;
						border-radius: 8rpx;
						margin-bottom: 40rpx;

						>view {
							display: flex;
							justify-content: space-between;
							align-items: center;
							flex-wrap: wrap;
							margin-bottom: 30rpx;
						}

						>view:nth-child(1) {}

						>view:nth-child(2) {}

						>view:nth-child(3) {
							margin: 0rpx;

							>view {
								border: 1px solid rgb(95, 144, 255);
								padding: 10rpx 25rpx;
								border-radius: 10rpx;
								color: rgb(95, 144, 255);
							}
						}

					}
				}
			}
		}

		.chat-audio {
			width: 100%;
			background-color: #fff;
			margin-bottom: 117rpx;

			.main {
				padding: 32upx;
				background-color: #fff;
				height: 105vh;
				margin-bottom: 117rpx;

				.main_title {
					margin-bottom: 34upx;


					.top {
						display: flex;
						align-items: center;

						.left {
							width: 3px;
							height: 18px;
							background: #1F64FF;
						}

						.middle {
							color: #393E45;
							font-size: 32upx;
							font-weight: 600;
							margin: 0 20upx 0 16upx;
						}

						image {
							width: 32upx;
							height: 32upx;
						}
					}

					.right {
						color: #1F64FF;
						font-size: 26upx;
					}
				}

			}

			.item {
				color: #333;
				text-align: center;
				font-size: 28rpx;
				font-weight: 500;
				border-radius: 8rpx;
				background: #F6F6F6;
				margin-right: 20rpx;
				padding: 11rpx 17rpx;
				white-space: nowrap;
				width: 22%;
			}

			.user {
				.info {
					display: flex;
					align-items: center;
					padding: 36upx 40upx;

					.userBtn {
						text-align: center;

						image {
							width: 48upx;
							height: 48upx;
						}

						.userContent {
							color: #000;
							font-size: 28upx;
						}
					}
				}


			}

			.bottom {
				position: fixed;
				width: 92%;
				bottom: 100rpx;
				left: 50%;
				transform: translate(-50%, 0%);
				background-color: #FFF;
				// padding: 10upx 40upx;
				text-align: center;
				z-index: 99;
			}

			.progress {
				display: flex;
				align-items: flex-end;

				.pro {
					flex: 1;
				}

				.img_r {
					padding-bottom: 30upx;
				}
			}

			.pop_cont {
				padding: 25upx;
				height: 55vh;
				overflow: scroll;
				padding-bottom: 90upx;

				.pop_title {
					font-size: 32upx;
					color: #333;
					line-height: 60upx;
					text-align: center;
				}

				.userList {
					display: flex;
					// padding: 0 32rpx;
					flex-wrap: wrap;
					gap: 5rpx;

					.user_item {
						width: 164rpx;
						height: 204rpx;
						border-radius: 8rpx;
						border: 2rpx solid #ECEFF2;
						background: #FFF;
						text-align: center;
						margin-bottom: 20rpx;

						image {
							width: 96rpx;
							height: 96rpx;
							margin-top: 20rpx;
						}

						.user_name {
							color: #333;
							font-size: 24rpx;
							font-weight: 500;
						}

						.user_b {
							color: #1F64FF;
							font-size: 22rpx;
						}
					}
				}
			}

			.pop_voice {
				padding: 30upx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.pop_img {
					width: 300upx;
					height: 300upx;
				}

				.pop_stop {
					color: #fff;
					font-size: 30upx;
					font-weight: 400;
					line-height: 150%;
					width: 70%;
					background: #1F64FF;
					padding: 15upx 0upx;
					border-radius: 8upx;
					margin-top: 30upx;
					text-align: center;
				}
			}
		}
	}

	.list_ul {
		margin-bottom: 30upx;
		width: calc(100%);
	}

	.ul_style {
		display: flex;
		flex-direction: column;
		padding: 15upx 6upx;
		width: calc(107%);
	}

	.li_style {
		display: flex;
		align-items: center;
		box-shadow: 0upx 0upx 10upx rgba(0, 0, 0, 0.14);
		border-radius: 10upx;
		padding: 25upx;
		width: calc(100% - 50upx);
		background: #fff;

		.ul_right {
			flex: 1;
		}

		.ul_img {
			padding: 10upx;

			.avatar_img {
				width: 80upx;
				height: 80upx;
				border-radius: 8upx;
			}
		}
	}

	.li_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 18upx;
	}

	.top_l {
		font-weight: 500;
		font-size: 30upx;
		line-height: 42upx;
		color: #000;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.top_r {
		font-weight: 400;
		font-size: 24upx;
		line-height: 30upx;
		color: #6E7480;
	}

	.li_btn {
		font-weight: 400;
		font-size: 28upx;
		line-height: 35upx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.btn_l {
			color: #A4A4A4;
			font-size: 28upx;
			font-weight: 400;
			line-height: 150%;
			padding: 5upx 0upx;
			line-height: 48upx;
		}

		.btn_r {
			color: #000;
			font-size: 28upx;
			font-weight: 400;
			line-height: 150%;
			padding: 5upx 0upx;
			line-height: 48upx;
		}
	}

	.on_order {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50vh;
		width: 100vw;
	}

	.order_img {
		width: 450upx;
		height: 450upx;
	}

	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 100upx;
		line-height: 100upx;
		width: 100vw;
		color: #C0C4CC;
	}

	.li_edit {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 10upx;

		.edit_l {
			padding: 10upx 20upx;
			border-radius: 8upx;
			border: 1upx solid #A4A4A4;
			color: #A4A4A4;
			text-align: center;
			font-size: 26upx;
			font-style: normal;
			font-weight: 500;
			margin-right: 15upx;
		}

		.edit_r {
			padding: 10upx 20upx;
			border-radius: 8upx;
			background: #1F64FF;
			color: #fff;
			text-align: center;
			font-size: 26upx;
			font-style: normal;
			font-weight: 500;
		}
	}

	.pop_voice {
		padding: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.pop_img {
			width: 300upx;
			height: 300upx;
		}

		.pop_stop {
			color: #fff;
			font-size: 30upx;
			font-weight: 400;
			line-height: 150%;
			width: 70%;
			background: #1F64FF;
			padding: 15upx 0upx;
			border-radius: 8upx;
			margin-top: 30upx;
			text-align: center;
		}
	}
</style>