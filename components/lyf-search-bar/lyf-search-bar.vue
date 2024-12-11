<template>
	<view class="search-wrapper">
		<view class="container">
			<image src="../../common/icons/explore.svg" />
			<text>Search Store</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.search-wrapper {
		height: 93rpx;
		border-radius: 27rpx;
		background: #F2F3F2FF;
		border: 1px solid transparent;
		padding-left: 27rpx;

		@include my-flex-set(flex-start, center);

		>.container {
			height: 35rpx;
			@include my-flex-set(center, baseline);

			>image {
				width: 33rpx;
				height: 33rpx;
			}

			>text {
				padding-left: 8rpx;
				font-size: 25rpx;
				line-height: 25rpx;
				color: rgba(124, 124, 124, 1);
			}
		}
	}
</style>