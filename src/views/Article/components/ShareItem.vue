<template>
    <Teleport to="body">
        <div class="share-box" @click="emits('update:show', false)" v-if="show">
            <div class="share-dialog">
                <vueQr ref="qrCode" :callback="qrCodeCallback" :text="text"></vueQr>
                <div class="ops">
                    <svg t="1703056263499" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2439" width="25" height="25"
                        @click="downLoad">
                        <path
                            d="M857.6 956.8H166.4c-54.4 0-102.4-48-102.4-105.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c0 22.4 16 41.6 38.4 41.6h694.4c19.2 0 38.4-19.2 38.4-41.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c-3.2 57.6-48 105.6-105.6 105.6z"
                            fill="#2c2c2c" p-id="2440"></path>
                        <path
                            d="M512 758.4c-19.2 0-32-12.8-32-32v-640c0-19.2 12.8-32 32-32s32 12.8 32 32v640c0 16-12.8 32-32 32z"
                            fill="#2c2c2c" p-id="2441"></path>
                        <path
                            d="M512 764.8c-9.6 0-16-3.2-22.4-9.6l-208-208c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l185.6 185.6 185.6-185.6c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-208 208c-6.4 6.4-12.8 9.6-22.4 9.6z"
                            fill="#2c2c2c" p-id="2442"></path>
                    </svg>
                </div>
            </div>
        </div>
    </Teleport>
</template>


<script setup>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import { onMounted, ref } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
})

const emits = defineEmits(['update:show'])
const text = ref('')
const qrCodeUrl = ref('')

const qrCodeCallback = (url) => {
    qrCodeUrl.value = url
}

const downLoad = () => {
    const a = document.createElement('a')
    let name = new Date().getTime();
    a.style.display = "none";
    a.download = name;
    a.href = qrCodeUrl.value;
    document.body.appendChild(a);
    a.click();
    a.remove()

}

onMounted(() => {
    text.value = window.location.href
})

</script>


<style scoped lang="scss">
.share-box {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 1, 1, 0.251);
    z-index: 100;
    display: flex;
    padding-top: 10%;
    justify-content: center;

    .share-dialog {
        padding: 20px;
        background-color: white;
        height: fit-content;
        border-radius: 10px;

        .ops {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .icon {
                cursor: pointer;
            }
        }
    }
}


</style>