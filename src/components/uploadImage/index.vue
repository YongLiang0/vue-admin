<template>
    <div>
        <div class="upload-image">
            <div class="upload-btn" @click="onClickSelectFile" v-loading="loading">
                <i class="el-icon-plus"></i>
            </div>
            <el-image style="width: 100px; height: 100px" :src="value" fit="cover" v-if="isRightUrl"></el-image>
        </div>
        <input style="display:none;" type="file" ref="file" @change="onChangeFile">
    </div>
</template>

<script>
// import upload from '@/common/upload.js';
export default {
    props : {
        value : {
            type : String
        },
        uploadApi : {
            type : String
        }
    },

    watch: {
        value(newVal,oldVal){
            this.displayImage();
        }
    },

    data() {
        return {
            displayUrl : '',
            loading : true,
            isRightUrl :false
        }
    },

    mounted(){
        this.displayImage();
    },

    methods: {

        /**
         * 展示图片
         */
        displayImage(){
            this.displayUrl = this.value;
            if(this.displayUrl != undefined){
                this.loading = true;
                this.isRightUrl = false;
                let image = new Image();
                image.src = this.displayUrl;
                image.onerror = () => {
                    this.loading = false;
                };
                image.onload = () => {
                    this.loading = false;
                    this.isRightUrl = true;
                };
            }
        },

        /**
         * 选择文件点击事件
         */
        onClickSelectFile(){
            this.$refs.file.click();
        },

        /**
         * 选择文件change事件
         */
        onChangeFile(e){
            this.loading = true;
            this.isRightUrl = false;
            let files = e.target.files[0];
            let params = new FormData();
            params.append('file',files);
            this.uploadFile(params);
        },

        /**
         * 上传文件
         */
        async uploadFile(params){
            // let api = this.uploadApi || '';
            // let res = await upload(api,params);
            // this.displayUrl = res.body.filePath;
            // this.$emit('input',res.body.filePath);
            this.$refs.file.value = '';
        }
    },
}
</script>

<style lang="scss" scoped>
.upload-image{
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px dashed #ddd;

    .upload-btn{
        position: absolute;
        left: 4px;
        top: 4px;
        right: 4px;
        bottom: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 24px;
        color: #999
    }
}
    
</style>