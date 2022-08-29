<script setup lang="ts">
import { ref, type Ref } from "vue";
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";

const isEditing: Ref<boolean> = ref(false);

const note: MaybeElementRef<MaybeElement> = ref(null);
onClickOutside(note, () => closeEditor());

function toggleEditing() {
  isEditing.value = !isEditing.value;
}

function closeEditor() {
  isEditing.value = false;
}

function openEditor() {
  isEditing.value = true;
}
</script>

<template>
  <div
    ref="note"
    class="w-full md:w-[560px] max-h-[600px] rounded-md bg-slate-50 px-4 py-2 shadow-md"
  >
    <input
      v-if="isEditing"
      placeholder="Title"
      class="bg-slate-50 w-full font-bold mb-2"
    />
    <textarea
      @click="openEditor"
      placeholder="Take a note..."
      class="bg-slate-50 w-full block min-h-[5em] h-fit resize-none"
    />
    <div v-if="isEditing" class="flex justify-between mt-4">
      <button class="h-8 w-8 rounded-full hover:bg-slate-100">o</button>
      <button
        class="px-4 py-2 hover:bg-slate-100 rounded-sm"
        @click="toggleEditing"
      >
        Close
      </button>
    </div>
  </div>
</template>
