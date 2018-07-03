<template>
    <div >
        <div class="bg"></div>
        <div>
            <div class='vertical-align'>
                <div class='btns'>
                    <label>
                        <input v-model="article.classify" name='button-group' type='radio' value='前端'>
                        <span class='btn first'>前端</span>
                    </label>
                    <label>
                        <input v-model="article.classify" name='button-group' type='radio' value='后端'>
                        <span class='btn'>后端</span>
                    </label>
                    <label>
                        <input v-model="article.classify" name='button-group' type='radio' value='' disabled=true>
                        <span class='btn' disabled=true>选择类别</span>
                    </label>
                    <label>
                        <input v-model="article.classify" name='button-group' type='radio' value='产品'>
                        <span class='btn'>产品</span>
                    </label>
                    <label>
                        <input v-model="article.classify" name='button-group' type='radio' value='设计'>
                        <span class='btn last'>设计</span>
                    </label>
                </div>
            </div>
            <div class='vertical-align2'>
                <div class='btns'>
                    <label>
                        <input v-model="article.purpose" name='button-group2' type='radio' value='推荐'>
                        <span class='btn first'>推荐</span>
                    </label>
                    <label>
                        <input v-model="article.purpose" name='button-group2' type='radio' value='想法'>
                        <span class='btn'>想法</span>
                    </label>
                    <label>
                        <input v-model="article.purpose" name='button-group2' type='radio' value='' disabled=true>
                        <span class='btn' disabled=true>选择目的</span>
                    </label>
                    <label>
                        <input v-model="article.purpose" name='button-group2' type='radio' value='分享'>
                        <span class='btn'>分享</span>
                    </label>
                    <label>
                        <input v-model="article.purpose" name='button-group2' type='radio' value='吐槽'>
                        <span class='btn last'>吐槽</span>
                    </label>
                </div>
            </div>
            <input type='text' v-model="article.title"  class="input-text" placeholder="做个有内涵的标题党"/>
            <input type='text' v-model="article.abstract"  class="input-text" placeholder="摘要"/>
        </div>
        <mavon-editor ref=md @imgAdd="$imgAdd" class="mk-container" :ishljs = "true" v-model='article.content' :toolbars='markdownConfig'/>
        <button v-if="showPostBt" class="post-bt" v-on:click="post()">发布</button>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { doPostArticle, doGetArticle, doUpload } from '../api'

export default {
  name: 'CreateArticle',
  components: {
    mavonEditor
  },
  methods: {
    $imgAdd: async function (pos, $file) {
      var formdata = new FormData()
      formdata.append('image', $file)
      let url = await doUpload(formdata, this.$localStorage.get('accessCode'))
      this.$refs.md.$img2Url(pos, url)
    },
    go: function (name, params) {
      this.$router.push({name, query: params})
    },
    post: async function () {
      this.showPostBt = false
      let response = await doPostArticle(this.article, this.$localStorage.get('token'), this.$localStorage.get('accessCode'))
      this.$notify({
        type: 'success',
        group: 'right',
        title: '发布成功',
        text: '2秒后跳转详情页'
      })
      setTimeout(() => {
        this.go('Article', {'articleId': response.data.articleId})
      }, 2000)
    }
  },
  mounted: async function () {
    if (this.$route.query.articleId) {
      let response = await doGetArticle(this.$route.query.articleId, this.$localStorage.get('accessCode'))
      this.article.id = response.data.id
      this.article.title = response.data.title
      this.article.content = response.data.content
      this.article.classify = response.data.classify
      this.article.purpose = response.data.purpose
      this.article.abstract = response.data.abstract
    }
  },
  data () {
    return {
      showPostBt: true,
      article: {
        id: undefined,
        content: '',
        title: '',
        classify: '',
        purpose: '',
        abstract: ''
      },
      markdownConfig: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        // save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.post-bt {
    width: 100px;
    height: 50px;
    border-radius: 100px;
    margin-top: 30px;
    font-size: 20px;
    outline:none;
}

.post-bt:hover {
    background-color: #99CCFF
}

.post-bt:active {
    background-color: #3399CC
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #333333;
  margin-top: 60px;
}

.input-text {
  display: block;
  margin: 30px auto;
  padding: 0 30px;
  color: inherit;
  text-align: center;
  width: 600px;
  height: 40px;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
}

body {
  font-family: Roboto Condensed, Helvetica Neue, sans-serif;
  display: table;
  height: 100%;
  width: 100%;
}

.bg {
    background-color: #333333;
    width: 100%;
    height: 1000px;
    z-index: -100;
    position: fixed;
    left: 0px;
    top: 0px;
}

.mk-container {
    width: 90%;
    margin: 0 auto;
    height: 450px;
}

.vertical-align {
  display: table-cell;
  vertical-align: middle;
  display: block;
  left: 10%;
  position: fixed;
  margin-top: -50px;
}

.vertical-align2 {
  display: table-cell;
  vertical-align: middle;
  display: block;
  right: 10%;
  position: fixed;
  margin-top: -50px;
}

.button-link {
  text-decoration: none;
}

.btns {
  background-color: #ff9035;
  background-image: linear-gradient(
    100deg,
    #ff5a64 0%,
    #faa04b 30%,
    #d2dc69 70%,
    #0ef49b 100%
  );
  z-index: 0;
  height: 30px;
  float: none;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  border-radius: 40px;
  display: block;
  box-shadow: 0 2px 4px -1px rgba(25, 25, 25, 0.2);
}
.btns input {
  display: none;
}
.btns label {
  display: table;
  float: left;
  padding: 0;
  width: 20%;
  height: 100%;
  margin: 0;
  text-align: center;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}
.btns label:first-child {
  border-left: none;
  border-radius: 40px 0 0 40px;
}
.btns label:last-child {
  border-radius: 0 40px 40px 0;
}
.btns .btn {
  font-size: 19px;
  cursor: pointer;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  font-weight: 300;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 30px 20px -20px rgba(255, 255, 255, 0.15);
  transition: color 250ms cubic-bezier(0.165, 0.84, 0.44, 1),
    box-shadow 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .btn:hover {
  box-shadow: inset 0 30px 30px -20px rgba(50, 50, 50, 0.02);
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.btns .btn:after {
  content: '\2714';
  margin-left: -10px;
  display: inline-block;
  -webkit-transform: scale(0);
  transform: scale(0);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,
    -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,
    transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,
    transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22),
    -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .first {
  border-radius: 40px 0 0 40px;
}
.btns .last {
  border-radius: 0 40px 40px 0;
}
.btns input:checked + .btn {
  color: #5f6982;
  text-shadow: none;
  background-image: linear-gradient(
    to top,
    rgba(25, 25, 25, 0) 65%,
    rgba(25, 25, 25, 0.08)
  );
  box-shadow: inset 0 10px 50px rgba(25, 25, 25, 0.08);
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms;
}
.btns input:checked + .btn:after {
  margin-left: 12px;
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
  transition: margin 500ms,
    -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,
    margin 500ms;
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,
    margin 500ms,
    -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
}

</style>
