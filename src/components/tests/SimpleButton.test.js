import { mount } from '@vue/test-utils'
import SimpleButton from '../SimpleButton.vue'

describe('Simple Button - Understanding Emits', () => {
    it("button clicked", async () => {
        const wrapper = mount(SimpleButton)
        await wrapper.find('[data-test="btn"]').trigger('click')
        // To have property is function name
        expect(wrapper.emitted()).toHaveProperty('save')
    })
})