<template>
    <div>
        <v-btn @click="submitFinal()" id="__btn"></v-btn>
    </div>
</template>

<script>
export default {
    name: 'Endpoint',
    data: () => ({
        lists: {
            hobbies: [],
        },
        form: {
            name: null,
            age: null,
            hobbies: [],
        },
    }),
    computed: {},
    methods: {
        levelFan(count = 0) {
            let aux = null;

            if (count <= 1) aux = 'BEGIN';
            if (count > 1 && count <= 3) aux = 'START';
            if (count > 3) aux = 'ULTRA';

            return aux;
        },
        endpointFinal() {
            const { name, age, hobbies } = this.form;

            const level = this.levelFan(hobbies.length);

            return {
                name,
                age,
                level,
            };
        },
        submitFinal() {
            this.$emit('submit', this.endpointFinal());
        },
    },
};
</script>

<style></style>
