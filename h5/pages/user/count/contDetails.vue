<template>
	<view>
		<view class="box">
			<view class="cont" v-for="item,index in getList" :key="index"  @click="goContDetails(item.activate_type_id)">
				<view class="txt_t">
					<view class="cont_t">{{item.activate_type_id==1?'形象克隆':item.activate_type_id==2?'声音克隆':item.activate_type_id==3?'视频时长':'通用功能'}}</view>
				</view>
				<view class="txt_l">
					<view class="cont_b">卡密兑换码：{{item.activate_code}}</view>
					<view class="cont_b">套餐：{{item.activate_type_id==1?'形象克隆':item.activate_type_id==2?'声音克隆':item.activate_type_id==3?'视频时长':'通用功能'}}1次</view>
					<view class="cont_b">激活时间：{{item.create_time}}</view>
					<view class="cont_b">有效期至：{{item.expired_date}}</view>
				</view>
			</view>
			
		
		</view>
		
	</view>
</template>

<script>
	import {
		getCardChange,
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				getList: []
			};
		},
		onLoad({val}) {
			this.getCardChange(val)
		},
		onShow() {
		},
		methods:{
			getCardChange(val) {
				let data = {
					activate_type_id: val
				}
				getCardChange(data).then(res => {
					if (res.code == 20000) {
						this.getList = res.data.data
					} else {
						this.$api.msg(res.msg)
					}
				}).catch(err => this.$api.msg('获取兑换记录失败'))
			}
		}
	}
</script>

<style lang="less" scoped>
	.cont {
		// display: flex;
		// justify-content: space-between;
		width: 100%;
		// align-items: center;
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

	.txt_t {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
