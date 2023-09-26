<script setup lang="ts">


import {ref} from "vue";

interface Post {
  title: string,
  body: string,
  id: number,
  tags: string[]
}

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

  if (indexToRemove !== -1) tags.value.splice(indexToRemove, 1);


}

async function handleSubmit() {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value
  };

  await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(post),
  })

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
      <span class="pill" @click="handleTagClick" v-for="tag in tags">#{{ tag }}</span>
      <button type="submit">Add new post</button>
    </form>
  </div>
</template>

<style>

form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

</style>