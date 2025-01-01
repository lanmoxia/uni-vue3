<template>
	<view class="stepper-price">
		<up-number-box v-model="stepperValue">
			 <template #minus>
				 <view class="minus">
					 <image src="../../common/icons/minus.svg" mode=""></image>
				 </view>
			 </template>
			 <template #input>
					<text class="input-number">{{stepperValue}}</text>
			 </template>
			 <template #plus>
					<view class="plus">
						<image src="../../common/icons/plus.svg" mode=""></image>
					</view>
			 </template>
			</up-number-box>
		<text class="price">$4.99</text>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	const props = defineProps({
		stepperValue: {
			type: Number,
			default: 0
		},
		min: {
			type: [String,Number],
			default: 0
		},
		max: {
			type: [String,Number],
			default: 999
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disabledInput: {
			type: Boolean,
			default: true
		}
	})
	const stepperValue = ref(props.stepperValue)
</script>

<style lang="scss" scoped>
	.stepper-price {
		@include my-flex-set(space-between,center);
		.minus{
			width: 31rpx;
			height: 5rpx;
			@include my-flex-set;
			>image {
				width: 100%;
				height: 100%;
			}
		}
		.input-number {
			@include my-flex-set;
			width: 82rpx;
			height: 82rpx;
			border-radius: 30rpx;
			border: 1.81px solid #E2E2E2FF;
			margin: 0 36rpx;					
		}
		.plus {
			@include my-flex-set;
			width: 31rpx;
			height: 31rpx;
			>image {
				width: 100%;
				height: 100%;
			}
		}
		.price{
			font-size: 43rpx;
			color: rgba(24, 23, 37, 1);
		}
	}

</style>