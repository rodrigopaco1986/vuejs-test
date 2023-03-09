<template>
	<main>
		<div class="py-10">
			<h1 class="text-center text-grey-darkest text-2xl">Pokedex List</h1>
			<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
				<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
					<PokedexFilter
						id="PokedexFilter"
						name="PokedexFilter"
						v-model="pokedexFilterValue"
						@filter="filter"
					/>
					<PokedexEntry
						id="pokedexEntry"
						name="pokedexEntry"
						v-model="pokedexEntryValue"
						@add="addEntry"
						:error="pokedexEntryErrorValue"
					/>
				</div>
			</div>
			<PokedexList id="pokedexList" name="pokedexList" :modelValue="filteredEntries" />
		</div>
	</main>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import PokedexFilter from '../components/Pokedex/PokedexFilter.vue';
import PokedexList from '../components/Pokedex/PokedexList.vue';
import PokedexEntry from '../components/Pokedex/PokedexEntry.vue';
import pokeapiService from '../services/Pokeapi';

export default defineComponent({
	components: {
		PokedexFilter,
		PokedexEntry,
		PokedexList,
	},
	props: {
	},
	computed: {
		filteredEntries() {
			const filterValue = this.pokedexFilterValue;
			if (filterValue)
				return this.pokedexListValue.filter(value => value.includes(filterValue));
			return this.pokedexListValue;
		}
	},
	setup() {
		onMounted(() => {
			fetchPokemons();
		});

		const pokedexFilterValue = ref("");
		const pokedexEntryValue = ref("");
		const pokedexEntryErrorValue = ref("");
		const pokedexListValue = ref([]);

		const addEntry = (value) => {
			//TODO: use vue-validation for rules
			if (value.length < 3) {
				pokedexEntryErrorValue.value = "Please type more than three characters!";
				return;
			}
			if (pokedexListValue.value.indexOf(value) != -1) {
				pokedexEntryErrorValue.value = "This pokemon already exists!";
				return;
			}

			pokedexListValue.value.push(value);
			pokedexEntryValue.value = "";
			pokedexEntryErrorValue.value = "";
		}

		const filter = (value) => {
			pokedexFilterValue.value = value;
		}

		const fetchPokemons = async () => {
			const response: Object[] = await pokeapiService.getPokemons();
			if (response?.results) {
				pokedexListValue.value = response.results.map((item) => item.name);
			}
		};

		return {
			pokedexFilterValue,
			pokedexEntryValue,
			pokedexEntryErrorValue,
			pokedexListValue,
			filter,
			addEntry,
		};
	},
});
</script>