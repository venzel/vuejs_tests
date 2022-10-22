import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
    let localVue, vuetify, wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Form, {
            localVue,
            vuetify,
        });
    });

    it('Deve...', async () => {
        const eName = wrapper.find('#name');

        const nameValue = 'Tiago';

        await eName.setValue(nameValue);

        expect(eName.element.value).toBe(nameValue);
    });

    it('Deve...', async () => {
        const name = 'Tiago';

        await wrapper.find('#name').setValue(name);

        await wrapper.find('#btn').trigger('click');

        expect(wrapper.emitted('submit')[0][0]['name']).toEqual(name);
    });

    // it('Deve...', async () => {
    //     wrapper.find('#name').setValue('Tiago');

    //     await wrapper.find('select').setValue('value1');

    //     await wrapper.find('#btn').trigger('click');

    //     expect(wrapper.emitted('submit')[0][0]).toEqual({
    //         name: 'Tiago',
    //         value: 'value1',
    //     });
    // });

    // it('Deve...', async () => {
    //     await wrapper.find('#name').setValue('Tiago');

    //     await wrapper.find('#baremo').setValue({ id: 2, name: 'Cobrançax' });

    //     await wrapper.find('#btn').trigger('click');

    //     expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
    //         name: 'Tiago',
    //         baremo: { id: 2, name: 'Cobrança' },
    //     });
    // });
});
