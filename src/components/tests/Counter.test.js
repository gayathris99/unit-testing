import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('counter.vue', () => {
    it ('intial render', () => {
        const wrapper = mount(Counter)
        expect(wrapper.find('[data-test="count"]').text()).toBe('0')
    })

    it ('Increment', async () => {
        const wrapper = mount(Counter)
        await wrapper.find('[data-test="increment"]').trigger('click')
        expect(wrapper.find('[data-test="count"]').text()).toBe('1')
    })
    it ('decrement', async () => {
        const wrapper = mount(Counter)
        await wrapper.find('[data-test="decrement"]').trigger('click')
        expect(wrapper.find('[data-test="count"]').text()).toBe('-1')
    })

    it('Check limit exixts', () => {
        const wrapper = mount(Counter)
        expect(wrapper.find('[data-test="limit"').exists()).toBe(false)
    })

    it('check after 5 clicks',async () => {
        const wrapper = mount(Counter)
        for (let i=0; i < 5; i++) {
            await wrapper.find('[data-test="increment"]').trigger('click')
        }
        expect(wrapper.find('[data-test="limit"]').exists())
        .toBe(true)
    })

    it('button not disabled initially', () => {
        const wrapper = mount(Counter)
      
        expect(wrapper.find('[data-test="increment"]').attributes('disabled'))
          .toBeUndefined()
      })
      
      it('button disabled after 5 increments', async () => {
        const wrapper = mount(Counter)
      
        for (let i = 0; i < 5; i++) {
          await wrapper.find('[data-test="increment"]').trigger('click')
        }
      
        expect(wrapper.find('[data-test="increment"]').attributes('disabled'))
          .toBeDefined()
      })

      it ('Check reset button', async () => {
        const wrapper = mount(Counter)
        for (let i =0; i < 1; i++) {
            await wrapper.find('[data-test="increment"]').trigger('click')
        }
        await wrapper.find('[data-test="reset"]').trigger('click')
        expect(wrapper.find('[data-test="count"]').text()).toBe('0')
      })
      
})