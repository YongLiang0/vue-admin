<template lang="pug">
    .table-wrapper(ref="table")
        .table-box
            el-table(:data="data"
                height="100%"
                width="100%"
                stripe
                :size="size"
                v-bind="$attrs"
                v-on="$listeners"
                stripestyle="width: 100%"
                empty-text="暂无记录"
                ref="tableComp")
                slot
        .pagination-box( v-if="isPaginationVisible")
            el-pagination(
                @size-change="handleSizeChange"
                ref="pagination"
                @current-change="onPagination"
                :current-page="pageNo"
                :page-size="pageSize"
                :page-sizes="pageSizes"
                :layout="isPageSize ? layoutPageSize: layout"
                :total="total"
                class="align-center")
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        data: {
            required: true,
            type: Array,
            default: () => []
        },

        pageNo: {
            type: Number,
            default: 1
        },

        pageSize: {
            type: Number,
            default: 10
        },

        pageSizes: {
            type: Array,
            default: () => []
        },

        total: {
            type: Number,
            default: 0
        },

        paginationAutoHidden: {
            type: Boolean,
            default: true
        },

        draggable: {
            type: Boolean,
            boolean: false
        },

        ignoreKey: {
            type: String,
            default: 'status'
        },

        quoteKey: {
            type: Boolean,
            default: false
        },

        skipMark: {
            type: Boolean,
            default: false
        },

        igoreVal: {
            type: [String, Boolean, Number],
            default: '0'
        },

        isPageSize: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: ''
        },

        border: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        onPagination(pageNo) {
            this.$emit('pagination', pageNo)
        },

        handleSizeChange(size) {
            this.$emit('sizeChange', size)
        },

        getTable() {
            return this.$refs.tableComp
        }
    },

    computed: {
        isPaginationVisible() {
            if (!this.paginationAutoHidden) {
                return true
            }
            return this.total > this.pageSize
        },

        layout() {
            return 'total, prev, pager, next'
        },

        layoutPageSize() {
            return 'sizes, prev, pager, next'
        }
    },
    mounted() {
    },

    updated() {}
}
</script>

<style lang='scss'>

.table-wrapper {
    height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: 12px;

    .table-box {
        flex: 1;
        overflow: hidden;
        border: 1px solid #DEE5E7;
    }
}

.pagination-box {
    padding: 15px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #DEE5E7;
    margin-top: -2px;
}
</style>
