<template>
  <main class="container px-6 mx-auto flex flex-col justify-center py-8">
    <h1
      class="text-5xl md:text-6xl font-bold font-sans text-orange-900 inline-flex items-center justify-center mb-8"
    >
      <Icon icon="icon-park-twotone:movie" /><span>Movie Finder</span>
    </h1>
    <div class="flex justify-center mb-10">
      <div class="flex w-2/3 h-12 mt-1">
        <input
          type="text"
          name="email"
          id="email"
          v-model="input"
          class="block w-3/4 h-full rounded-l-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-2.5"
          placeholder="Title of your movie"
        />
        <button
          @click="search"
          class="w-1/4 h-12 inline-flex justify-center items-center bg-orange-300 rounded-r-full"
        >
          <Icon icon="akar-icons:search" class="w-7 h-7 text-orange-700" />
        </button>
      </div>
    </div>
    <ListMovie :list="data" v-if="data" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import ListMovie from "../components/listMovie.vue";
const input = ref("");
const data = ref(null);
const search = async () => {
  console.log(input.value);

  try {
    const r = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_IMDB_API_KEY
      }&language=en-US&query=${input.value}&page=1`
    );
    const res = await r.json();
    data.value = res.results;
    console.log(data.value[0]);
  } catch (error) {
    console.error(error);
  }
};
</script>
