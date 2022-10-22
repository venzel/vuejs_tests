import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Data from '@/components/Data.vue';

describe('Data.vue', () => {
    let localVue, vuetify, wrapper;

    beforeEach(() => {
        localVue = createLocalVue();

        vuetify = new Vuetify();

        wrapper = mount(Data, {
            localVue,
            vuetify,
            data() {
                return {
                    message: 'world',
                };
            },
        });
    });

    it('...', () => {
        expect(wrapper.html()).toContain('Hello world');
    });
});
