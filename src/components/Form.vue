<template>
    <div>
        <div class="field">
            <v-text-field v-model="form.name" id="name"></v-text-field>
        </div>

        <!-- <div class="field">
            <v-select
                id="baremo"
                v-model="form.baremo"
                :items="baremos"
                item-value="id"
                item-text="name"
                return-object
                outlined
                dense
                chips
            />
        </div> -->

        <div>
            <select v-model="values" multiple>
                <option value="value1"></option>
                <option value="value2"></option>
                <option value="value3"></option>
            </select>
        </div>

        <v-btn @click="submit" id="btn"></v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        baremos: [],
        values: [],
        form: {
            name: null,
            value: null,
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
