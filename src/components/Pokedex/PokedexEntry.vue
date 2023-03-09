<template>
	<div class="mb-4">
		<div class="flex mt-4">
			<input
				:id="id"
				:name="name"
				v-model="value"
				class="shadow border rounded w-full py-2 px-3 mr-4 text-grey-darker"
				placeholder="Add Pokemon"
			>
			<button
				@click="handleAddValue"
				class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray-500 w-16">
				Add
			</button>
		</div>
		<span v-if="error" class="text-red-600 text-xs" v-text="error"></span>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useModelWrapper } from '../../composables/useModelWrapper'

export default defineComponent({
	components: {
	},
	props: {
		id: {
			type: String,
		},
		name: {
			type: String,
		},
		modelValue: {
			type: String,
		},
		error: {
			type: String,
		}
	},
	emits: ["add", "update:modelValue"],
	setup(props, { emit }) {
		const handleAddValue = () => {
			emit("add", props.modelValue);
		}
		return {
			value: useModelWrapper(props, emit),
			handleAddValue
		};
	},
});
</script>
