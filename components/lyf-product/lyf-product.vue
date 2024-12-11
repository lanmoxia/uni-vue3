<template>
	<view class="product-wrapper">
		<view class="pro-title">
			<text class="left-text">Exclusive Offer</text>
			<text class="right-text">See all</text>
		</view>
		<scroll-view class="pro-scroll-view" scroll-x="true">
			<view class="scroll-view-items" v-for="(item,index) in 8" :key="index">
				<lyf-product-item></lyf-product-item>
			</view>
		</scroll-view>

	</view>
</template>

<style lang="scss" scoped>
	.product-wrapper {
		margin-bottom: 53rpx;

		.pro-title {
			@include my-flex-set(space-between, center);

			.left-text {
				font-size: 43rpx;
				line-height: 59rpx;
				color: rgba(24, 23, 37, 1);

			}

			.right-text {
				font-size: 28rpx;
				line-height: 39rpx;
				color: rgba(83, 177, 117, 1);
			}
		}

		.pro-scroll-view {
			white-space: nowrap;

			.scroll-view-items {
				display: inline-block;
			}
		}

	}
</style>