<template>
	<view >
		<view class="teach" style="background-color: #fff;">导师选择</view>
		<view class="tab_moudel" style="background-color: #fff;">
			<view class="line_moudel">
				<view @longpress="longtap" v-for="(item, index) in swiperList" :key="index"
					:class="[tip == index ? 'active_l_select' : 'l_select']" @click="selectTip(index)">
					{{ item.name }}
				</view>
			</view>
			<!-- <view class="line_search" @click="toSearch">
				<u-icon name="search" color="#666" size="28"></u-icon>
				<text class="search_text">搜索</text>
			</view> -->
		</view>
		<view class="apply_cont">
			<view class="cont_text" style="padding-top: 20rpx;">
				<view class="text_right">
					<scroll-view scroll-y="true" @scrolltolower="scrolltolower">
						<view class="hotWrods">
							<view v-if="promptsList.length > 0" class="hot_cont">
								<view v-for='item,index in promptsList' :key='index'
									style="width: 50%; display: flex; align-items: center; justify-content: center;">
									<view @click="eidtContent(item)" class="box">
										<view class="text">
											<view class="textInfo">
												<image :src="getImgUrl(item.character_avatar)" mode="" class="li_avatar"
													v-if="item.industry_id == '1003'" />
												<view class="li_avatar" style="background: #40DE9F;"
													v-else-if="item.industry_id == '1001'">{{ item.title.slice(0,1) }}
												</view>
												<view class="li_avatar" style="background: #7F48FF;"
													v-else-if="item.industry_id == '1000'">{{ item.title.slice(0,1) }}
												</view>
												<view class="li_avatar" style="background: #FF8E8E;"
													v-else-if="item.industry_id == '1005'">{{ item.title.slice(0,1) }}
												</view>
												<view class="li_avatar" style="background: #FFB833;" v-else>
													{{ item.title.slice(0,1) }}
												</view>
												<view class="li_text">{{item.title}}</view>
											</view>
											<view class="tips">

											</view>
										</view>
										<view class="text_cont" style="display: flex;">
											<text class="text_li" :style="">{{ item.content }}</text>
											<text v-if="item.content.length<=15" style="width: 80rpx;"></text>
										</view>
										<image :src="backImg" mode="" class="back_img"></image>
									</view>
								</view>
							</view>
							<view v-if="promptsList.length == 0" class="hot_cont" style="display: block;">
								<view class="on_order_list">
									暂无相关内容
								</view>
							</view>

							<view class="on_order_list" v-if="loadingType == 1 && promptsList.length > 0">没有更多内容了!
							</view>
						</view>

					</scroll-view>
				</view>
			</view>
		</view>
		<u-picker :show="tapShow" :columns="selectVoice" v-model="voiceIndex" @cancel="tapShow = false"
			@confirm="voiceSubmit"></u-picker>

	</view>
</template>

