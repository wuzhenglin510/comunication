<template>
    <div class="container">
        <mavon-editor class="mk-container" :ishljs = true :subfield = false :defaultOpen = "defaultOpen" :editable = false v-model='article.content' :toolbars='markdownConfig'/>
        <div class="comments-container">
            <div class="comments">
                <div class="comment" v-for="(comment, idx) of commentList" v-bind:key="idx">
                    <div class="comment-box">
                        <div class="comment-text">{{comment.comment}}</div>
                        <div class="comment-footer">
                        <div class="comment-info">
                            <span class="comment-author">
                            <em>{{comment.nickname}}</em>
                            </span>
                            <span class="comment-date">{{formatDate(comment.createTime)}}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-comment">
                <textarea
                        class="comment-input"
                        placeholder="我要怎么配合他的表演，才不会显得那么突兀..."
                        v-model="comment"
                        required>
                </textarea>
                <button v-if="showComentBt" class="post-bt" v-on:click="postComment()">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { doGetArticle, doPostComment, doListComment } from '../api'

export default {
  name: 'Article',
  components: {
    mavonEditor
  },
  methods: {
    formatDate: function (timestamp) {
      let date = new Date(timestamp)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    postComment: async function () {
      this.showComentBt = false
      setTimeout(() => {
        this.showComentBt = true
      }, 2000)
      if (this.comment.trim() === '') {
        this.$notify({
          type: 'error',
          group: 'right',
          title: '回复失败',
          text: '请先填写'
        })
      } else {
        await doPostComment({articleId: this.articleId, comment: this.comment}, this.$localStorage.get('token'), this.$localStorage.get('accessCode'))
        this.$notify({
          type: 'success',
          group: 'right',
          title: '回复成功',
          text: ''
        })
        location.reload()
      }
    }
  },
  data () {
    return {
      article: {
        content: '',
        title: '',
        classify: '',
        purpose: '',
        abstract: ''
      },
      commentList: [],
      showComentBt: true,
      articleId: '',
      comment: '',
      markdownConfig: {
        readmodel: true, // 沉浸式阅读
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      defaultOpen: 'preview'
    }
  },
  mounted: async function () {
    let response = await doGetArticle(this.$route.query.articleId, this.$localStorage.get('accessCode'))
    this.articleId = this.$route.query.articleId
    this.article.content = response.data.content
    this.commentList = (await doListComment(this.$route.query.articleId, this.$localStorage.get('accessCode'))).data
  }
}
</script>

<style scoped>

.container {
    width: 100%;
    height: 100%;
}

.mk-container {
    position: fixed;
    width: 76%;
    height: 100%;
    left: 0px;
    top: 0px;
}

.comments-container {
    position: fixed;
    width: 24%;
    height: 100%;
    right: 0px;
    top: 0px;
    padding-top: 20px;
}

.post-bt {
    width: 40%;
    height: 15%;
    border-radius: 100px;
    background-color: #ffcccc;
    color: #1313136b;
}

.comment-input {
    width: 90%;
    height: 50%;
}

.comments {
    width: 100%;
    height: 70%;
    overflow-y: scroll;
}

.post-comment {
    width: 100%;
    height: 30%;
    padding-top: 10%;
    background-color: #a0a0a0;
    border-radius: 20px;
}

.comment{
  margin-bottom: 20px;
  position: relative;
  z-index: 0;
}

.comment .comment-box{
  background-color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  min-height: 60px;
  position: relative;
  padding: 15px;
  margin-left: 20px;
  margin-right: 10px;
}

.comment .comment-box:before,
.comment .comment-box:after{
  border-width: 10px 10px 10px 0;
  border-style: solid;
  border-color: transparent #FCFCFC;
  content: "";
  left: -10px;
  position: absolute;
  top: 20px;
}

.comment .comment-box:before{
  border-color: transparent rgba(0, 0, 0, .05);
   top: 22px;
}

.comment .comment-text{
  color: #555f77;
  font-size: 15px;
  margin-bottom: 25px;
}

.comment .comment-footer{
  color: #acb4c2;
  font-size: 13px;
}

.comment .comment-footer:after{
  content: "";
  display: table;
  clear: both;
}

.comment .comment-footer a{
  color: #acb4c2;
  text-decoration: none;

  -webkit-transition: 350ms color;
  -moz-transition: 350ms color;
  -ms-transition: 350ms color;
  -o-transition: 350ms color;
  transition: 350ms color;
}

.comment .comment-footer a:hover{
  color: #555f77;
  text-decoration: underline;
}

.comment .comment-info{
  float: left;
  width: 85%;
}

.comment .comment-author{ }
.comment .comment-date{ }

.comment .comment-date:before{
  content: "|";
  margin: 0 10px;
}
</style>
