<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h4>My Journal</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="preSubmitForm">
                    <div class="mb-3">
                        <textarea
                            v-model="comment"
                            class="form-control"
                            id="comment"
                            rows="3"
                            :maxlength="maxChars"
                            placeholder="Type a comment..."
                        ></textarea>
                        <div class="d-flex mt-2 justify-content-between">
                            <div class="d-flex gap-2">
                                <button
                                    class="btn"
                                    @click.prevent="() => selectEmoji('happy')"
                                    :class="
                                        emoji == 'happy'
                                            ? 'btn-outline-secondary'
                                            : ''
                                    "
                                >
                                    <img
                                        src="../assets/happy.svg"
                                        alt="Happy"
                                        width="30"
                                    />
                                </button>
                                <button
                                    class="btn"
                                    @click.prevent="() => selectEmoji('sad')"
                                    :class="
                                        emoji == 'sad'
                                            ? 'btn-outline-secondary'
                                            : ''
                                    "
                                >
                                    <img
                                        src="../assets/sad.svg"
                                        alt="Sad"
                                        width="30"
                                    />
                                </button>
                                <button
                                    class="btn"
                                    @click.prevent="
                                        () => selectEmoji('surprised')
                                    "
                                    :class="
                                        emoji == 'surprised'
                                            ? 'btn-outline-secondary'
                                            : ''
                                    "
                                >
                                    <img
                                        src="../assets/surprised.svg"
                                        alt="Surprised"
                                        width="30"
                                    />
                                </button>
                            </div>
                            <p>{{ charCount }} / {{ maxChars }} char.</p>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">
                        Post
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type Entry from "../types/Entry.ts";
import type Emoji from "../types/Emoji.ts";

const emit = defineEmits<{
    (e: "@create", entry: Entry): void;
}>();

const comment = ref<string>("");
const emoji = ref<Emoji | null>(null);
const maxChars = 280;

const charCount = computed(() => comment.value.length);

function selectEmoji(emojiName: Emoji): void {
    emoji.value = emojiName;
}

const preSubmitForm = (): void => {
    // enviar el comentario
    emit("@create", {
        body: comment.value,
        emoji: emoji.value,
        dataCreacio: new Date(),
        user: "danigracia",
        id: Math.random(),
    });

    // Reinicia el campo de comentario
    comment.value = "";
};
</script>
