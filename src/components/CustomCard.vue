<template>
    <v-card>
        <v-card-title>
            <span>{{ title }}</span>

            <v-text-field
                label="Regular"
                placeholder="Placeholder"
                id="name"
                v-model="username"
            />

            <v-spacer></v-spacer>

            <v-btn @click="$emit('action-btn:clicked')"> Action </v-btn>
        </v-card-title>

        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'CustomCard',
    data() {
        return {
            username: null,
            title: 'Foobar',
        };
    },
};
</script>

<style></style>
