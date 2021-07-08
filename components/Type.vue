<template>
    <span class="py-1 px-3 rounded-full text-xs relative md:-left-2 uppercase" :class="colors">{{ text }}</span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            defualt: '-'
        }
    },
    computed: {
        colors() {
            switch(this.text) {
                case 'crypto':
                    return ['bg-yellow-200', 'text-yellow-600']
                case 'commodity':
                    return ['bg-purple-200', 'text-purple-600']
                case 'fiat':
                    return ['bg-green-200', 'text-green-600']
            }
        }
    }
}
</script>