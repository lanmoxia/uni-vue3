<script setup>
	
	import {ref} from 'vue'
	
	// 轮播主图模块
	const showIndicator = true
	const swipperHeight = '584rpx'
	const indicatorStyle = {
		left: '348rpx', bottom: "57rpx"
	}
	const pictures = [
		'../../common/images/product/product.png',
		'../../common/images/product/product.png',
		'../../common/images/product/product.png'
	]
	
	// 产品信息模块
	const stepperValue = ref(0)
	const rateCount = ref(5) 
	const rateVal = ref(5)
	
	const goBack = () => {
		uni.navigateBack()
	}
</script>

<template>
	<view class="product-info">

			<view class="product-header">
				
				<!-- 返回分享图标 -->
				<view class="back-share-icons">
					<image 
						class="go-back" @click="goBack"
						src="@/common/icons/go-back.svg" mode="widthFix">
					</image>
					<image 
						class="share" 
						src="@/common/icons/share.svg" mode="widthFix">
					</image>
				</view>
				
				<!-- 轮播主图 -->
				<lyf-swipper-layput
					customClass="product-swipper-class"
					:indicatorStyle="indicatorStyle"
					imgMode="aspectFit"
					:swipperHeight="swipperHeight"
					:pictures="pictures" 
					:showIndicator="showIndicator">
				</lyf-swipper-layput>	
			</view>
					
			<!-- 产品标题和关注-->
			<view class="product-price-collect">
				
				<view class="title-collect">
					<text class="title">Naturel Red Apple</text>
					<image class="collect" src="@/common/icons/collect.svg" mode="aspectFit"></image>
				</view>
				
				<text class="sku">1kg, Price</text>
			</view>
			
			<!-- 步进器和价格 -->
			<view class="stepper-wripper">
				<lyf-stepper :stepperValue="stepperValue"></lyf-stepper>
			</view>
			
			<!-- 产品详情 -->
			<view class="product-detail">
				<lyf-detail-collapse title="Product Detail">
					<template #collapse-content>
						Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
					</template>
				</lyf-detail-collapse>
			</view>
			
			<!-- 产品营养含量 -->
			<view class="product-nutritions">
				<lyf-detail-collapse title="Nutritions" :showTopLine="false">
					<template #expand-content>
						<button class="btn" size="mini">100g</button>
					</template>
					<template #collapse-content>
						这里是 product-nutritions 折叠内容。
					</template>
				</lyf-detail-collapse>
			</view>
			
			<!-- 产品评价指数 -->
			<view class="product-review">
				<lyf-detail-collapse title="Review" :showBottomLine="false">
					<template #expand-content>
						<u-rate :count="rateCount" v-model="rateVal" readonly ></u-rate>
					</template>
					<template #collapse-content>
						这里是 product-review 折叠内容。
					</template>
				</lyf-detail-collapse>
			</view>
			
			<view class="add-to-basket">
				<lyf-confirm-button></lyf-confirm-button>
			</view>
	</view>
</template>

<style lang="scss" scoped>
	.product-info {
		position: relative;
		
		.product-header{
			background: #f3f4f6;
			
			.back-share-icons {
				width: 100vw;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 10;
				padding: 25rpx 45rpx 50rpx 45rpx;
				@include my-flex-set(space-between,center);
				
				.go-back { 
					width: 18rpx; 
					height: 33rpx;
				}
				.share{
					width: 33rpx;
					height: 33rpx;
				}
			}
			
			.product-swipper-class :deep(.u-swiper__wrapper__item__wrapper__image), 
			:deep(.u-swiper__wrapper){
				height: 361rpx !important;
			}
		}
		.product-price-collect{
			padding: 39rpx 45rpx 88rpx 45rpx;
				.title-collect{		
					@include my-flex-set(space-between, center);
					.title{
						font-size: 43rpx;
						color: rgba(24, 23, 37, 1);
					}
					.collect{
						width: 41rpx;
						height: 35rpx;
					}
				}

				.sku{
					font-size: 28rpx;
					color: #7C7C7CFF;
				}
			}
		
		
		.stepper-wripper{
			padding: 0 45rpx 22rpx 45rpx;
		}
		.product-detail{
			padding: 33rpx 0;
		}
		
		.product-nutritions{
			.btn {
				line-height: 33rpx; 
				text-align: center; 
				width: 61rpx; 
				height: 33rpx; 
				background-color: #EBEBEBFF; 
				color: #7C7C7CFF;
				@include my-flex-set;
				&::after {border: none;}
			}
		}
		
		.product-review{}
		.add-to-basket {padding: 33rpx 0 46rpx 0;}
	}
</style>
