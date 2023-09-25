<script setup lang="ts">
import {ref} from 'vue';

import PostList from '../components/PostList.vue'
import getPosts from "../composables/getPosts";


const {posts, error, load} = getPosts();
load()
</script>


<template>
  <div class="home">
    <div v-if="error"><p>{{ error }}</p></div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading</div>

  </div>
</template>





