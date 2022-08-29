<script setup lang="ts">
import { ref } from "vue";
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";
const emits = defineEmits(["close"]);

const note: MaybeElementRef<MaybeElement> = ref(null);
onClickOutside(note, () => console.log("close"));

function closeModal() {
  emits("close");
}
</script>

<template>
  <div
    class="h-full w-full backdrop-blur-sm bg-gray-300 bg-opacity-50 fixed top-0 flex justify-center items-center"
    @click="closeModal"
  >
    <div
      ref="note"
      class="md:w-[600px] w-full mx-6 max-h-[600px] rounded-md bg-slate-50 px-4 py-4 shadow-md"
    >
      <input placeholder="Title" class="bg-slate-50 w-full font-bold mb-2" />
      <textarea
        placeholder="Take a note..."
        class="bg-slate-50 w-full block min-h-[8em] h-fit resize-none"
      />

      <div>
        <div class="flex justify-between mt-4">
          <button class="h-8 w-8 rounded-full hover:bg-slate-100">o</button>
          <button
            class="px-4 py-1 bg-gray-200 active:bg-gray-300 rounded font-medium"
            @click="closeModal"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
