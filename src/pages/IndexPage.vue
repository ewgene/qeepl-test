<template>
  <q-page class="flex flex-center">
    <!--    <q-table
      v-for="city in points"
      :key="city.city"
      flat
      bordered
      title="city.city"
      :columns="columns"
    />-->
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

import { ref, onMounted, computed, reactive, toRef } from "vue";
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
  getStores();
  //  console.log(JSON.parse(JSON.stringify(points.value[0].stores)));
});

const stores = ref([]);
const cities = ref([]);

function getStores() {
  let count = JSON.parse(JSON.stringify(points.value.length));
  console.log(count);
  for (let i = 0; i < count; i++) {
    cities.value.push(JSON.parse(JSON.stringify(points.value[i].city)));
    stores.value.push(JSON.parse(JSON.stringify(points.value[i].stores)));
    console.log(JSON.parse(JSON.stringify(points.value[i].stores)));
  }
}

//points.value = JSON.parse(JSON.stringify(getPoints.value));
//console.log(JSON.parse(JSON.stringify(points)));

/*function getCities() {
  points.value.forEach((point) => {
    stores.value += JSON.parse(JSON.stringify(point)).stores;
  });
  return stores;
}*/

const columns = [
  {
    name: "name",
    required: true,
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    latitude: "latitude",
    required: false,
    align: "center",
    field: (row) => row.latitude,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    longitude: "longitude",
    required: false,
    align: "center",
    field: (row) => row.longitude,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    address: "address",
    required: true,
    align: "left",
    field: (row) => row.address,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    hours: "hours",
    required: false,
    align: "center",
    field: (row) => row.hours,
    format: (val) => `${val}`,
    sortable: false,
  },
];
</script>
