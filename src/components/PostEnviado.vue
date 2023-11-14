<template>
    <div class="border rounded p-3">
        <div class="d-flex gap-2 align-items-center">
            <img
                :src="`/src/assets/${post.emoji}.svg`"
                :alt="post.emoji"
                width="50"
                class="d-block"
                v-if="post.emoji"
            />
            <p class="mb-0">{{ post.body }}</p>
        </div>

        <p class="text-end m-0">
            {{ post.dataCreacio.getDate() }}/{{
                post.dataCreacio.getMonth() + 1
            }}/{{ post.dataCreacio.getFullYear() }} at
            {{ post.dataCreacio.getHours() }}:{{
                post.dataCreacio.getMinutes() < 10
                    ? `0${post.dataCreacio.getMinutes()}`
                    : post.dataCreacio.getMinutes()
            }}h | <span class="text-primary">{{ post.user }}</span>
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps(["post"]);
</script>
