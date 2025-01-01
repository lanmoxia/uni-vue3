<template>
	<view class="detail-collapse">
			<up-line v-if="showTopLine" :margin= "topLineMargin" color="#E2E2E2B2"></up-line>
			
			<view class="top" @click="onCollapse">
				
				<view class="collapse-title">{{title}}</view>
				
				<view class="right">
					
					<slot name="expand-content"></slot>
						
					<view class="rotate-base" :class= "{'rotate-down': showCollapse}">
						<image src="../../common/icons/collapse.svg" mode=""></image>
					</view>
					
				</view>
			</view>
			
			<view class="collapse-base" :class= "{'collapse-expanded' : showCollapse}">
				<text class="inner-text">
					<slot name="collapse-content"></slot>
				</text>
			</view>
			
			<up-line v-if="showBottomLine" :margin= "BottomLineMargin" color="#E2E2E2B2"></up-line>
	</view>
</template>

<script setup>
	
	import {ref,onMounted} from "vue"
	
	const showCollapse = ref(false)
	
	onMounted(() => {
		showCollapse.value = false
	})
	
	const onCollapse = () => {
		showCollapse.value = !showCollapse.value
	}
	const props = defineProps({
		title: {
			type: String,
			default: ""
		},
		showBottomLine: {
			type: Boolean,
			default: true
		},
		showTopLine: {
			type: Boolean,
			default: true
		},
		topLineMargin: {
			type: String,
			default: "0 0 33rpx 0"
		},
		BottomLineMargin: {
			type: String,
			default: "33rpx 0 0 0"
		}
	})
</script>

<style lang="scss" scoped>
	.detail-collapse {
		padding: 0 54rpx;
		.top {
			@include my-flex-set(space-between,center);
			line-height: 33rpx;
			
			.cell-title{
				font-size: 29rpx;
				color: rgba(24, 23, 37, 1);
				vertical-align: middle;
			}
			
			.right {
				@include my-flex-set(space-between,center);
				
				.rotate-base{
					width: 25rpx;
					height: 25rpx;
					margin-left: 36rpx;
					
					> image {
						width: 100%;
						height: 100%;
						transition: transform 0.3s ease;
					}
					
					&.rotate-down > image {
						transform: rotate(90deg); 
						transition: transform 0.3s ease;
					}
				}
			}
		}
	
		.collapse-base {
			font-size: 24rpx;
			color: #7C7C7CFF;
			overflow: hidden;
			line-height: 38rpx;
			display: grid;
			grid-template-rows: 0fr;
			padding: 0;
			transition: all .3s ease;
			
			&.collapse-expanded {
				grid-template-rows: 1fr;
				padding: 17rpx 25rpx 0 0;
			}
			.inner-text {
				min-height: 0;
			}
		}
	}
</style>