import AbuserIndex from '../../../js/pages/abusers/Index.vue'
import { mount } from 'vue-test-utils'

describe('AbuserIndex', () => {
    it('should have mounted method', function () {
        const wrapper = mount(AbuserIndex)
        expect(typeof wrapper.data).toBe('function')
    });
})