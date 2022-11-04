<template>
  <main class="container mx-auto px-6 md:px-24 flex flex-wrap gap-2">
    <template v-if="movie">
      <div class="w-full sm:w-1/3">
        <img :src="imgUrl" alt="" class="h-64 w-full max-w-xs rounded-md" />
      </div>
      <div
        class="w-full sm:w-2/3 flex flex-col items-center px-4 justify-around"
      >
        <div class="w-full flex gap-1">
          <span class="text-orange-800 font-semibold text-md w-1/5"
            >Title:
          </span>
          <h2 class="text-orange-900 font-bold text-lg">{{ movie.title }}</h2>
        </div>
        <div class="w-full flex gap-2">
          <span class="text-orange-800 font-semibold text-md w-1/5"
            >Description:
          </span>
          <h2 class="text-orange-900 font-medium text-md">
            {{ movie.overview }}
          </h2>
        </div>
        <div class="w-full flex gap-2">
          <span class="text-orange-800 font-semibold text-md w-1/5"
            >Released In:
          </span>
          <h2 class="text-orange-900 font-bold text-md">
            {{ movie.release_date }}
          </h2>
        </div>
      </div>
    </template>
  </main>
</template>
<script setup>
import { defineProps, computed, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const movie = ref(null);
onMounted(() => {
  getData();
});

const imgUrl = computed(
  () => `https://image.tmdb.org/t/p/w500/${movie.value.poster_path}`
);

const getData = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${
      import.meta.env.VITE_IMDB_API_KEY
    }&language=en-US`
  );
  movie.value = await response.json();
  console.log(movie.value);
};
</script>
