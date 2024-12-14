<template>
	<view class="expand-navbar-wrapper">
		<lyf-product :categoryName="categoryName">
			<template v-slot:extra>
				<scroll-view scroll-x="true" class="nav-scroll">
						<view class="navbar-item" v-for="(item,index) in 5" :key="index">
							<image src="@/common/images/product/nav_pulses.png" mode="widthFix"></image>
					</view>
				</scroll-view>
			</template>
		</lyf-product>
	</view>
</template>

<script setup>
import {ref} from 'vue'

const categoryName = ref('Groceries')
</script>

<style lang="scss" scpend>
.expand-navbar-wrapper{
	.nav-scroll{
		white-space: nowrap;
	}

	.navbar-item{
		display: inline-block;
		margin: 36rpx 27rpx 0 0;
		width: 450rpx;
		height: 190rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>