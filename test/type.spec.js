import { mount } from '@vue/test-utils'
import Type from '@/components/Type.vue'

describe('Type', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Type)
    expect(wrapper.vm).toBeTruthy()
  })

  test('check text render', () => {
    const wrapper = mount(Type, {
        propsData: {
            text: 'fiat'
        }
    })
    expect(wrapper.find('span').attributes().class).toContain('bg-green-200')
  })

  test('check text render', () => {
    const wrapper = mount(Type, {
        propsData: {
            text: 'crypto'
        }
    })
    expect(wrapper.find('span').attributes().class).toContain('bg-yellow-200')
  })

  test('check text render', () => {
    const wrapper = mount(Type, {
        propsData: {
            text: 'commodity'
        }
    })
    expect(wrapper.find('span').attributes().class).toContain('bg-purple-200')
  })
})
