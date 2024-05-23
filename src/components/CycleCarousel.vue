<template>
    <div ref="elements" id="technologies-list" class="pr-12">
        <h1 v-for="item in list">{{ item }}</h1>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    const elements = ref(null)

    const props = defineProps({
        list: {
            type :Array,
            required:true
        },
        color: {
            type:String,
            default:'gray'
        }
    })

    onMounted(() => {
        let technologies = elements.value.children;
        let count = 0;

        function cycleArray() {
            let current = technologies[count];
            let totalCount = technologies.length
            
            current.classList = `text-${props.color}-800/100 text-3xl`;
            const faded = `text-${props.color}-800/15`;

            for(let i = 0; i < totalCount; i++)
            {
                const t = technologies[i];
                if(t !== current)
                {     
                const range = Math.abs(count - i);
                const gradient = round(100 - ((100 / 800) * (100 * range)));
                const className = `text-${props.color}-800/${gradient >= 5 ? gradient : 5}`;
                
                t.classList = className;
                
                if(count === 0)
                    technologies[totalCount - 1].classList = faded;
                else if (count === totalCount - 1)
                    technologies[0].classList = faded;
                }
            }
        
            count++;

            if (count === totalCount) {
                count = 0;
            }
        }   

        cycleArray()
        setInterval(cycleArray, 1000);

        function round(x: number) {
            if (x % 5 == 0) { 
                return (Math.floor(x / 5)) * 5; 
            } else { 
                return ((Math.floor(x / 5)) * 5) + 5; 
            } 
        } 
    });
</script>