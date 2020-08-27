<template>
    <div class="page">
        <div class="page-header">
            <div class="left">
                <i class="el-icon-document"></i>
                <span>表单</span>                
            </div>
        </div>
        <div class="page-content pd scroll" v-loading="loading">
            <div class="form" v-if="!loading">
                <el-form ref="form" :model="form" size="small" label-width="120px" class="w-1000">
                    
                    <!-- 常规表单组 -->
                    <el-alert title="常规表单组" type="info" :closable="false"></el-alert>
                    <el-row>
                        <el-col :md="12" :sm="24">
                            <el-form-item label="输入框1：" prop="input1" :rules="form_input_require">
                                <el-input placeholder="请输入" v-model="form.input1"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :sm="24">
                            <el-form-item label="输入框2：" prop="input2" :rules="form_input_require">
                                <el-input placeholder="请输入" v-model="form.input2">
                                    <template slot="append">单位</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="文本域：" prop="textarea" :rules="form_input_require">
                                <el-input type="textarea" :rows="3" v-model="form.textarea"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :sm="24">
                            <el-form-item label="日期：" prop="date" :rules="form_select_require">
                                <el-date-picker
                                    type="datetime" 
                                    format="yyyy-MM-dd HH:mm:ss" 
                                    value-format="yyyy-MM-dd HH:mm:ss" 
                                    v-model="form.date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :sm="24">
                            <el-form-item label="下拉：" prop="select" :rules="form_select_require">
                                <el-select v-model="form.select">
                                    <el-option :value="1" label="选项1"></el-option>
                                    <el-option :value="2" label="选项2"></el-option>
                                    <el-option :value="3" label="选项3"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="单选：" prop="radio" :rules="form_select_require">
                                <el-radio-group v-model="form.radio">
                                    <el-radio :label="1">选项1</el-radio>
                                    <el-radio :label="2">选项2</el-radio>
                                    <el-radio :label="3">选项3</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="多选：" prop="checkbox" :rules="form_select_require">
                                <el-checkbox-group v-model="form.checkbox">
                                    <el-checkbox :label="1">选项1</el-checkbox>
                                    <el-checkbox :label="2">选项2</el-checkbox>
                                    <el-checkbox :label="3">选项3</el-checkbox>
                                    <el-checkbox :label="4">选项4</el-checkbox>
                                    <el-checkbox :label="5">选项5</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="上传图片：">
                                <upload-image></upload-image>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <!-- 其他组件 -->
                    <el-alert title="其他组件" type="info" :closable="false"></el-alert>
                    
                    <el-form-item label="switch：">
                        <el-switch v-model="form.switch"></el-switch>
                    </el-form-item>
                    <el-form-item label="颜色选择器：">
                        <el-color-picker v-model="form.color"></el-color-picker>
                    </el-form-item>
                    <div class="sub-btn">
                        <el-button 
                            type="primary" 
                            icon="el-icon-check" 
                            size="small" 
                            class="w-160" 
                            @click="onClickSubmit">
                            提交
                        </el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form : {},
            loading : true
        }
    },

    mounted() {
        this.init();
    },

    methods : {
         
         /**
          * 初始化
          */
        init(){
            this.initFormModel();
            this.loading = false;
        },

        /**
         * 初始化数据原型
         */
        initFormModel(){
            this.form = {
                input1 : '',
                input2 : '',
                textarea : '',
                date : '',
                select : '',
                radio : '',
                checkbox : [],
                switch : false,
                color : ''
            }
        },

        onClickSubmit(){
            this.$refs.form.validate( (valid) => {
                if (valid) {
                    console.log(JSON.stringify(this.form))
                }
            })
            
        }
    },
}
</script>