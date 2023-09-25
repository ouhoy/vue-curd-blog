<script setup lang="ts">

import getPost from "@/composables/getPost";
import {useRoute} from "vue-router";


const route = useRoute();

const id = Number(route.params.id)

const {post, error, load} = getPost(id)

load()

</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<style scoped>

</style>