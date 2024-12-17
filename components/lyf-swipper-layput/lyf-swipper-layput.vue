<template>
	<up-swiper 
		:class="['swipper-pictrue',customClass]" 
		:img-mode="imgMode"
		:indicatorStyle="indicatorStyle" 
		:style="{height: swipperHeight}" 
		:autoplay="autoplay" 
		:list="pictures" 
		indicator @change="onChange">
		
		<template #indicator>
			<view v-if="showIndicator" class="indicator">
				<view class="indicator__dot" v-for="(item, index) in pictures" :key="index"
					:class="index === current ? activeIndicatorClass : baseIndicatorClass">
				</view>
			</view>
		</template>
	</up-swiper>
</template>

<script setup>
	
	import {
		ref
	} from 'vue'
	
	const props = defineProps({
		// 样式穿透 uView 固定高度
		customClass: {
			type: String,
			default: ""
		},
		// 图片缩放
		imgMode: {
			type: String,
			default: "widthFix"
		},
		// 指示器位置
		indicatorStyle: {
			type: [String, Object],
			default: ''
		},
		// 自动播放
		autoplay: {
			type: Boolean,
			default: false
		},
		// 是否显示指示器
		showIndicator: {
			type: Boolean,
			default: false
		},
		// 指示器初始样式
		baseIndicatorClass: {
			type: String,
			default: 'indicator__dot'
		},
		// 指示器选中样式
		activeIndicatorClass: {
			type: String,
			default: 'indicator__dot--active'
		},
		// 轮播整体高度
		swipperHeight: {
			type: String,
			default: "200rpx"
		},
		// 轮播图
		pictures: {
			type: Array,
			default: () => []
		}
	})

	const current = ref(0)
	const onChange = (e) => {
		current.value = e.current
	}
</script>

<style lang="scss" scoped>
	.swipper-pictrue {
		// :deep(.u-swiper__wrapper__item__wrapper__image) { 
		// 	height: 361rpx !important; 
		// }
		// :deep(.u-swiper__wrapper){
		// 	height: 361rpx !important;
		// }
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
	}
</style>