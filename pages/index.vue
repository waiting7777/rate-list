<template>
  <div class="container mx-auto">
    <div class="bg-white shadow-md rounded-md my-8">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="rates"
        :items-per-page="10"
        item-key="name"
        show-select
        :loading="loading"
        class="elevation-1"
        :dark="mode == 'dark'"
    >
      <template v-slot:item.type="{ item }">
        <Type :text="item.type" />
      </template>
    </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Type from '@/components/Type'

export default {
  components: {
    Type
  },
  data () {
    return {
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
          width: "300px"
        },
        { text: 'Type', value: 'type', align: 'center', },
        { text: 'Unit', value: 'unit', align: 'end', },
        { text: 'Value', value: 'value', align: 'end', width: "200px"},
      ],
      rates: [],
      timer: null,
      loading: true
    }
  },
  computed: {
    mode() {
      return this.$store.state.settings.mode
    }
  },
  mounted() {
    this.getData()
    this.timer = setInterval(() => {
      this.getData()
    }, 300000)
  },
  methods: {
    ...mapMutations('settings', ['setState']),
    getData() {
      this.$axios.get('https://api.coingecko.com/api/v3/exchange_rates').then(res => {
        this.loading = false
        if (res.data.rates) {
          this.rates = Object.values(res.data.rates)
          this.setState({ key: 'error', value: false })
        }
      }).catch(() => {
        this.loading = false
        this.setState({ key: 'error', value: true })
      })
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td:nth-child(1) {
    font-weight: bold;
  }
  .theme--dark.v-data-table {
    border: rgba(255, 255, 255, 0.2) 1px solid;
  }
  @media screen and (max-width: 768px) {
    
   .v-data-footer {
      flex-wrap: nowrap;
    }
    .v-data-footer__select {
      margin-right: 4px;
      .v-input {
        margin-left: 18px;
      }
    }
    .v-data-footer__pagination {
      margin: 0 12px;
    } 
  }
}
</style>