<script>
	import {
		getModules,
		getQuestions
	} from '@/apis/user.js'
	export default {
		data() {
			return {
				backImg: global.baseImg + '/xcx/9cbaf339-29fe-47d1-9685-0dabe4d5a00d.jpg',
				swiperList: [],
				tip: 0,
				content: {
					contact_qr_code: ''
				},
				isPosition: false,
				tagName: '',
				active: 8,
				tagValue: true,
				tagShow: false,
				questionList: [{
					info_type_name: 'Input',
					is_required: 1,
					title: '主题描述',
					placeholder: '请输入你的需求，我来帮你解答'
				}],
				show: false,
				complete: '',
				tapShow: false,
				selectVoice: [
					['编辑', '删除']
				],
				voiceIndex: '',
				instructName: [],
				promptsList: [],
				show: false,
				loadingType: 0,
				page_no: 1,
				page_count: 15,
				module_id:'',
			};
		},
		onShow() {
			this.getModules()
		},
		methods: {
			// 获取模块集合
			getModules() {
				getModules({
					industry_id: 500620488053382
				}).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							this.swiperList = res.data;
							// console.log(this.applyInfo,4763)
							this.instructName = [];
							this.instructName.push(res.data[0].module_id)
							this.module_id=this.instructName[0]
							// this.tip = 0;
							this.promptsFun()
						} else {
							this.swiperList = res.data;
							this.promptsList = []
						}

					} else {
						this.$api.msg(res.msg)
					}

				})

			},
			promptsFun() {
				this.page_no = 1;
				this.loadingType = 0;
				let data = {
					'industry_id': 500620488053382,
					'module_id': this.module_id,
					'page_index': this.page_no,
					'page_count': this.page_count
				}
				getQuestions(data).then(res => {

					if (res.code == 20000) {
						this.loading = false;
						this.promptsList = res.data
						let total = res.total;
						if (total % this.page_count == 0) {
							this.pageTotal = total / this.page_count
						} else {
							this.pageTotal = parseInt(total / this.page_count) + 1
						}
						if (this.pageTotal == 1) {
							this.loadingType = 1;
						}

						this.$forceUpdate()
					} else {
						this.$api.msg(res.msg)
						this.loading = false;
					}

				}).catch(err => {
					this.loading = false;
					// this.$api.msg('');
				})
			},

			selectTip(val) {
				this.tip = val;
				this.instructName = []
				this.instructName.push(this.swiperList[val].module_id);
				this.module_id=this.instructName[0]
				this.promptsFun()
			},
			
			longtap() {
				this.tapShow = true
			},
			voiceSubmit(e) {
				this.voiceIndex = e.value[0].voice_code
				this.voiceText = e.value[0].voice_name
				this.voiceShow = false
			},
			//编辑内容
			eidtContent(item) {
					uni.navigateTo({
						url: "/childCont/apply/apply_ask?item=" + JSON.stringify(item)
					})
			
			},
		}
	}
</script>

