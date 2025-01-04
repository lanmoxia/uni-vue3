<template>
	<up-sticky bgColor="#fff" class="explore-card-sticky">
		<view style="height:44px"></view>
		<text class="explore-card-sticky-title">Find Products</text>
		<view class="explore-card-sticky-bar">
			<lyf-search-bar></lyf-search-bar>
		</view>
	</up-sticky>
			
	<scroll-view class="nav-scroll-view">
		<view class="nav-card-item" v-for="(item,index) in 10" :key="index">
			<lyf-search-nav-item></lyf-search-nav-item>
		</view>
	</scroll-view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.explore-card-sticky {
		top: 0 !important;
		padding: 0 47.2rpx;
		&-title {
			@include my-flex-set;
			font-size: 36rpx;
			color: #181725FF;					
		}
		&-bar {
			margin-top: 55rpx;
		}
	}

	.nav-scroll-view {
		padding: 0 47rpx;
		margin: 47rpx 0;
		.nav-card-item {			
			display: inline-block;
			margin-bottom: 22rpx; 
			margin-right: 22rpx; 
			&:nth-child(2n) { margin-right: 0; } 
			&:nth-last-child(-n+2) { margin-bottom: 0; }
		}
	}
</style>
