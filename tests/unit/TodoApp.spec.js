import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TodoApp from '@/components/TodoApp.vue';

describe('Increment.vue', () => {
    let localVue, vuetify, wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(TodoApp, {
            localVue,
            vuetify,
        });
    });

    it('deve encontrar o Gamer 1.', () => {
        const todo = wrapper.get('[data-test="todo"]');

        expect(todo.text()).toBe('Gamer 1');
    });

    it('Deve conter 2 registros.', () => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    });
});
