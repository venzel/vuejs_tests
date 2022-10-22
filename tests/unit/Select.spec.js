import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Select from '@/components/Select.vue';

const mock = {
    values: [
        {
            id: 1,
            name: 'CASA',
        },
        {
            id: 2,
            name: 'CARRO',
        },
    ],
    form: {
        value: null,
    },
};

describe('Select.vue', () => {
    let localVue, vuetify, wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Select, {
            localVue,
            vuetify,
            data() {
                return {
                    ...mock,
                };
            },
        });
    });

    it('#1', async () => {
        const items = await wrapper.find('.v-select').props('items');

        expect(items.length).toBe(2);

        expect(items).toStrictEqual([...mock.values]);
    });

    it('#2', async () => {
        await wrapper.find('#__v-select-1').setValue(1);

        const value = await wrapper.find('.v-select').props('value');

        const find = (value) => mock.values.find((e) => e.id.toString() === value);

        expect(find(value)).toEqual({
            id: 1,
            name: 'CASA',
        });
    });
});
