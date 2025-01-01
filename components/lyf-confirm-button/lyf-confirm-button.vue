<template>
	<view class="confirm-button-wripper">
		<button class="inner-button" :class="customButtonClass">{{buttonText}}</button>
	</view>
</template>

<script setup>
	const props = defineProps({
		buttonText: {
			type: String,
			default: "Add To Basket"
		},
		customButtonClass: {
			type: String,
			default: ""
		}
	})
</script>

<style lang="scss" scoped>
	.confirm-button-wripper {
		padding: 0 54rpx;
		.inner-button {
			background-color: #53B175FF;
			color: #FFF9FFFF;
			font-size: 33rpx;
			border: none;
			border-radius: 30rpx;
			height: 121rpx;
			@include my-flex-set;	
		}
	}
</style>