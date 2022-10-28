<template>
  <section class="w-full">
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4"
      v-if="props.list !== null"
    >
      <CardMovie v-for="movie in props.list" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script setup>
import CardMovie from "./CardMovie.vue";

const props = defineProps(["list"]);
console.log(props.list);
</script>
