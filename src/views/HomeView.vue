<script setup lang="ts">
import {ref} from 'vue';

import PostList from '../components/PostList.vue'
import getPosts from "../composables/getPosts";
import Spinner from "@/components/Spinner.vue";
import TagClould from "@/components/TagCloud.vue";


const {posts, error, load} = getPosts();
load()
</script>


<template>
  <div class="home">
    <div v-if="error"><p>{{ error }}</p></div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
      <TagClould :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>

  </div>
</template>





