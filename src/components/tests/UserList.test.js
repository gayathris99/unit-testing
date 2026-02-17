import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import UserList from '../UserList.vue'

describe('Mock API testing', () => {
    it('show user fetch', async () => {
        const wrapper = mount(UserList)
        global.fetch = vi.fn().mockResolvedValue({
            json: () => Promise.resolve({ name: 'Gayathri '})
        })
        await new Promise (resolve => setTimeout(resolve))
        expect(wrapper.find("[data-test='user'").text()).toBe('Gayathri')
    })
})