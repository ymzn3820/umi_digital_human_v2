<template>
	<view class="containar">
		<view class="ad_back">
			<image class="banner_img" :src='backImg' />
			<view class="name">{{busList.business_name}}</view>
			<view class="desc">{{busList.business_desc}}</view>
			<image :src="getImgUrl(busList.business_logo)" class="log"></image>
		</view>
		<view class="apply" v-if="busList">
			<view class="qrcode">
				<image :src="getImgUrl(busList.wx_url)"></image>
			</view>
			<view class="info" style="margin-bottom: 24rpx;">
				<view class="info_text">扫码添加客服微信</view>
				<!-- <view class="info_r" @click="copyText(content)">点击复制</view> -->
			</view>
			<view class="info">
				<view class="info_text">客服电话: {{busList.mobile}}
				</view>
				<view class="info_r" @click="call">立即拨打</view>
			</view>
			<view class="info">
				<view class="info_text">地址: {{busList.address}}</view>
				<view class="info_r" @click="copyText(busList.address)">点击复制
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getBusiness
	} from '@/apis/home.js'
	export default {
		data() {
			return {
				backImg: global.baseImg + '/xcx/com/message_center/短视频banner.png',
				content: 'youmikf8',
				qrcode: global.baseImg + '/xcx/com/message_center/serverqrcode.png',
				busList: {
				},
			};
		},
		onShow() {
			this.getBusiness()
		},
		methods: {
			getImgUrl(url) {
				return global.baseImg +'/'+ url
			},
			getBusiness() {
				getBusiness().then(res => {
					if (res.code == 20000) {
						this.busList = res.data
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => this.$api.msg('获取信息失败'))
			},
			copyText(content) {
				wx.setClipboardData({
					data: content, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				})
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: busList.mobile,

					success: function() {
						console.log('拨打电话成功')
					},
					fail: function(err) {
						console.log('拨打电话失败:', err)
					}
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #fff;
	}

	.containar {
		padding: 25upx;
	}

	.ad_back {
		width: 100%;
		height: 280upx;
		position: relative;
		margin-bottom: 20upx;
		position: relative;

		.banner_img {
			width: 100%;
			height: 280upx;
		}

		.name {
			position: absolute;
			left:5%;
			top: 14%;
			font-size: 34rpx;
			color: #FFFFFF;
		}

		.desc {
			position: absolute;
			left:5%;
			top: 35%;
			color: #FFFFDD;
		}

		.log {
			position: absolute;
			right: 5%;
			top: 25%;
			width: 230rpx;
			height: 140rpx;
		}

	}

	.apply {
		margin-top: 40rpx;

		.qrcode {
			text-align: center;
			margin: 40rpx 0 9rpx 0;

			image {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.info {
			display: flex;
			color: #000;
			font-size: 26rpx;
			margin-top: 44rpx;
			justify-content: center;

			.info_r {
				color: #1F64FF;
				margin-left: 20rpx;
			}
		}
	}
</style>