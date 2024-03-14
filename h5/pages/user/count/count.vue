<template>
	<view style='padding: 0upx 32upx;'>
		<view class="user_tit">我的权益</view>
		<view class="cont_user">
			<view class="cont_ul">
				<view class="user_icon">
					<view class="icon_list" @click="goDetails">
						<text class="icon_txt">形象克隆</text>
						<text class="icon_title">{{image_num}}次</text>
					</view>
					<view class="icon_list" @click="goDetails">
						<text class="icon_txt">声音克隆</text>
						<text class="icon_title">{{voice_num}}次</text>
					</view>
					<view class="icon_list" @click="goDetails">
						<text class="icon_txt">视频生成</text>
						<text class="icon_title">{{radio_num}}秒</text>
					</view>

				</view>
			</view>
		</view>
		<view class="user_tit">权益明细</view>
		<view class="box">
			<scroll-view scroll-y="true" v-if="consList.length > 0">
				<view class="cont" v-for="item,index in  consList" :key="index">
					<view class="txt_l">
						<view class="cont_t">{{item.activate_type_id==1?'形象克隆':item.activate_type_id==2?'声音克隆':'视频生成'}}
						</view>
						<view class="cont_b">{{item.create_time}}</view>
					</view>
					<view class="cont_t">
						{{item.activate_type_id==1?'-1次形象克隆':item.activate_type_id==2?'-1次声音克隆':'-'+item.usage_number+'s视频生成'}}
					</view>
				</view>
			</scroll-view>
			<view class="on_order" v-else>
				<image class="order_img" :src="backImg"></image>
				<view class="on_order_list">暂无数据...</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		getActivateResidueNumber,
		activateConsume
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				image_num: '',
				voice_num: '',
				radio_num: '',
				consList: [],
				backImg: global.baseImg + '/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg',
			}
		},
		onShow() {
			this.getCodeNum()
			this.activateConsume()
		},
		methods: {
			activateConsume() {
				activateConsume().then(res => {
					if (res.code == 20000) {
						this.consList = res.data.data
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => this.$api.msg('数据获取失败'))
			},
			goDetails() {
				uni.navigateTo({
					url: '/pages/user/count/details'
				})
			},
			// 卡密次数
			getCodeNum() {
				getActivateResidueNumber().then(res => {
					if (res.code == 20000) {
						this.image_num = res.data[1]
						this.voice_num = res.data[2]
						this.radio_num = res.data[3]

					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => {
					this.$api.msg('获取失败')
				})
			},

		}
	}
</script>

<style lang="less" scoped>
	.cont {
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		margin-top: 20rpx;
		padding: 0 32rpx;

		.cont_t {
			color: #333;
			font-size: 28rpx;
			margin-bottom: 10rpx;

		}

		.cont_b {
			color: #999;
			font-size: 24rpx;
			line-height: 200%;
		}
	}

	.user_tit {
		color: #333;
		font-size: 30upx;
		font-style: normal;
		font-weight: 520;
		line-height: 150%;
		// margin-bottom: 15upx;
		margin: 32rpx;
	}

	.cont_user {
		margin-bottom: 16upx;

		.cont_ul {
			padding: 22upx;
			background: #fff;
			border-radius: 14upx;



			.user_icon {
				display: flex;
				// justify-content: space-around;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;

				.icon_list {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 20upx 0 10upx 0;
					width: 33%;

					.icon_txt {
						color: #333;
						font-size: 32upx;
						font-style: normal;
						font-weight: 500;
						line-height: 36upx;
						margin-top: 12upx;
					}

					.icon_title {
						color: #333;
						font-size: 24upx;
						font-style: normal;
						font-weight: 400;
						line-height: 36upx;
						margin-top: 12upx;
					}
				}
			}
		}

	}

	.on_order {
		// display: flex;
		// align-items: center;
		// justify-content: center;
		height: 90vh;
		width: 100vw;
	}

	.order_img {
		width: 450upx;
		height: 450upx;
		margin: 15vh 10vh 0 10vh;
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
</style>