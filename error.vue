<template>
    <NuxtLayout>
      <div class="container">
        <h1>{{ error.statusCode }}</h1>
      </div>
      <T3BackendLayout v-if="pageData" :content="pageData.content" />
    </NuxtLayout>
  </template>
  <script setup lang="ts">
  import { H3Error } from 'h3'
  const props = defineProps<{
    error: H3Error
  }>()
  
  const { T3BackendLayout, pageData } = await useT3Page({
    fetchOnInit: false
  })
  
  </script>
  