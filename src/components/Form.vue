<template>
    <div>
        <div class="field">
            <v-text-field v-model="form.name" id="name"></v-text-field>
        </div>

        <div class="field">
            <v-autocomplete
                id="baremo"
                v-model="form.baremo"
                :items="form.baremos"
                item-value="id"
                item-text="name"
                return-object
                outlined
                dense
                chips
            />
        </div>

        <v-btn @click="submit" id="btn"></v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            name: null,
            baremos: [
                { id: 1, name: 'Cadastro' },
                { id: 2, name: 'Dicas' },
            ],
            baremo: null,
        },
    }),
    methods: {
        submit() {
            this.$emit('submit', this.form);
        },
    },
};
</script>

<style></style>
