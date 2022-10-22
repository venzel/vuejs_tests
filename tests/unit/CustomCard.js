import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import CustomCard from '@/components/CustomCard';

describe('CustomCard.vue', () => {
    const localVue = createLocalVue();

    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    it('should have a custom title and match snapshot', () => {
        const wrapper = mount(CustomCard, {
            localVue,
            vuetify,
        });

        const title = wrapper.find('.v-card__title > span');

        expect(title.text()).toBe('Foobar');
    });

    it('should emit an event when the action v-btn is clicked', () => {
        const wrapper = mount(CustomCard, {
            localVue,
            vuetify,
            propsData: { title: 'Foobar' },
        });

        const event = jest.fn();

        const button = wrapper.find('.v-btn');

        wrapper.vm.$on('action-btn:clicked', event);

        expect(event).toHaveBeenCalledTimes(0);

        button.trigger('click');

        expect(event).toHaveBeenCalledTimes(1);
    });
});
