import { defineStore } from "pinia";


const useThemeStore = defineStore('theme', {
    state: () => ({
        dark: false,
    }),

    actions: {
        changeMode() {
            this.dark = !this.dark;
            if (this.dark) {
                document.documentElement.setAttribute('theme-mode', 'dark')
            } else {
                document.documentElement.removeAttribute('theme-mode')
            }
        }
    }
    
})


export default useThemeStore