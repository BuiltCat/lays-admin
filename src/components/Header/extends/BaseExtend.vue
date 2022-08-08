<script setup lang="ts">
    import { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface';
    const { tip } = defineProps<{
        tip: string;
        options?: DropdownMixedOption[];
    }>();
    const emit = defineEmits(['handleClick', 'handleSelect']);
</script>
<template>
    <NDropdown
        trigger="click"
        :options="options"
        @select="(e) => emit('handleSelect', e)"
    >
        <NPopover trigger="hover" placement="bottom">
            <template #trigger>
                <NButton @click="emit('handleClick')" circle quaternary>
                    <template #icon>
                        <NIcon><slot></slot></NIcon>
                    </template>
                </NButton>
            </template>
            <span>{{ tip }}</span>
        </NPopover>
    </NDropdown>
</template>
