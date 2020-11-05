<template>
    <div class="page">
        <div class="page-filter">
            <div class="filter-form flex" :class="isShowAllFilter ? 'all' : ''">
                <div class="grow">
                    <el-form size="small" label-width="120px" label-position="left">
                        <el-row>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="姓名：" >
                                    <el-input placeholder="请输入姓名" class="w-220"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="状态：" >
                                    <el-select></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="开始日期：" >
                                    <el-date-picker
                                        type="datetime" 
                                        format="yyyy-MM-dd HH:mm:ss" 
                                        value-format="yyyy-MM-dd HH:mm:ss" 
                                        placeholder="选择开始日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="结束日期：" >
                                    <el-date-picker
                                        type="datetime" 
                                        format="yyyy-MM-dd HH:mm:ss" 
                                        value-format="yyyy-MM-dd HH:mm:ss" 
                                        placeholder="选择结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="姓名：" >
                                    <el-input placeholder="请输入姓名" class="w-220"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="状态：" >
                                    <el-select></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="姓名：" >
                                    <el-input placeholder="请输入姓名" class="w-220"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="状态：" >
                                    <el-select></el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xl="8" :lg="12" :md="24">
                                <el-form-item label="状态：" >
                                    <el-select></el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <a class="more flex jc" @click="isShowAllFilter = !isShowAllFilter">
                    <i :class="isShowAllFilter ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                    <span v-text="isShowAllFilter ? '收起' : '展开'"></span>
                </a>
            </div>
            <div class="filter-btn flex">
                <div class="grow">
                    <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
                    <el-button type="warning" size="mini" icon="el-icon-close">重置</el-button>
                </div>
                <div class="je">
                    <el-button type="success" size="mini" icon="el-icon-plus">新增</el-button>
                </div>
            </div>
        </div>
        <div class="page-content">
            <dynamic-table
                :data="list"
                :total="totalCount"
                :pageSize="filters.pageSize"
                :pageNo="filters.pageNumber"
                size="mini"
                @pagination="pageChange">
                <el-table-column label="序号" show-overflow-tooltip width="60">
                    <template slot-scope="scope">
                        <span v-text="scope.$index+(filters.pageNumber - 1) * filters.pageSize + 1"></span>
                    </template>
                </el-table-column>
                <el-table-column label="用户名" prop="userName"></el-table-column>
                <el-table-column label="性别" prop="sex"></el-table-column>
                <el-table-column label="城市" prop="city"></el-table-column>
                <el-table-column label="技能" prop="skill"></el-table-column>
                <el-table-column label="积分" prop="integral"></el-table-column>
                <el-table-column label="职业" prop="job"></el-table-column>
                <el-table-column label="操作" width="260">
                    <template slot-scope="scope">
                        <el-button type="success" size="mini" icon="el-icon-edit-outline" @click="onClickUpdate(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" icon="el-icon-close" @click="onClickDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </dynamic-table>
        </div>
    </div>
</template>

<script>
import { TABLE_DATA } from "./test_data.js";
export default {
    data() {
        return {
            list : TABLE_DATA,
            totalCount : 100,
            isShowAllFilter : false,
            filters : {
                pageSize : 10,
                pageNumber : 1
            }
        }
    },

    methods : {


        pageChange(page){
            this.$message(`当前第${page}页`);
        },

        onClickUpdate(){

        },

        onClickDelete(){
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$success("删除成功!");
            }).catch(() => {
            
            });
        }
    },
}
</script>