<template>
	<view class="search-swipper">
		<up-input 
			clearable
			:focus="isFocus"
			v-model="seartchVal"
			@change="onChange" 
			border="none"
			:placeholder="placeholder"
			custom-style="background: #F2F3F2FF; height: 93rpx; border-radius: 27rpx; padding: 29rpx 27rpx;"
			prefixIconStyle="width: 33rpx !important; height: 33rpx !important;" 
			placeholder-class="custom-placeholder-class" 
			prefixIcon="../../common/icons/explore.svg">
		</up-input>
	</view>
</template>

<script setup>
	import {ref,watch} from 'vue'
	import {onShow} from '@dcloudio/uni-app'
	
	const inputRef = ref(null)
			
	const props = defineProps({
		modelValue: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Search Store'
		},
		isFocus: {
			type: Boolean,
			default: false
		}
	})

	const seartchVal = ref(props.modelValue)

	const onChange = (e) => {
		console.log(e)
	} 
	
</script>


<style lang="scss" scoped>
	.search-swipper {
		:deep(.u-input__content) {
			height: 35rpx !important;
			@include my-flex-set(center, baseline);
		}
		
		:deep(.u-input__content__field-wrapper__field) {
			font-size: 25rpx !important;
		}
		
		:deep(.uni-input-wrapper) {
			height: 35rpx !important;
		}
		
		:deep(..u-input__content__prefix-icon) {
			margin-right: 16rpx !important;
		}
		
		.custom-placeholder-class {
			display: flex;
			align-items: center;
			font-size: 25rpx !important;
			color: #7C7C7C !important;
		}
	}
</style>