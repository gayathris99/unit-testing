import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import ActionButton from '../ActionButton.vue'

describe('Action Button', () => {
    it('calls action when clicked', async () => {
        const mockFn = vi.fn()
        const wrapper = mount(ActionButton, {
            props: {
                onAction: mockFn
            }
        })
        await wrapper.find("[data-test='btn']").trigger('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})