import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '@/pages/index.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Index', () => {
    let vuetify
    let state
    let store
    let mutations
    let mock = jest.fn(() => Promise.resolve({ data: { rates: [] }}))

    beforeEach(() => {
        state = {
          mode: 'light'
        }

        mutations = {
          setState: jest.fn()
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
        const wrapper = shallowMount(Index, { store, vuetify, localVue, mocks: {
            $axios: {
              get: mock
            }
          } })
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.vm.timer).not.toBe(null)
    })

    it('check render', () => {
        const wrapper = shallowMount(Index, { store, vuetify, localVue, mocks: {
            $axios: {
              get: mock
            }
          } })
        expect(wrapper.vm.rates).toStrictEqual([])
    })
  })
