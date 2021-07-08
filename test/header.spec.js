import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Header from '@/components/Header.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Header', () => {
    let state
    let store
    let mutations
    let vuetify

    beforeEach(() => {
        state = {
            mode: 'light'
        }

        mutations = {
            toggleMode: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                settings: {
                    namespaced: true,
                    state,
                    mutations
                }
            }
        })

        vuetify = new Vuetify()
    })
  
    it('check render', () => {
        const wrapper = shallowMount(Header, { store, vuetify, localVue, stubs: { NuxtLink: true, Icon: true } })
        expect(wrapper.vm).toBeTruthy()
    })

    it('check mode toggle', () => {
        const wrapper = shallowMount(Header, { store, vuetify, localVue, stubs: { NuxtLink: true, Icon: true } })
        const toggle = wrapper.find('#toggle')
        toggle.trigger('click')
        expect(mutations.toggleMode).toHaveBeenCalled()
    })
  })
