<template>
    <div>
        <div class="menu-container">
            <input type='checkbox' id='menu-toggle'/>
            <label id='trigger' for='menu-toggle'></label>
            <label id='burger' for='menu-toggle'></label>
            <ul id='menu'>
                <li><a href='#'>首页</a></li>
                <li><a href='#'>前端</a></li>
                <li><a href='#'>后端</a></li>
                <li><a href='#'>产品</a></li>
                <li><a href='#'>设计</a></li>
            </ul>
        </div>
        <idea-panel :ideas='ideas'></idea-panel>
    </div>
</template>

<script>
import IdeaPanel from '@/components/IdeaPanel'
export default {
  name: 'Advice',
  components: { IdeaPanel },
  data () {
    return {
      ideas: [
        {
          purpose: '推荐',
          title: 'node_power_server',
          abstract:
            '为了前端快速实现基于node的前端后置层，写了个基于koa, koa-proxies的组件，欢迎各位来当小白鼠，随便吐槽，虚心接受，坚决不改',
          createTime: 1530326839679
        },
        {
          purpose: '推荐',
          title: '使用json schema 定义前端接口',
          abstract: 'json schema具有完善的限定语法，可以满足多场景的数据格式要求，能今早的展现出前后端逻辑的问题',
          createTime: 1530326839679
        },
        {
          purpose: '想法',
          title: '能否给每个项目提供一个开发人员可以使用的docker容器',
          abstract: '测试环境可以由项目开发者去维护自己项目的docker镜像，不需要什么事情都着运维同学',
          createTime: 1530326839679
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 20%;
    height: 100%;
    z-index: 9999;
}

@keyframes checked-anim {
    50% {
        width: 100%;
        height: 50%;
    }
    100% {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}
@keyframes not-checked-anim {
    0% {
        width: 20%;
        height: 100%;
    }
}
li, a {
    margin: 75px 0 -55px 0;
    color: #03A9F4;
    font: 14pt "Roboto", sans-serif;
    font-weight: 700;
    line-height: 1.8;
    text-decoration: none;
    text-transform: none;
    list-style: none;
    outline: 0;
    display: none;
}
li {
    width: 230px;
    text-indent: 56px;}
a:focus {
    display: block;
    color: #333;
    background-color: #eee;
    transition: all .5s;
}
aside {
    position: absolute;
    color: white;
    top: 35%;
    right: 10%;
    text-align: right;
}
h1 {
    line-height: 0;
    font-size: 4vw;
    font-weight: 700;
}
h3 {
    float: right;
    line-height: .3;
    font-size: 2.5vw;
    font-weight: lighter;
}
h4 {
    float: left;
    margin-left: -2%;
    font-size: 1.5vw;
    font-weight: lighter;
}

html, body {
    margin: 0;
    padding: 0;
    background-color: #03A9F4;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
}

#trigger, #burger, #burger:before, #burger:after {
    position: absolute;
    top: 25px;
    left: 25px;
    background: #03A9F4;
    width: 30px;
    height: 5px;
    transition: .2s ease;
    cursor: pointer;
    z-index: 1;
}
#trigger {
    height: 25px;
    background: none;
}
#burger:before {
    content: " ";
    top: 10px;
    left: 0;
}
#burger:after {
    content: " ";
    top: 20px;
    left: 0;
}
#menu-toggle:checked + #trigger + #burger {
    top: 35px;
    transform: rotate(180deg);
    transition: transform .2s ease;
}

#menu-toggle:checked + #trigger + #burger:before {
    width: 20px;
    top: -2px;
    left: 18px;
    transform: rotate(45deg) translateX(-5px);
    transition: transform .2s ease;
}
#menu-toggle:checked + #trigger + #burger:after {
    width: 20px;
    top: 2px;
    left: 18px;
    transform: rotate(-45deg) translateX(-5px);
    transition: transform .2s ease;
}
#menu {
    position: absolute;
    margin: 0; padding: 0;
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-bottom-right-radius: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
    animation: not-checked-anim .2s both;
    transition: .2s;
}
#menu-toggle:checked + #trigger + #burger + #menu {
    animation: checked-anim 1s ease both;
}
#menu-toggle:checked + #trigger ~ #menu > li, a {
    display: block;
}
[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
    display: none;
}
</style>
