<template>
	<view class="product-item-wrapper">
		<view class="pro-infor">
			<view class="pro-picture">
				<image src="@/common/images/product/product.png" mode="widthFix" />
			</view>
			<view class="description">
				<text class="pro-title">Red apple is good apple</text>
				<text class="pro-sku">1kg, Priceg</text>
			</view>
			<view class="pro-add">
				<text class="price">$4.99</text>
				<image src="@/common/images/product/add-product.png" mode="widthFix" />
			</view>
			<text></text>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.product-item-wrapper {
		margin: 36rpx 28rpx 0 0;
		width: 314rpx;
		height: 450rpx;
		border-radius: 32rpx;
		border: 1px solid rgba(226, 226, 226, 1);
		box-shadow: 0 10rpx 21rpx rgba(0, 0, 0, 0);

		.pro-infor {
			@include my-flex;
			padding: 31rpx 27rpx 67rpx 27rpx;

			.pro-picture {
				@include my-flex-set();

				>image {
					width: 187rpx;
					height: 113rpx;
				}
			}

			.description {
				@include my-flex;
				margin: 57rpx 0;

				.pro-title {
					font-size: 28rpx;
					line-height: 32rpx;
					color: rgba(24, 23, 37, 1);
					margin-bottom: 6rpx;
					@include ellipsis;
				}

				.pro-sku {
					font-size: 25rpx;
					line-height: 32rpx;
					color: rgba(124, 124, 124, 1);
				}
			}

			.pro-add {
				@include my-flex-set(space-between, center);

				.price {
					font-size: 32rpx;
					line-height: 32rpx;
					color: rgba(24, 23, 37, 1);
				}

				>image {
					width: 83rpx;
					height: 83rpx;
				}
			}
		}
	}
</style>