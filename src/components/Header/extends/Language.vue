<script setup lang="ts">
    import { LanguageOutline } from '@vicons/ionicons5';
    import BaseExtend from './BaseExtend.vue';
    import { LOCAL_OPTIONS } from '@/locale';
    import { computed } from 'vue';
    import useLocale from '@/hooks/locale';

    const { changeLocale } = useLocale();
    const options = computed(() => {
        return LOCAL_OPTIONS.map((option) => {
            return {
                label: option.label,
                key: option.value,
            };
        });
    });
    const handleSelect = (key: string) => {
        changeLocale(key);
    };
</script>
<template>
    <NDropdown trigger="click" :options="options" @select="handleSelect">
        <NPopover trigger="hover" placement="bottom">
            <template #trigger>
                <NButton circle quaternary>
                    <template #icon>
                        <NIcon><LanguageOutline /></NIcon>
                    </template>
                </NButton>
            </template>
            <span>{{ $t('extends.language') }}</span>
        </NPopover>
    </NDropdown>
</template>
