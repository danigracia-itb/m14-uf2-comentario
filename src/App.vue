<template>
    <div class="container mt-5">
        <div class="row justify-content-center flex-column align-items-center">
            <Formulario @@create="submitForm" />

            <div v-if="posts.length > 0" class="col-md-8 mt-5">
                <h2 class="text-center mb-4">Post Enviados</h2>
                <ul class="list-unstyled">
                    <li v-for="post in posts" :key="post.id" class="mb-3">
                        <PostEnviado :post="post" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Formulario from "./components/Formulario.vue";
import PostEnviado from "./components/PostEnviado.vue";

import type Entry from "./types/Entry";

const posts = reactive<Array<Entry>>([]);

function submitForm(entry: Entry): void {
    posts.push(entry);
}
</script>
