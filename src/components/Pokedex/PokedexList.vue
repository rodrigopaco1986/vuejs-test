<template>
	<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
		<ul class="list-decimal px-6 w-full lg:w-3/4 lg:max-w-lg">
			<li
				v-for="item in modelValue"
			>
				<div>
					<p class="w-full text-grey-darkest">{{ item }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from 'vue';
import { useModelWrapper } from '../../composables/useModelWrapper';

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
      type: Array as PropType<string[]>,
    },
  },
  emits: [],
  setup(props, { emit }) {
    return {
      //itemsList: useModelWrapper(props, emit),
    };
  },
});
</script>
