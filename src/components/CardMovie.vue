<template>
  <div class="w-full h-64 rounded-md overflow-hidden relative">
    <img
      :src="imgUrl"
      :alt="props.movie.title"
      class="absolute w-full h-full object-fill"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps(["movie"]);

const imgUrl = computed(
  () => `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
);
</script>
