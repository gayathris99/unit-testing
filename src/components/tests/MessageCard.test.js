import { mount } from '@vue/test-utils'
import MessageCard from '../MessageCard.vue'

describe('Message Card.vue', () => {
    it('Render props', () => {
        const wrapper = mount(MessageCard, {
            props: {
                title: 'Hello'
            }
        })
        expect(wrapper.find("[data-test='title']").text()).toBe('Hello')
    })

    it('set dynamic props', async () => {
        const wrapper = mount(MessageCard, {
            props: {
                title: 'Hello world'
            }
        })
        await wrapper.setProps({
            title: 'Hey'
        })
        expect(wrapper.find("[data-test='title']").text()).toBe('Hey')
    })
})