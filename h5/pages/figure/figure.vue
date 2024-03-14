<template>
	<view id="chat">
		<!-- 数字人顶部内容 -->
		<view class="chat-top">
			<view :class="live_type == 1?'check-on':''" @click="getList(1)">定制数字人</view>
			<view :class="live_type == 0?'check-on':''" @click="getList(0)">真人数字人</view>
		</view>
		<!-- 主内容/数字人列表 -->
		<view class="chat-list">
			<view class="chat-list-title">当前可创建次数：{{number?number:'0'}}</view>
			<scroll-view class="list_ul" scroll-y="true">
				<view class="ul_li">
					<view class="ul_style" @click="gocreat()">
						<view class="li_style">
							<view class="li_wz">
								<view class="created-box">
									<u-icon name="plus" size="35"></u-icon>
								</view>
							</view>
							<view class="li_text" style="opacity: 0;">空白符号</view>
						</view>
					</view>
					<view class="ul_style" v-for="(item, index) in infoList" :key="index" v-if="infoList.length>0">
						<view class="li_style" @click="getCodeNum(3,item)">
							<view class="li_wz">
								<image class="li_img" :src="getImgUrl(item.video_cover_url)" mode="aspectFit"></image>
							</view>
							<view class="li_text">{{ item.live_name }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 没数据时 -->
		<view class="chat-created" v-if="false">
			<view>你还没有定制的数字人</view>
			<view>当前可创建次数：{{number?number:'0'}}</view>
			<view>我要定制</view>
		</view>
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
		getHumanList,
		cardChange,
	} from "@/apis/user.js"
	import {
		getActivateResidueNumber
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				live_type: '',
				infoList: [],
				infoDetail: '',
				number: 0,
				cardName: '',
				show: false,
				isval: false
			}
		},

		onShow() {
			this.getRecord(1)
			this.getCodeNum(1)
		},

		methods: {
			gocreat() {
				this.isval = true
				this.getCodeNum(1)
			},
			// 卡密次数
			getCodeNum(val, item) {

				let data = {
					activate_type_id: val
				}
				getActivateResidueNumber(data).then(res => {
					console.log(res.data.number, val, this.isval, 1051);
					if (res.code == 20000) {
						if (val == 1&& !this.isval) {
							this.number = res.data.number
						} else if (res.data[1] > 0 && val == 1 && this.isval) {
							this.isval=false
							uni.navigateTo({
								url: '/pages/figure/figure_video',
							})
						} else if (res.data[3] > 0 && val == 3) {
							uni.navigateTo({
								url: '/pages/figure/video?info=' + JSON.stringify(item),
							})
						} else {
							let txt
							if (val == 1 && this.isval) {
								txt = '您的形象克隆次数已消耗完毕！\n请兑换卡密以补充次数'
							} else {
								txt = '您的视频时长已消耗完毕！\n请兑换卡密以补充可用时长'
							}
							uni.showModal({
								content: txt,
								confirmText: '兑换卡密',
								success: (res) => {
									if (res.confirm) {
										this.show = true
									}
								}
							})
						}
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
						// this.getInfo()
					} else {
						this.isClick = true;
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.isClick = true;
					this.$api.msg('兑换失败');
				})
			},

			closeKey() {
				this.cardName = ''
				this.show = false
			},
			getImgUrl(url) {
				return global.baseImg + '/' + url;
			},
			getList(tip) {
				this.select_type = tip

				this.getRecord(tip)
			},


			// 获取数字人列表
			getRecord(type) {
				this.live_type = type
				let val = {
					live_type: this.live_type
				}
				getHumanList(val).then(res => {
					if (res.code == 20000) {
						this.infoList = res.data.data.filter(item => item.make_status != 1)
						if (this.infoDetail == '') {
							this.infoDetail = this.infoList[0]
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取录音列表失败');
				})

			},

		}
	}
</script>

<style lang="less" scoped>
	.list_ul {
		width: 100%;

		.ul_li {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
		}
	}

	.ul_style {
		width: 50%;
	}

	.li_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 95%;

		.li_wz {
			position: relative;
			// padding: 10upx;
		}

		.li_img {
			width: 320upx;
			height: 320upx;
			border-radius: 30upx;
			border: 1px solid #E9E9E9;
			background: #FFF;
		}

		.li_text {
			color: #000;
			font-size: 22upx;
			font-style: normal;
			font-weight: 400;
			line-height: 50upx;
		}

	}



	.li_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 18upx;
	}

	.top_l {
		ont-weight: 400;
		font-size: 28upx;
		line-height: 42upx;
		color: #333;
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.top_r {
		ont-weight: 400;
		font-size: 24upx;
		line-height: 30upx;
		color: #6E7480;
		;
	}

	.li_btn {
		font-weight: 400;
		font-size: 24upx;
		line-height: 35upx;
		color: #6E7480;
	}

	#chat {
		width: 100vw;
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

		.created-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 320upx;
			height: 320upx;
			border-radius: 30upx;
			border: 1px solid #E9E9E9;
		}

		.chat-list {
			width: 100%;
			padding-bottom: 100rpx;

			.chat-list-title {
				text-align: center;
				margin-bottom: 20rpx;
			}

			.chat-list-content {
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.chat-box {
					width: 48%;

					>view:first-child {
						width: 100%;
						padding-top: 100%;
						border: 1px solid #999;
						border-radius: 24rpx;
						position: relative;

						image {
							height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
						}
					}

					>view:last-child {
						width: 100%;
						text-align: center;
						margin: 30rpx 0rpx;
					}
				}
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
	}
</style>