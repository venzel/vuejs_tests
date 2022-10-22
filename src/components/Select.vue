<template>
    <div>
        <v-select id="__v-select-1" v-model="form.value" :items="values" return-object />
    </div>
</template>

<script>
export default {
    data() {
        return {
            values: [],
            form: {
                value: null,
            },
        };
    },
};
</script>
