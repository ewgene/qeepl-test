<template>
  <q-page class="flex flex-center"> </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

import { ref, onMounted, computed } from "vue";
import { usePointsStore } from "../stores/points";
const store = usePointsStore();

const getPoints = computed(() => {
  return store.getPoints;
});

const points = computed(() => {
  return store.points;
});

onMounted(() => {
  store.fetchPoints();
});
</script>
