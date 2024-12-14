<script setup>

</script>

<template>
	<view class="home-wrapper">
		<!-- 占位 -->
		<!-- #ifdef -->
		<view style="height: 44px;"></view>
		<!-- #endif -->
		<!-- 头部 -->
		<view class="heard">
			<!-- logo -->
			<view class="logo">
				<image src="../../common/icons/logo.svg" mode="widthFix" />
			</view>
			<!-- 地理位置 -->
			<view class="geography">
				<image src="../../common/icons/geography.svg" />
				<text class="title">Dhaka, Banassre</text>
			</view>
		</view>
		<view class="container">
			<!-- 搜索框 -->
			<view class="search-bar">
				<lyf-search-bar :disabled="disabled"></lyf-search-bar>
			</view>
			<!-- 轮播海报 -->
			<view class="banner">
				<lyf-banner></lyf-banner>
			</view>
			<!-- 商品分类 -->
			<view class="category">
				<view class="exclusive-offer">
					<lyf-product></lyf-product>
				</view>
				<view class="best-selling">
					<lyf-product :categoryName="categoryName"></lyf-product>
				</view>
				<view class="groceries">
					<lyf-product-expand></lyf-product-expand>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const disabled = ref(true)
	const categoryName = ref('Best Selling')
</script>

<style lang="scss" scoped>
	.home-wrapper {
		>.container {
			padding: 0 43rpx;

			.category {}

			.banner {
				margin: 36rpx 0 54rpx 0;
			}

			.search-bar {}
		}
	}

	.heard {
		@include my-flex-set;
		flex-direction: column;

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

		.logo {
			width: 47rpx;
			height: 55rpx;
			margin: 13rpx 0 13rpx 0;

			>image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>