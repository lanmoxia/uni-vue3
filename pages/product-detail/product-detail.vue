<script setup>
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
	const goBack = () => {
		uni.navigateBack()
	}
</script>

<template>
	<view class="product-detail">
			
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
			
			<lyf-swipper-layput
				customClass="product-swipper-class"
				:indicatorStyle="indicatorStyle"
				imgMode="aspectFit"
				:swipperHeight="swipperHeight"
				:pictures="pictures" 
				:showIndicator="showIndicator">
			</lyf-swipper-layput>			
			
			<view class="stepper-price">
				<view class="xxx">
					<text class="title">Naturel Red Apple</text>
					<image class="collect" src="@/common/icons/collect.svg" mode="aspectFit"></image>
				</view>
				
				<text class="product-sku">1kg, Price</text>
			</view>
	</view>
</template>



<style lang="scss" scoped>
	.product-detail{
		background: #f3f4f6;
		position: relative;
		.stepper-price{
				.xxx{
					
					.title{
						font-size: 43rpx;
						color: rgba(24, 23, 37, 1);
					}
					.collect{
						width: 41rpx;
						height: 35rpx;
					}
				}

				.sku{}
			}
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
		
		.product-swipper-class :deep(.u-swiper__wrapper__item__wrapper__image), :deep(.u-swiper__wrapper){
			height: 361rpx !important;
		}
	}
</style>
