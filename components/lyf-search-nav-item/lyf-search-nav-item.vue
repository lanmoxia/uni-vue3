<template>
	<view class="search-nav-wripper">
		<view class="nav-picure">
			<image src="@/common/images/nav/nav-picure.png" mode="widthFix"></image>
		</view>
		<text class="nav-title">Frash Fruits& Vegetable</text>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.search-nav-wripper {
		@include my-flex-set;
		flex-direction: column;
		width: 316rpx;
		height: 343rpx;
		border: 1px solid #53B175B2;
		border-radius: 33rpx;
		background: #53B17519;
		box-shadow: 0px 10rpx 21rpx  rgba(0, 0, 0, 0);
		.nav-picure {
			width: 202rpx;
			height: 136rpx;
			> image {
				width: 100%;
				height: 100%;
			}
		}
		.nav-title {
			text-align: center;
			margin-top: 50rpx;
		}
	}
</style>