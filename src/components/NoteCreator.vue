<script setup lang="ts">
import { ref, reactive, type Ref } from "vue";
import { Icon } from "@iconify/vue";
import {
  onClickOutside,
  type MaybeElement,
  type MaybeElementRef,
} from "@vueuse/core";
import ColorPicker from "./ColorPicker.vue";
import type { Note } from "@/interfaces/Note";
import { v4 as uuidv4 } from "uuid";
import Api from "@/api";

const isEditing: Ref<boolean> = ref(false);
const emits = defineEmits(["save"]);

const note: MaybeElementRef<MaybeElement> = ref(null);
onClickOutside(note, () => closeEditor());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const textarea: any = ref(null);
function resize() {
  textarea.value.style.height = "120px";
  textarea.value.style.height = textarea.value.scrollHeight + "px";
}

function closeEditor() {
  isEditing.value = false;
  showColorPicker.value = false;
}

function openEditor() {
  isEditing.value = true;
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
  id: uuidv4(),
  title: "",
  content: "",
  color: "bg-slate-50",
  date: new Date(),
});

function resetNoteContent() {
  noteContent.id = uuidv4();
  noteContent.title = "";
  noteContent.content = "";
  noteContent.color = "bg-slate-50";
}

async function createNote() {
  noteContent.date = new Date();
  await Api.addNote(noteContent);
  closeEditor();
  resetNoteContent();
  emits("save");
}

function changeColor(color: string) {
  noteContent.color = color;
  closeColorPicker();
}
</script>

<template>
  <div
    ref="note"
    :class="noteContent.color"
    class="w-full md:w-[560px] rounded-md px-4 py-2 shadow-md"
  >
    <input
      v-model="noteContent.title"
      v-if="isEditing"
      placeholder="Title"
      :class="noteContent.color"
      class="w-full font-bold mb-2"
    />
    <textarea
      ref="textarea"
      @input="resize"
      v-model="noteContent.content"
      @click="openEditor"
      placeholder="Take a note..."
      :class="noteContent.color"
      class="w-full block min-h-[5em] h-fit resize-none max-h-[60vh]"
    />
    <div v-if="isEditing" class="flex justify-between mt-4">
      <span class="relative">
        <button
          class="h-8 w-8 rounded-full hover:brightness-90"
          @click="openColorPicker"
        >
          <Icon
            icon="ic:outline-color-lens"
            width="1.2rem"
            height="1.2rem"
            class="mx-auto"
          />
        </button>
        <ColorPicker
          v-if="showColorPicker"
          @close="closeColorPicker"
          @changeColor="changeColor"
        ></ColorPicker>
      </span>

      <button class="px-4 py-2 rounded-sm font-semibold" @click="createNote">
        Save
      </button>
    </div>
  </div>
</template>
