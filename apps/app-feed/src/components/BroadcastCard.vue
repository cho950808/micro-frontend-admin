<script lang="ts" setup>

defineProps({
  campaignKey: String,
  title: String,
  backgroundUrl: String,
  posterUrl: String,
  poster2Url: String
});



const handleClick = (campaignKey: string | undefined) => {
  const customClickEvent = new CustomEvent("item-click", { detail: { campaignKey } });
  window.dispatchEvent(customClickEvent);
};
</script>

<template>
  <div :class="$style.container" @click="handleClick(campaignKey)">
    <div :class="$style.thumbnailContainer">
      <img :src="posterUrl" :class="$style.thumbnail" v-if="posterUrl"/>
      <img :src="poster2Url" :class="$style.thumbnail" v-if="poster2Url"/>
      <img :src="backgroundUrl" :class="$style.thumbnail" v-if="backgroundUrl"/>
    </div>
    <div :class="$style.title">{{ title }}</div>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
}
.rating {
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 10px;
  width: fit-content;
}
.thumbnailContainer {
  overflow: hidden;
}
.thumbnail {
  width: 100%;
  height: 450px;
  max-height: 450px;
  object-fit: cover;
  transition: transform 0.3s;
  overflow: hidden;
}
.title {
  margin-top: 10px;
  font-size: 18px;
  height: 40px;
}
.price-section {
  display: flex;
  justify-content: space-between;
}
.price {
  font-size: 16px;
  font-weight: bold;
}
</style>
