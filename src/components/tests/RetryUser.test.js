import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import RetryUser from '../RetryUser.vue'

describe('Mock Retry API',  () => {
    it('call fail once, success on retry',  async() => {
        global.fetch = vi.fn()
        .mockRejectedValueOnce(new Error('Fail'))
        .mockResolvedValueOnce({
            json: () => Promise.resolve({ name: 'Gayathri' })
        })
        const wrapper = mount(RetryUser)
        // fIRST API CALL
        await new Promise(r => setTimeout(r))

        expect(wrapper.find('[data-test="error"]').exists()).toBe(true)
        await wrapper.find('[data-test="retry"]').trigger('click')
        await new Promise(r => setTimeout(r))

        expect(wrapper.find("[data-test='user']").text()).toBe('Gayathri')

        expect(global.fetch).toHaveBeenCalledTimes(2)
    })
})