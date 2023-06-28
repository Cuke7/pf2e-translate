<template>
  <div class="flex h-screen flex-col items-center">
    <div class="text-5xl text-primary font-mono my-12">Pathbuilder</div>
    <div class="flex flex-col w-full">
      <textarea class="w-1/2 border-primary border-2 rounded-md mx-auto h-56 p-2 font-mono"
        v-model="dataString"></textarea>
    </div>
    <div class="mt-2">
      <div class="text-3xl text-primary mx-auto">
        {{ data.build.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Data } from "~/dataType";
import dataJSON from '~/data.json'
import { Searcher } from "fast-fuzzy";

const data = ref<Data>(dataJSON)

const dataString = computed(() => {
  return JSON.stringify(data.value)
})

const feats = await useFetch<any>('/api/getData')

const searcher = computed(() => {
  return new Searcher(feats.data.value, {
    keySelector: (obj: any) => obj.name,
  });
})

</script>

<style scoped>
textarea {
  resize: none;
  outline: none;
}

body {
  background-image: url("./public/background.jpg");
  background-repeat: repeat;
}
</style>
