<script setup lang="ts">
import { ref, type Ref } from "vue";
import ColorPicker from "./ColorPicker.vue";
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";

const emits = defineEmits(["close"]);

const note: MaybeElementRef<MaybeElement> = ref(null);

onClickOutside(note, () => closeModal());

function closeModal() {
  emits("close");
}

//Color Picker
const showColorPicker: Ref<boolean> = ref(false);
function openColorPicker() {
  showColorPicker.value = true;
}
function closeColorPicker() {
  showColorPicker.value = false;
}
</script>

<template>
  <div
    class="h-full w-full backdrop-blur-sm bg-gray-300 bg-opacity-50 fixed top-0 flex justify-center items-center"
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
          <span class="relative">
            <button
              class="h-8 w-8 rounded-full hover:bg-slate-100"
              @click="openColorPicker"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                class="mx-auto"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z"
                />
                <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" />
                <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" />
                <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" />
                <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" />
              </svg>
            </button>
            <ColorPicker
              v-if="showColorPicker"
              @close="closeColorPicker"
            ></ColorPicker>
            <button class="h-8 w-8 rounded-full ml-2 hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                class="mx-auto"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                />
              </svg>
            </button>
          </span>

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
