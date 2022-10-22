import { shallowMount } from '@vue/test-utils';
import HelloWorldTemp from '@/components/HelloWorldTemp.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';

        const wrapper = shallowMount(HelloWorldTemp, {
            propsData: { msg },
        });

        expect(wrapper.text()).toMatch(msg);
    });
});
