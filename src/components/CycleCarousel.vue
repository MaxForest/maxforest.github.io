<template>
    <ul ref="cycleList" id="cycle-list" class="pr-12 list-none">
        <li v-for="item in list">{{ item }}</li>
    </ul>
</template>
<style scoped>
    #cycle-list li {
        transition: font-size 1s, color 0.5s, margin-top 0.5s, margin-bottom 0.5s, line-height 0.5s linear;
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        line-height: 2.25rem !important;
    }
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const cycleList = ref(null)

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
    startIndex: {
        type: Number,
        default: 0
    },
    startShade: {
        type: Number,
        default: 900
    },
    interval: {
        type: Number,
        default: 1500
    },
    color: {
        type: String,
        default: 'gray'
    }
})

onMounted(() => {
    const elements = cycleList.value.children;
    const totalCount = elements.length

    let count = props.startIndex;

    function cycleArray() {
        const current = elements[count];
        const faded = `text-${props.color}-${props.startShade}/${shade(totalCount)}`;
        
        for (var i = 0; i < totalCount; i++) {
            const t = elements[i];

            if (t === current) {
                t.classList = 'text-forest-green lg:text-lg';
            }
            else {
                const range = Math.abs(count - i);
                const className = `text-${props.color}-${props.startShade}/${shade(range)}`;

                t.classList = className;

                if (count === 0)
                    elements[totalCount - 1].classList = faded;
                else if (count === totalCount - 1)
                    elements[0].classList = faded;
            }
        }

        count++;

        if (count === totalCount) {
            count = 0;
        }
    }

    cycleArray()
    setInterval(cycleArray, props.interval);

    function shade(x: number)
    {
        var shade = round(100 - ((100 / totalCount) * (x + 1)));
        return shade >= 5 ? shade : 5;
    }

    function round(x: number) {
        if (x % 5 == 0) {
            return (Math.floor(x / 5)) * 5;
        } else {
            return ((Math.floor(x / 5)) * 5) + 5;
        }
    }
});
</script>