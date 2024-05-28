<template>
  <Suspense>
    <template #default>
      <BroadcastList :broadcasts="broadcasts" />
    </template>
    <template #fallback>
      <div>loading broadcast...</div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref, Suspense } from 'vue';
import { APP_ACCESS_KEY } from '@packages/constants'
import { Broadcast } from "types/broadcast";

const BroadcastList = defineAsyncComponent(() => import('./components/BroadcastList.vue'));

const broadcasts = ref<Broadcast[] | null>(null);

onMounted(async () => {
  try {
    const response = await fetch(`https://api.shoplive.cloud/v1/campaigns/${APP_ACCESS_KEY}?page=1&count=30`);
    const data = await response.json();
    broadcasts.value = data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    broadcasts.value = [];
  }
});
</script>