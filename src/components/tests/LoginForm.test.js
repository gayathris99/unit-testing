import { mount } from '@vue/test-utils'
import LoginForm from '../LoginForm.vue'

describe('Login Form', () => {
    it ('shows error for submitting empty form', async () => {
        const wrapper = mount(LoginForm)

        await wrapper.find('[data-test="submit"]').trigger('submit')
    
        expect(wrapper.find('[data-test="error"]').exists())
          .toBe(true)
    })

    it('Show no error when value is entered', async () => {
        const wrapper = mount(LoginForm)
        await wrapper.find('[data-test="email"]').setValue('test@test.com')
        await wrapper.find('[data-test="submit"]').trigger('submit')
    
        expect(wrapper.find('[data-test="error"]').exists())
          .toBe(false)
    })

    it('check if corrct email is emitted', async () => {
        const wrapper = mount(LoginForm)
        await wrapper.find('[data-test="email"]').setValue('test@test.com')
        await wrapper.find('[data-test="submit"]').trigger('submit')
        const events = wrapper.emitted('submit')
        expect(events[0]).toEqual(['test@test.com'])
    })
})