import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter.vue', () => {
    it('renders intial count', () => {
        const wrapper = mount(Counter)
        expect(wrapper.find('[data-test="count"]').text())
        .toBe('0')
    })
})