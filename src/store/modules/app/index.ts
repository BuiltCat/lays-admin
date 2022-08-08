import { defineStore } from 'pinia';
import { AppState } from './types';

const useAppStore = defineStore('app', {
    state: (): AppState => ({
        theme: 'light',
        collapsed: true,
    }),
    actions: {
        toggleTheme(dark: boolean) {
            if (dark) {
                this.theme = 'dark';
            } else {
                this.theme = 'light';
            }
        },
        toggleCollapsed(collapsed: boolean) {
            this.collapsed = collapsed;
        },
    },
});

export default useAppStore;
