<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from "vue";
import ColorPicker from "./ColorPicker.vue";
import { Icon } from "@iconify/vue";
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";
import type { Note } from "@/interfaces/Note";

const emits = defineEmits(["close"]);
const props = defineProps<{
  note: Note;
}>();

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

//Note content
const noteContent: Note = reactive({
  id: "",
  title: "",
  content: "",
  color: "bg-slate-50",
});

function changeColor(color: string) {
  noteContent.color = color;
  closeColorPicker();
}

onMounted(() => {
  noteContent.id = props.note.id;
  noteContent.title = props.note.title;
  noteContent.content = props.note.content;
  noteContent.color = props.note.color;
});
</script>

<template>
  <div
    class="h-full w-full backdrop-blur-sm bg-gray-300 bg-opacity-50 fixed top-0 flex justify-center items-center"
  >
    <div
      ref="note"
      :class="noteContent.color"
      class="md:w-[600px] w-full mx-6 max-h-[600px] rounded-md px-4 py-4 shadow-md"
    >
      <input
        placeholder="Title"
        :class="noteContent.color"
        v-model="noteContent.title"
        class="w-full font-bold mb-2"
      />
      <textarea
        placeholder="Take a note..."
        :class="noteContent.color"
        v-model="noteContent.content"
        class="w-full block min-h-[8em] h-fit resize-none"
      />

      <div>
        <div class="flex justify-between mt-4">
          <span class="relative">
            <button class="h-8 w-8 rounded-full" @click="openColorPicker">
              <Icon
                icon="ic:outline-color-lens"
                width="1.2rem"
                class="mx-auto"
                height="1.2rem"
              />
            </button>
            <ColorPicker
              v-if="showColorPicker"
              @close="closeColorPicker"
              @changeColor="changeColor"
            ></ColorPicker>
            <button class="h-8 w-8 rounded-full ml-2">
              <Icon
                icon="mdi:trash-can-outline"
                class="mx-auto"
                width="1.2rem"
                height="1.2rem"
              />
            </button>
          </span>

          <button
            class="px-4 py-1 active:bg-gray-300 rounded font-medium"
            @click="closeModal"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
