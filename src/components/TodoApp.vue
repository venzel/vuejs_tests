<template>
    <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo">
            {{ todo.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoApp',

    data() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Gamer 1',
                },
                {
                    id: 2,
                    text: 'Gamer 2',
                },
            ],
        };
    },
};
</script>