<style lang="less" scoped>
	.hot_cont {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.box {
		background: #FFFFFF;
		// box-shadow: 0px 3px 8px rgba(51, 51, 51, 0.1);					
		box-shadow: 0px 2.23993px 7.83975px rgba(51, 51, 51, 0.1);
		border-radius: 8px;
		margin-bottom: 10px;
		width: 90%;
		padding: 12upx;
		position: relative;

		// line-height: 40px;
		.text {
			display: flex;
			align-items: center;
			justify-content: space-between;

		}

		.text_cont {
			padding: 10upx;
			max-height: 140upx;

			.text_li {
				font-size: 26upx;
				color: #888;
				line-height: 40upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 控制多行的行数
				-webkit-box-orient: vertical;
			}
		}

		.textInfo {
			display: flex;
			align-items: center;

			.li_avatar {
				width: 80upx;
				height: 80upx;
				border-radius: 7upx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.li_text {
				max-width: 200upx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				display: inline-block;
				color: #333;
				font-size: 15px;
				font-weight: 550;
				padding-left: 10px;
			}

		}

		.tips {

			display: flex;
			// background: #F2FAFF;
			border-radius: 0px 8px;
			width: 108px;
			height: 33px;
			font-size: 13px;
			color: #1F64FF;
			line-height: 26px;
			text-align: center;
			justify-content: center;
			align-items: center;

			.content {
				margin-left: 5px;
			}
		}
	}

	.back_img {
		width: 110upx;
		height: 110upx;
		position: absolute;
		top: 0upx;
		right: 0upx;
	}

	.loading {
		display: flex;
		justify-content: center;
		margin-top: 100upx;
	}

	.load_text {
		font-style: normal;
		font-weight: 400;
		font-size: 30upx;
		line-height: 150%;
		color: #AAB2C8;
	}

	.load_img {
		width: 40upx;
		height: 40upx;
		opacity: 0.5;
	}

	.teach {
		font-size: 32rpx;
		color: #333;
		background-color: #fff;
		padding: 20upx;
	}

	.tab_moudel {
		background: #fff;
		height: 80upx;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		.line_moudel {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			overflow-x: scroll;
			white-space: nowrap;
			width: 100%;
			padding: 0 20upx;
			margin-right: 40upx;

			.l_select {
				background: #F5F6F7;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 400;
				font-size: 26upx;
				line-height: 30upx;
				color: #333;
				padding: 15upx 24upx;
				border-radius: 8upx;
				margin-right: 15upx;
			}

			.active_l_select {
				background: #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 400;
				font-size: 26upx;
				line-height: 30upx;
				color: #fff;
				padding: 15upx 24upx;
				border-radius: 8upx;
				margin-right: 15upx;
			}
		}

		.line_search {
			display: flex;
			align-items: center;
			padding: 15upx 10upx;
			background: #fff;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 10;
			opacity: 0.9;

			.search_text {
				color: #666;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 30upx;
				padding-left: 15upx;
			}
		}
	}

	.send {
		padding: 25upx 30upx;
		// background: #fff;
		display: flex;
		align-items: center;
		flex-direction: column;

		// margin-bottom: 20upx;
		.type_text {
			color: #333;
			font-size: 24upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
		}

		.chat_type {
			display: flex;
			align-items: flex-start;
			// justify-content: space-around;
			// flex-wrap: wrap;
			width: 100%;

			.type_r {
				display: flex;
				align-items: center;
				// justify-content: space-around;
				flex-wrap: wrap;
				flex: 1;
			}

			.tabs {
				width: 22%;
				background: #E4E7ED;
				border-radius: 6upx;
				padding: 16upx 0;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				line-height: 150%;
				color: #333;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 10upx 1.5%;
			}

			.active_tabs {
				width: 22%;
				background: rgba(31, 100, 255, 0.15);
				;
				border-radius: 6upx;
				padding: 16upx 0;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				line-height: 150%;
				color: #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 10upx 1.5%;
			}
		}

		.chat_text {
			width: 100%;
			padding: 20upx 0;

			/deep/.u-textarea {
				padding: 18upx;
				min-height: 100upx;
				max-height: 150upx;
				overflow-y: auto;
			}
		}

		.chat_btn {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #1F64FF;
			border-radius: 12upx;
			line-height: 90upx;
			font-style: normal;
			font-weight: 500;
			font-size: 34upx;
			color: #fff;
		}

		.chat_btn:active {
			opacity: 0.5;
		}
	}


	.asw_cont {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 40upx;
		padding: 0 30upx;

		.asw_title {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			.title_text {
				color: #333;
				font-size: 30upx;
				font-weight: 500;
				line-height: 150%;
				flex: 1;
				text-align: center;
			}

			.title_right {
				flex: 1;
				color: #1F64FF;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				text-align: right;
			}

		}

		.asw_cont {
			color: #333;
			font-size: 30upx;
			font-weight: 500;
			line-height: 150%;
		}

		.asw_text {
			padding: 15upx;
			background: #fff;
			border-radius: 10upx;
			min-height: 100upx;
			width: 100%;
			margin-top: 30upx;
		}
	}

	.loadingTalk {

		.flexs {
			display: flex;
			align-items: center;
			background: #fff;
			padding: 10px;
			color: #AAB2C8;
			font-size: 12px;
			font-weight: 400;
			display: inline-block;
			border-radius: 5px;
		}
	}

	.tips {
		word-break: break-all;
		color: #333;

	}

	.edit {
		word-break: break-all;
		color: #AAB2C8;

		/deep/.u-row {
			font-weight: 400;
			font-size: 14px;
			color: #AAB2C8;
			margin-bottom: 0;
			margin-top: 10px;
		}

	}

	.loadingImages {
		width: 16px;
		height: 16px;
		opacity: 0.5;
		margin-right: 5px;
	}

	.opaImg {
		width: 20px;
		height: 20px;
	}

	.isPosition {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 99;
		background-color: #fff;
	}

	.modal {
		padding: 0 10px;

		.edit {
			font-weight: 500;
			font-size: 18px;
			line-height: 26px;

			color: #303133;
			position: relative;

			.changes {

				position: absolute;
				height: 5px;
				width: 70px;
				bottom: 3px;
				background: linear-gradient(to right, rgba(31, 100, 255, 1), rgba(31, 100, 255, 0.5), rgba(255, 255, 255, 0.5));
				border-radius: 5px;
			}

		}

		.content {
			width: 272px;
			height: 153px;
			background: #F5F6FA;
			border-radius: 8px;
			padding: 20px;
			font-weight: 400;
			// font-size: 13px;
			margin-top: 18px;

			/deep/.u-textarea {
				padding: 0;
				background-color: #F5F6FA;
			}
		}
	}


	.chat_qs {
		background: #fff;
		padding: 20upx;
		border-radius: 8upx;
		margin-bottom: 20upx;
		width: 100%;
	}

	.chat_text {
		width: 100%;
		padding: 20upx 0;

		/deep/.u-textarea {
			padding: 18upx;
			min-height: 100upx;
			max-height: 150upx;
			overflow-y: auto;
		}
	}

	.chat_texts {
		padding: 20upx 0;
		display: flex;
		flex-direction: column;
	}

	.text_cont {
		display: flex;
		align-items: center;
		margin-bottom: 10upx;

		.text_l {
			color: #FF0101;
			font-size: 22upx;
			font-style: normal;
			font-weight: 400;
			line-height: 26upx;
			margin-right: 5upx;
		}

		.text_r {
			color: #333;
			text-align: center;
			font-size: 24upx;
			font-style: normal;
			font-weight: 400;
			line-height: 26upx;
		}
	}

	.qs_cont {
		padding: 20upx;
		// background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.cont_top {
			display: flex;
			align-items: flex-end;

			.top_mid {
				font-style: normal;
				font-weight: 600;
				font-size: 30upx;
				line-height: 150%;
				color: #333;
			}

			.top_right {
				font-style: normal;
				font-weight: 400;
				font-size: 24upx;
				line-height: 150%;
				color: #999;
				padding-left: 10upx;
			}
		}

		.cont_right {
			display: flex;
			align-items: center;

			.right_text {
				color: #1F64FF;
				font-size: 24upx;
				font-weight: 400;
				line-height: 150%;
			}

			.hot_img {
				width: 36upx;
				height: 36upx;
				margin: 0 15upx;
			}
		}
	}

	.qs {
		padding: 0 20upx;
		// margin-top: 20upx;

		.hotWrods {
			background: #fff;
			border-radius: 8px;
			box-shadow: 0px 2.23993px 7.83975px rgba(51, 51, 51, 0.1);
			margin-bottom: 10px;
			padding: 25upx 22upx;
			height: auto;

			.box {
				// height: 80px;
				background: #FFFFFF;
				border-bottom: 1upx solid #E6E9ED;

				.text {
					display: flex;
					align-items: center;
					justify-content: space-between;

				}

				.text_cont {
					padding: 10upx;
					height: 100upx;
					overflow: hidden;

					.text_li {
						font-size: 26upx;
						color: #888;
						line-height: 40upx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2; // 控制多行的行数
						-webkit-box-orient: vertical;
					}
				}

				.textInfo {
					max-width: 80%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					display: inline-block;
					color: #333;
					font-size: 15px;
					font-weight: 550;
					padding-left: 10px;
				}

				.tips {

					display: flex;
					background: #F2FAFF;
					border-radius: 0px 8px;
					width: 108px;
					height: 33px;
					font-size: 13px;
					color: #1F64FF;
					line-height: 26px;
					text-align: center;
					justify-content: center;
					align-items: center;

					.content {
						margin-left: 5px;
					}
				}
			}
		}

		.loading {
			display: flex;
			justify-content: center;
			background: #fff;
			padding: 20upx 0;
		}

		.load_text {
			font-style: normal;
			font-weight: 400;
			font-size: 30upx;
			line-height: 150%;
			color: #AAB2C8;
		}

		.load_img {
			width: 40upx;
			height: 40upx;
			opacity: 0.5;
		}
	}

	.u-page__tag-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 10upx 0 0;
	}

	.lists {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20upx;
		background: #fff;
		border-radius: 8upx;
		border: 1upx solid #dadbde;
		margin-bottom: 25upx;

		.txt {
			font-size: 26upx;
			margin-left: 20upx;
			flex: 1;
		}

		.right_img {
			width: 24upx;
			height: 24upx;
			margin-right: 25upx;
		}
	}

	.key_cont {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		/* padding: 0upx 0 0 0; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-weight: 500;
		font-size: 32upx;
		line-height: 48upx;
		color: #333;
		margin-bottom: 32upx;
	}

	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 70upx;
		line-height: 70upx;
		color: #C0C4CC;
		margin-bottom: 40upx;
	}
</style>