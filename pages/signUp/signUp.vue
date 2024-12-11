<script setup>

</script>


<template>
	<view class="wrapper">
		signUp
	</view>
</template>

<style lang="scss" scoped>
	.wrapper {
		height: 100vh;

		.title {
			// border: 1px solid red;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 38rpx;
			font-weight: 400;
			line-height: 54rpx;
			color: rgba(51, 51, 51, 1);
			padding: 27rpx 0;
			margin-top: 10rpx;
		}

		.container {
			background-color: #fff;
			padding: 0 90rpx;

			.signup-title {
				// border: 1px solid red;
				margin: 240rpx 0 100rpx 0;
				font-size: 36rpx;
				line-height: 48rpx;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.form-list {
				:deep(.u-form-item__body) {
					padding: 0 !important;
					margin-bottom: 40rpx;
				}

				.input-placeholder {
					font-size: 28rpx;
					color: #BBBBBB !important;
				}

				.custom-btn {
					height: 92rpx !important;
					padding: 2rpx 30rpx;
					font-size: 200rpx !important;
				}
			}
		}

	}
</style>