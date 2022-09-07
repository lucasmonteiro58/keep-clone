<script setup lang="ts">
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";
import { ref } from "vue";

const emits = defineEmits(["close"]);

const color: MaybeElementRef<MaybeElement> = ref(null);
onClickOutside(color, () => emits("close"));
</script>

<template>
  <div ref="color" class="bg-slate-50 absolute shadow flex gap-x-2 p-4 rounded">
    <button class="h-8 w-8 rounded-full bg-yellow-100 border-2"></button>
    <button class="h-8 w-8 rounded-full bg-blue-100 border-2"></button>
    <button class="h-8 w-8 rounded-full bg-green-100 border-2"></button>
    <button class="h-8 w-8 rounded-full bg-red-100 border-2"></button>
    <button class="h-8 w-8 rounded-full bg-purple-100 border-2"></button>
    <button class="h-8 w-8 rounded-full bg-slate-50 border-2"></button>
  </div>
</template>
