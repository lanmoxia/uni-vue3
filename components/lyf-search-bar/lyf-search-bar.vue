<template>
	<up-input disabled="disabled" v-model="value" :placeholder="placeholder"
		custom-style="background: #F2F3F2FF; height: 93rpx; border-radius: 27rpx; padding: 29rpx 27rpx;"
		prefixIconStyle="width: 33rpx !important; height: 33rpx !important;" border="none"
		placeholder-class="placeholder-style" prefixIcon="../../common/icons/explore.svg"></up-input>
</template>

<script setup>
	import {ref,onMounted,computed} from 'vue';

	const props = defineProps({
		disabled: {
			type: Boolean,
			default: false
		}
	})
	const placeholder = computed(() => {
		return `Search Store`
	})
	const value = ref('')
</script>


<style lang="scss" scoped>
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

	.placeholder-style {
		display: flex;
		align-items: center;
		font-size: 25rpx !important;
		color: #7C7C7C !important;
	}
</style>