import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Count from '@/components/Count.vue';

describe('Increment.vue', () => {
    let localVue, vuetify, wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Count, {
            localVue,
            vuetify,
        });
    });

    it('Deve conter...', () => {
        wrapper.find('#add').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('increment');
    });

    it('Deve conter...', () => {
        wrapper.find('#add').trigger('click');
        wrapper.find('#add').trigger('click');

        const incrementEvent = wrapper.emitted('increment');

        expect(incrementEvent).toHaveLength(2);
        expect(incrementEvent[0]).toEqual([1]);
        expect(incrementEvent[1]).toEqual([2]);
    });

    it('Deve conter...', () => {
        wrapper.find('#addTwo').trigger('click');
        wrapper.find('#addTwo').trigger('click');

        expect(wrapper.emitted('incrementTwo')[0]).toEqual([
            {
                count: 1,
                isEven: false,
            },
        ]);

        expect(wrapper.emitted('incrementTwo')[1]).toEqual([
            {
                count: 2,
                isEven: true,
            },
        ]);
    });
});
