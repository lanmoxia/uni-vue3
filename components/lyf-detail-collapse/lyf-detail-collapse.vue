<template>
	<view class="detail-collapse">
		<view class="container">
			
			<view class="top">
				
				<view class="collapse-title">{{title}}</view>
				
				<view class="right">
					<slot></slot>
					
					<view @click="onCollapse" class="rotate-base" :class= "{'rotate-down': showCollapse}">
						<image src="../../common/icons/collapse.svg" mode=""></image>
					</view>
					
				</view>
			</view>
			 <transition name="collapse">
			<view v-show="showCollapse" class="collapse-base" :class= "{'collapse-expanded' : showCollapse}">
				我是豆腐干山豆根士大夫敢死队山豆根士大夫的身份更合适的是折叠的内容，我是很长空间
				我是豆腐干山豆根士大夫敢死队山豆根士大夫的身份更合适的是折叠的内容，我是很长空间
				我是豆腐干山豆根士大夫敢死队山豆根士大夫的身份更合适的是折叠的内容，我是很长空间
			</view>
			 </transition>
			<up-line v-if="showBottomLine" :class="lineCustomClass" :style="{marginTop: lineMarginTop + 'rpx !important'}" color="#E2E2E2B2"></up-line>
		</view>
	</view>
</template>

<script setup>
	
	import {ref} from "vue"
	
	const showCollapse = ref(false)
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
		customLineClass: {
			type: Boolean,
			default: false
		},
		lineCustomClass: {
			type: String,
			default: "bottom-line"
		},
		lineMarginTop: {
			type: String,
			default: ""
		}
	})
</script>

<style lang="scss" scoped>
	.detail-collapse {
		padding: 0 54rpx;
		
		.container {
			
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
				padding: 17rpx 25rpx 0 0;
				font-size: 24rpx;
				color: #7C7C7CFF;
				line-height: 38rpx;
				zoom: var(--zoom);
				animation: auto-height-reverse .3s linear forwards,
						auto-height-opacity-reverse .3s linear forwards;
				
				&.collapse-expanded {
					animation: auto-height .3s linear forwards,
							auto-height-opacity .3s linear forwards;
				}
			}

			.bottom-line {margin-top: 55rpx !important;}
		}
	}
	
	@property --zoom {
	  syntax: "<number>";
	  inherits: false;
	  initial-value: 1;
	}

	@keyframes auto-height {
		from {--zoom: 0.0001; }
		to {--zoom: 1; }
	}

	@keyframes auto-height-reverse {
		from {--zoom: 1; }
		to {--zoom: 0.0001; }
	}

	@keyframes auto-height-opacity {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	@keyframes auto-height-opacity-reverse {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	
	.collapse-enter-active, .collapse-leave-active {
		transition: zoom 0.3s ease;
	}

	.collapse-enter, .collapse-leave-to {
		zoom: 0.0001; 
		opacity: 0;
	}
</style>