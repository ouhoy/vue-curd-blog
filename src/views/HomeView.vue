<script setup lang="ts">
import {ref} from 'vue';

import PostList from '../components/PostList.vue'


interface Post {
  title: string,
  body: string,
  id: number,
  tags: string[]
}


const posts = ref<Post[]>([]);
const error = ref<string>("");

const load = async () => {

  try {

    let data = await fetch(`http://localhost:3000/posts`);

    if (!data.ok) throw Error("Something went wrong, please try again");

    posts.value = await data.json()

   
  } catch (err) {
    console.error("An error while fetching data: ", (err as Error).message)
    error.value = `${(err as Error).message}`;

  }
}

load()
</script>


<template>
  <div class="home">
    <PostList :posts="posts"/>
  </div>
</template>





