export const state = () => ({
  mode: 'light',
  error: false
})

export const mutations = {
  setState(state, payload) {
    state[payload.key] = payload.value
  },
  toggleMode(state) {
    if (state.mode == 'light') {
      state.mode = 'dark'
    } else {
      state.mode = 'light'
    }
  }
}