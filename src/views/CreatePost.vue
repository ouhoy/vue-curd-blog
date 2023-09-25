<script setup lang="ts">


import {ref} from "vue";

const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([] as string[]);

function handleKeyDown() {

  if (tags.value.includes(tag.value.trim())) {
    tag.value = "";
    return
  }

  tags.value.push(tag.value);
  tag.value = "";


}

function handleTagClick(e: Event) {
  const selectedTag = (e.target as HTMLSpanElement).textContent;

  if (!selectedTag) return;


  const indexToRemove = tags.value.indexOf(selectedTag.replace("#", ""));

  console.log(indexToRemove)

  if (indexToRemove !== -1) {
    tags.value.splice(indexToRemove, 1);
    console.log(tags.value)
  }

}

function handleSubmit() {

}

</script>

<template>
  <h1>Create post</h1>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <input v-model="title" type="text" required placeholder="title">
      <textarea v-model="body" placeholder="body"></textarea>
      <input v-model="tag" @keydown.enter.prevent="handleKeyDown" type="text"
             placeholder="tag (hit enter to add the tag)">
      <span @click="handleTagClick" v-for="tag in tags">#{{ tag }}</span>
      <button type="submit">Add new post</button>
    </form>
  </div>
</template>

<style scoped>

</style>