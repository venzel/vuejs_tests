import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
    let localVue, vuetify, wp;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wp = mount(Form, {
            localVue,
            vuetify,
        });
    });

    it('Deve...', async () => {
        const eName = wp.find('#name');

        const nameValue = 'Tiago';

        await eName.setValue(nameValue);

        expect(eName.element.value).toBe(nameValue);
    });

    it('Deve...', async () => {
        const name = 'Tiago';

        await wp.find('#name').setValue(name);

        await wp.find('#btn').trigger('click');

        expect(wp.emitted('submit')[0][0]['name']).toEqual(name);
    });

    it('Deve...', async () => {
        const baremo = {
            id: 1,
            name: 'Dicas',
        };

        const baremos = [
            { id: 1, name: 'Cadastro' },
            { id: 2, name: 'Dicas' },
        ];

        await wp.find('#baremo').setValue(baremo);

        await wp.find('#btn').trigger('click');

        expect(wp.emitted('submit')[0][0]).toStrictEqual({
            name: null,
            baremos,
            baremo: null,
        });
    });
});
