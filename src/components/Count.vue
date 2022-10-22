<template>
    <div>
        <v-btn id="add" @click="handleClick"> Incrementar </v-btn>

        <v-btn id="addTwo" @click="handleClickTwo"> Incrementar </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        handleClick() {
            this.count += 1;

            this.$emit('increment', this.count);
        },
        handleClickTwo() {
            this.count += 1;

            this.$emit('incrementTwo', {
                count: this.count,
                isEven: this.count % 2 === 0,
            });
        },
    },
};
</script>

<style></style>
