### 项目描述
     该项目是一个商城项目
     系统 基于 rem + flex 布局
### 配置文件说明：

     1. .editorconfig 控制不同编辑器，不同系统的表现行为，例如：tab键等于多少个空格

     2. babel.config bable配置

     3. vue.config.js/.vueconfigrc 修改vue/cli3 配置

     4. jsconfig.json vscode 编辑器配置文件，这里主要配置voscode 对于webpack系统里面配置的别名(@)提供智能提示
     
     5 eslintconfig.js eslint代码规范检查规则

#### js组件库使用 vue-ydui

### 目录结构说明：

     ----src
          -- assets 静态资源
          -- components 组件
          -- routes 路由配置
          -- layout 布局页面
             -- 正常页面共有页
             -- 异常页面共有页 
          -- stores 中央仓库(这里构建仓库的时候遵守就近原则：store在物理上应该靠近与他逻辑相关的页（view）)
          -- utils 工具函数
          -- views 视图（应该由组件（components）组成）

#### 图标
     阿里图标库：https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1462661

     开发环境link进项目
     线上环境将图标资源下载到本地，避免过高的访问量被block

#### MOCK 工具
     Rap2：http://rap2.taobao.org

#### how to use


1. use cli 
```
     cd customer-small

     yarn 

     or 

     npm install

     npm run serve
```
2. use vue ui
