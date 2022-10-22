import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Endpoint from '@/components/Endpoint.vue';

describe('Endpoint.vue', () => {
    let localVue, vuetify, wrapper, instance;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Endpoint, {
            localVue,
            vuetify,
        });

        instance = wrapper.vm;
    });

    it('Deve conter o método endpontFinal...', () => {
        expect(instance.endpointFinal).toBeTruthy();
    });

    it('Deve conter o método submitFinal...', () => {
        expect(instance.submitFinal).toBeTruthy();
    });

    it('Deve ter retornos iguas as propriedades do data.form...', () => {
        const properties = ['name', 'age', 'hobbies'];

        const received = Object.keys(wrapper.vm.$data.form);

        expect(properties).toEqual(received);
    });

    it('Deve retornar as propriedas no método endpontFinal...', async () => {
        if (instance.endpointFinal && instance.submitFinal) {
            const expected = ['name', 'age', 'level'];

            await wrapper.find('#__btn').trigger('click');

            const result = Object.keys(await wrapper.emitted('submit')[0][0]);

            expect(expected).toEqual(result);
        }
    });

    it('Deve resultar no level BEGIN...', async () => {
        if (instance.endpointFinal && instance.submitFinal) {
            wrapper.setData({
                form: {
                    hobbies: ['Brincar'],
                },
            });

            await wrapper.find('#__btn').trigger('click');

            const emitted = await wrapper.emitted('submit')[0][0];

            const result = Object.fromEntries(Object.entries(emitted));

            expect(result.level).toEqual('BEGIN');
        }
    });

    it('Deve resultar no level ULTRA...', async () => {
        if (instance.endpointFinal && instance.submitFinal) {
            wrapper.setData({
                form: {
                    hobbies: ['Brincar', 'Dancar', 'Correr', 'Nadar'],
                },
            });

            await wrapper.find('#__btn').trigger('click');

            const emitted = await wrapper.emitted('submit')[0][0];

            const result = Object.fromEntries(Object.entries(emitted));

            expect(result.level).toEqual('ULTRA');
        }
    });
});
