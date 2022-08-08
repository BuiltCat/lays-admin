<script setup lang="ts">
    import { ref } from 'vue';
    import { NotificationsOutline } from '@vicons/ionicons5';
    import { NCard } from 'naive-ui';
    const tabData = ref([
        {
            key: 1,
            name: '通知',
            badgeProps: { type: 'warning' },
            list: [
                {
                    id: 1,
                    icon: 'ri:message-3-line',
                    title: '你收到了5条新消息',
                    date: '2022-06-17',
                },
                {
                    id: 4,
                    icon: 'ri:message-3-line',
                    title: 'Soybean Admin 1.0.0 版本正在筹备中',
                    date: '2022-06-17',
                },
                {
                    id: 2,
                    icon: 'ri:message-3-line',
                    title: 'Soybean Admin 0.9.6 版本发布了',
                    date: '2022-06-16',
                },
                {
                    id: 3,
                    icon: 'ri:message-3-line',
                    title: 'Soybean Admin 0.9.5 版本发布了',
                    date: '2022-06-07',
                },
                {
                    id: 5,
                    icon: 'ri:message-3-line',
                    title: '测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题',
                    date: '2022-06-17',
                },
            ],
        },
        {
            key: 2,
            name: '消息',
            badgeProps: { type: 'error' },
            list: [
                {
                    id: 1,
                    title: '项目动态',
                    svgIcon: 'avatar',
                    description:
                        'Soybean 刚才把工作台页面随便写了一些，凑合能看了！',
                    date: '2021-11-07 22:45:32',
                },
                {
                    id: 2,
                    title: '项目动态',
                    svgIcon: 'avatar',
                    description:
                        'Soybean 正在忙于为soybean-admin写项目说明文档！',
                    date: '2021-11-03 20:33:31',
                },
                {
                    id: 3,
                    title: '项目动态',
                    svgIcon: 'avatar',
                    description:
                        'Soybean 准备为soybean-admin 1.0的发布做充分的准备工作！',
                    date: '2021-10-31 22:43:12',
                },
                {
                    id: 4,
                    title: '项目动态',
                    svgIcon: 'avatar',
                    description:
                        '@yanbowe 向soybean-admin提交了一个bug，多标签栏不会自适应。',
                    date: '2021-10-27 10:24:54',
                },
                {
                    id: 5,
                    title: '项目动态',
                    svgIcon: 'avatar',
                    description:
                        'Soybean 在2021年5月28日创建了开源项目soybean-admin！',
                    date: '2021-05-28 22:22:22',
                },
            ],
        },
        {
            key: 3,
            name: '待办',
            badgeProps: { type: 'info' },
            list: [
                {
                    id: 1,
                    icon: 'ri:calendar-todo-line',
                    title: '缓存主题配置',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
                {
                    id: 2,
                    icon: 'ri:calendar-todo-line',
                    title: '添加锁屏组件、全局Iframe组件',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
                {
                    id: 3,
                    icon: 'ri:calendar-todo-line',
                    title: '示例页面完善',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
                {
                    id: 4,
                    icon: 'ri:calendar-todo-line',
                    title: '表单、表格示例',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
                {
                    id: 5,
                    icon: 'ri:calendar-todo-line',
                    title: '性能优化(优化递归函数)',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
                {
                    id: 6,
                    icon: 'ri:calendar-todo-line',
                    title: '精简版(新分支thin)',
                    description: '任务正在计划中',
                    date: '2022-06-17',
                    tagTitle: '未开始',
                    tagProps: { type: 'default' },
                },
            ],
        },
    ]);
</script>
<template>
    <div class="lays-message">
        <NPopover trigger="hover" placement="bottom">
            <template #trigger>
                <NPopover trigger="click" placement="bottom" :raw="true">
                    <template #trigger>
                        <NButton circle quaternary>
                            <template #icon>
                                <NIcon><NotificationsOutline /></NIcon>
                            </template>
                        </NButton>
                    </template>
                    <NCard
                        class="lays-message-card"
                        :content-style="{ padding: 0 }"
                    >
                        <n-tabs
                            type="line"
                            justify-content="space-evenly"
                            :pane-style="{ padding: 0 }"
                        >
                            <n-tab-pane
                                v-for="tab in tabData"
                                :name="tab.name"
                                :key="tab.key"
                            >
                                <template #tab>
                                    <span>{{ tab.name }}</span>
                                    <n-badge
                                        :value="tab.list.length"
                                        :max="100"
                                    />
                                </template>
                                <NList class="lays-message-list">
                                    <NListItem
                                        class="hover-c-transparent-r"
                                        v-for="item of tab.list"
                                    >
                                        <template #prefix>
                                            <n-button>Prefix</n-button>
                                        </template>
                                        <!-- <template v-if="item.tagTitle" #suffix>
                                            <n-button>{{
                                                item.tagTitle
                                            }}</n-button>
                                        </template> -->
                                        <NThing>
                                            <template #header>
                                                <n-ellipsis
                                                    style="max-width: 190px"
                                                >
                                                    {{ item.title }}
                                                </n-ellipsis>
                                            </template>
                                            <!-- <template #description>
                                                {{ item.description }}
                                            </template> -->
                                            <template #footer>
                                                {{ item.date }}
                                            </template>
                                        </NThing>
                                    </NListItem>
                                </NList>
                            </n-tab-pane>
                        </n-tabs>
                        <div class="flex border-t border-$n-divider-color">
                            <div class="py-10px text-center flex-1">
                                <n-button quaternary type="info">
                                    清空
                                </n-button></div
                            >
                            <div
                                class="py-10px text-center border-l flex-1 border-$n-divider-color"
                            >
                                <n-button quaternary type="success">
                                    全部已读
                                </n-button></div
                            >
                            <div
                                class="py-10px text-center border-l flex-1 border-$n-divider-color"
                            >
                                <n-button quaternary type="warning">
                                    查看更多
                                </n-button></div
                            >
                        </div>
                    </NCard>
                </NPopover>
            </template>
            <span>{{ $t('extends.notice') }}</span>
        </NPopover>
    </div>
</template>
<style scoped lang="less">
    .lays-message-card {
        width: 400px;

        .lays-message-list {
            height: 400px;
            padding: 0 10px;
            margin: 0;
            overflow-y: scroll;
        }
    }
</style>
