<template>
	
	<view class="explore-card">
		<up-sticky bgColor="#fff" class="explore-card-sticky">
			<view style="height: 45rpx"></view>
			<text class="explore-card-sticky-title">Find Products</text>
			<view class="explore-card-sticky-bar" :class="{'add-padding': isScroll}">
				<lyf-search-bar :isFocus="isFocus"></lyf-search-bar>
			</view>
		</up-sticky>
				
		<scroll-view class="nav-scroll-view" scroll-y="true">
			<view class="nav-card-item" v-for="(item,index) in 10" :key="index">
				<lyf-search-nav-item></lyf-search-nav-item>
			</view>
		</scroll-view>
	</view>

</template>

<script setup>
	import {ref} from 'vue'
	import {onShow} from "@dcloudio/uni-app"
	
	const isFocus = ref(false)
	
	const isScroll = ref(false)
	
	onShow(() => {
		const pages = getCurrentPages() 
		const currentPage = pages[pages.length - 1]
		const query = currentPage.options
		if(query.isFocus === 'true'){
			isFocus.value = true
		}
	})
	
	const onScroll = () => {
		console.log('hi')
		
	}
</script>

<style lang="scss" scoped>
	
	.explore-card {
		height: 100vh;
		.explore-card-sticky {
			top: 0 !important;
			padding: 0 47rpx;
			.explore-nav-bar {
			}
			&-title {
				@include my-flex-set;
				font-size: 36rpx;
				color: #181725FF;		
			}
			&-bar {
				padding: 55rpx 0;
				.add-padding {
					padding-bottom: 55rpx;
				}
			}
		}
		
		.nav-scroll-view {
			padding: 0 47rpx calc(var(--window-bottom) + 47rpx) 47rpx;
			height: 100%;
			.nav-card-item {			
				display: inline-block;
				margin-bottom: 22rpx; 
				margin-right: 22rpx; 
				&:nth-child(2n) { margin-right: 0; } 
				&:nth-last-child(-n+2) { margin-bottom: 0; }
			}
		}
	}
</style>
