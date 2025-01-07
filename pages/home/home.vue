<template>
		<up-sticky class="home-sticky" bgColor="#fff">
			<view style="height: 44px"></view>
			<!-- 头部 -->
			<view class="heard">
				<!-- logo -->
				<view class="logo">
					<image src="../../common/icons/logo.svg" mode="aspectFit" />
				</view>
				
				<!-- 地理位置 -->
				<view class="geography">
					<image src="../../common/icons/geography.svg" />
					<text class="title">Dhaka, Banassre</text>
				</view>
				
			</view>
			
		<!-- 	<view class="container"> -->
				<!-- 搜索框 -->
				<view class="search-bar" @click="goSearchPages">
					<lyf-search-bar></lyf-search-bar>
				</view>
		</up-sticky>
		<!-- 轮播海报 -->
		<view class="banner">
			<lyf-swipper-layput :indicatorStyle="indicatorStyle" :pictures="bannerList" showIndicator></lyf-swipper-layput>
		</view>
		<!-- 商品分类 -->
		<view class="category">
			<view class="exclusive-offer">
				<lyf-product></lyf-product>
			</view>
			<view class="best-selling">
				<lyf-product categoryName="Best Selling"></lyf-product>
			</view>
			<view class="groceries">
				<lyf-product-expand></lyf-product-expand>
			</view>
		</view>
</template>

<script setup>
	import {ref} from 'vue'
	
	const goSearchPages = () => {
		uni.reLaunch({
			url: '/pages/explore/explore?isFocus=true'
		})
	}

	const indicatorStyle = {
		left: '295rpx', bottom: '13rpx'
	}
	
	const bannerList = [
		'../../common/images/banner/banner.png',
		'../../common/images/banner/banner.png',
		'../../common/images/banner/banner.png',
	]
</script>

<style lang="scss" scoped>
	
	.home-sticky {
		top: 0 !important;
		padding: 0 43rpx;
		.banner {margin: 36rpx 0 54rpx 0;}
		.heard {
			@include my-flex-set;
			flex-direction: column;
			.logo {
				width: 47rpx;
				height: 55rpx;
				margin: 13rpx 0 13rpx 0;
			
				>image {
					width: 100%;
					height: 100%;
				}
			}
			.geography {
				margin: 14rpx 0 36rpx 0;
				height: 41rpx;
		
				>image {
					width: 27rpx;
					height: 33rpx;
					margin-right: 10rpx;
				}
		
				.title {
					font-size: 32rpx;
					color: rgba(76, 79, 77, 1);
				}
			}
		}
	}

	.banner, .category{
		padding: 0 43rpx;
	}
	.banner {margin: 30rpx 0 54rpx 0 }
</style>