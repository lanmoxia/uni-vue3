<template>
	<up-swiper :style="{height: '200rpx'}" :list="bannerList" indicator @change="onChange">
		<template #indicator>
			<view class="indicator">
				<view class="indicator__dot" v-for="(item, index) in bannerList" :key="index"
					:class="[index === current && 'indicator__dot--active']">
				</view>
			</view>
		</template>
	</up-swiper>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'

	const bannerList = reactive([
		'https://uview-plus.jiangruyi.com/uview/swiper/swiper1.png',
		'https://uview-plus.jiangruyi.com/uview/swiper/swiper3.png',
		'https://uview-plus.jiangruyi.com/uview/swiper/swiper2.png',
	])

	const current = ref(0)
	const onChange = (e) => {
		current.value = e.current
	}
</script>

<style lang="scss">
	.indicator {
		@include my-flex-set;

		&__dot {
			width: 9.11rpx;
			height: 9.75rpx;
			opacity: 0.3;
			border-radius: 27.17px;
			background: rgba(3, 3, 3, 1);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				width: 30.4rpx;
				height: 9.75rpx;
				opacity: 1;
				border-radius: 27.17rpx;
				background: rgba(83, 177, 117, 1);
			}
		}
	}
</style>