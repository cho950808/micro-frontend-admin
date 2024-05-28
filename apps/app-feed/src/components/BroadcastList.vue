<script lang="ts" setup>
import { Broadcast } from "types/broadcast";
import { PropType } from "vue";
import BroadcastCard from "./BroadcastCard.vue";

defineProps({
  broadcasts: { type: Object as PropType<Array<Broadcast>>, required: true },
});
</script>

<template>
  <div :class="$style.container">
    <BroadcastCard
      v-for="{ campaignKey, title, backgroundUrl, posterUrl, poster2Url} in broadcasts"
      :campaignKey="campaignKey"
      :title="title"
      :backgroundUrl="backgroundUrl"
      :posterUrl="posterUrl"
      :poster2Url="poster2Url"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 20px;
}
</style>
