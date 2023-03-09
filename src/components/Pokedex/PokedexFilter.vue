<template>
	<div class="mb-4">
        <div class="flex mt-4">
            <input
                :id="id"
                :name="name"
                v-model="value"
                class="shadow border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Filter"
            >
            <button
                :disabled="value == ''"
                @click="value = ''"
                class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed w-16"
                >
                Clear
            </button>
        </div>
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
  },
  emits: ["filter", "update:modelValue"],
  setup(props, { emit }) {
  	const handleFilter = () => {
  		emit("filter", props.modelValue);
  	}
    return {
      value: useModelWrapper(props, emit),
      handleFilter
  };
},
});
</script>
