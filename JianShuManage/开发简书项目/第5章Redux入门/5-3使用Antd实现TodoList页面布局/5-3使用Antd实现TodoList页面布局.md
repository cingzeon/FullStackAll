### 5-3使用Antd实现TodoList页面布局
```jsx
    Store 的

    运行 npm run eject 报错，如下解决方法
        create-react-app my-react-app
        cd my-react-app
        git init
        git add .
        git commit -m 'Saving before ejecting'
        npm run eject
        按照以上顺序就可以正常使用
        主要问题是脚手架添加.gitgnore文件，但是却没有本地仓库

    1. 安装 antd
            $ yarn add antd
    2. 安装 `babel-plugin-import`
            网址：https://github.com/ant-design/babel-plugin-import
            $ yarn add babel-plugin-impor

            配置： E:\FullStackAll\React\jianshuapp\.babelrc
                    {
                        "plugins": [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": true // `style: true` 会加载 less 文件
                        }]
                        ]
                    }

    
```