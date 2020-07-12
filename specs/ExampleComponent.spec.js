import Vue from 'vue'
import { mount } from '@vue/test-utils';
import ExampleComponent from '../resources/assets/js/components/ExampleComponent';

// alternatively, you can instantiate Vue from the 'setup/index.js' file
// Vue.config.productionTip = false

describe('ExampleComponent.vue', () => {
    it('should render correct contents', () => {
        const wrapper = mount(ExampleComponent)
        expect(wrapper.find('.panel-heading').text())
            .to.equal('Example Component');
    });
});
