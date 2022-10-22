import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Increment from '@/components/Increment.vue';

describe('Increment.vue', () => {
    let localVue;
    let vuetify;
    let wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Increment, {
            localVue,
            vuetify,
        });
    });

    it('should render the card and the button', () => {
        expect(wrapper.find('[class-id="increment-card"]').exists()).toBe(true);
    });
});
