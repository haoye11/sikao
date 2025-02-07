---
date: 
tags:
  - ob相关
  - git
  - 芝士
---

### git 常用的一些指令[廖雪峰git学习网站](https://liaoxuefeng.com/books/git/gitee/index.html)
- ls: 查看本地文件
- git ls-files: 版本库文件，可以列出Git存储库中所有文件的详细信息
- git status: 查看暂存区状态
- git config --list：查看所有配置
- git count-objects：命令可以查找存储库的大小，并显示存储库中的对象数量-v选项显示对象数量和总大小，-H选项以人类可读的格式显示文件大小。。
- git config -- list --show-origin：查看所有配置以及它们所在文件
- git config --global user.name 用户名：全局设置用户签名
- git config --global user.email 邮箱：全局设置用户签名
- git config user.name 或 email：查看用户签名
- git init：创建一个空仓库，或者初始化一个已有仓库
- linux 编辑
	- ll：查看文件夹下所有文件
- vim：进入编辑模式
		- esc ：wq 退出该模式
	- cat 文件：查看文件
	- tail -n 1 文件名：查看文件末尾第一行
- git add：把文件添加到可提交列表（临时缓冲区）(./--all 添加所有文件)
- git diff; 显示改动
- git rm --cached 文件：把文件从临时缓冲去删除
- $ git rm -h
  用法：git rm [<选项>] [--] <文件>...
    -n, --dry-run         演习
    -q, --quiet           不列出删除的文件
    --cached              只从索引区删除
    -f, --force           忽略文件更新状态检查
    -r                    允许递归删除
    --ignore-unmatch      即使没有匹配，也以零状态退出
- git checkout -- file：可以丢弃工作区的修改
- git push -u 别名 分支：由于远程库是空的，我们第一次推送 master 分支时，加上了-u 参数，Git 不但会把本地的 master 分支内容推送的远程新的 master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令。
- git gc --prune=now1\. 运行 `gc` ，生成 `pack` 文件（后面的 `--prune=now` 表示对之前的所有提交做修剪，有的时候仅仅 `gc` 一下`.git` 文件就会小很多）[常用清理指令](https://blog.axiaoxin.com/post/git-gc-prune-clean/)
- git filter-branch[git仓库清理教学](https://juejin.cn/post/7024922528514572302)
- git commit -m "日志信息"：提交（增删改）到本地仓库
- git reflog：查看版本历史记录
- git log：查看详细的版本记录
- git reset --hard 版本号：版本穿梭
- git branch：查看本地分支 
- git branch -r 查看远程分支
- git branch -a 查看本地和远程分支 
- git push origin --delete [branch_name]：git 删除远程分支
-  git branch -d 本地分支名：删除本地分支
- git push origin : 远程分支 ：推送空分支到远程（删除远程分支另一种实现）
- git branch 分支名：创建分支
- git branch -m <旧分支名> <新分支名> 
- git branch -v：查看分支
- git checkout：切换分支
- git merge：合并分支
- git tag：新建，查看分支
- git remote -v：查看当前所有远程仓库的别名
- git remote rm 别名：删除与远端仓库的连接
- git remote add 别名 远程仓库：仓库起别名
- git push 别名 分支：推送本地分支上的内容到远程仓库
- git puah 别名 main：main：本地 main 推送到远程 main
- git clone 远程仓库：将远程仓库上的内容克隆到本地
- git pull 远程库地址别名远程分支名：将远程库对于分支最新内容拉取下来与当前本地分支合并
- ssh-keygen -t rsa -C 邮箱：生成密钥
- ssh -T git@github.com : 连通测试
- git rm -r --cached .消除暂区所有的文件跟踪,-r递归删除
- git status --ignored 查看状态，包括忽略文件
- ignore文件
   1. /file/表示主目录下file文件夹
   2. ✳.文件类型：表示主目录下所有该文件类型
   3. !important.log 不忽略该文件

### 问题
#### 看版本库文件时中文乱码
在bash界面，左上角选择options，然后选中text，里面选择zh_CN,utf-8.
而后在bash界面运行以下代码。
设置为false时，Git不会对文件名进行转义，这对于处理非ASCII字符的文件名非常有用。
`git config --global core.quotepath false`
指定了GUI工具使用的默认编码，通常用于显示文件内容和提交信息。
`git config --global gui.encoding utf-8`
指定了提交信息的编码，确保提交信息可以正确地显示和存储非ASCII字符。
`git config --global i18n.commitencoding utf-8`
指定了日志输出的编码，确保日志信息可以正确地显示和存储非ASCII字符。
`git config --global i18n.logoutputencoding utf-8`

 #### 端口22不能push
1.使用443端口，在user/administer/.ssh文件夹中添加config文件（新建txt，直接删除后缀）
```
Host github.com
  Hostname ssh.github.com
  Port 443
```
修改完，使用`ssh -T git@github.com`来测试和GitHub的网络通信是否正常，如果提示Hi xxxxx! You've successfully authenticated, but GitHub does not shell access. 就表示一切正常了。
前提是执行命令`ssh -T -p 443 git@ssh.github.com`后不再提示connection refused，所以要尝试这个方案先执行这条命令测试
2.使用https协议，不使用ssh协议
在你的GitHub的本地repo目录，执行如下命令：
`git config --local -e
然后把里面的url配置项从git格式
`url = git@github.com:username/repo.git
修改为https格式
`url = https://github.com/username/repo.git
这个其实修改的是repo根目录下的./git/config文件。
3.DNS污染，修改hosts映射
`ssh -vT git@github.com`v表示verbose，显示详细日记。如果是DNS污染，无法解析到GitHub可以修改hosts文件，增加一条github.com的域名映射搞定。
`140.82.113.4 github.com
查找http://github.com的ip地址可以使用https://dnschecker.org/来查询github.com在全球的ip地址，也可以通过https://api.github.com/meta 查看github.com官方公布的IP地址
这个问题其实就是DNS解析被污染了，有2种可能：
DNS解析被运营商劫持了
使用了科学上网工具
4.reference.
https://zhuanlan.zhihu.com/p/521340971
#### 取消含敏感信息的的commit
一、删除本地还未push的commit
需要用到 git rebase 命令
1.`git log` 查看log，找到你想删除的commit的前一次commit，复制commit号
![](https://raw.githubusercontent.com/haoye11/image/main/img/202411150844806.png)
2.git rebase -i 上一次commit号 按下“回车”进入vim模式
`git rebase -i commit号
3.现在在vim模式内，需要手动修改最上方你要删除的commit
先按下键盘“ins”键，进入编辑模式，再把“pick”手动敲入改成“drop”
“ins”键在键盘“删除”键右边
3.修改完成后再按下键盘“esc”键退出编辑模式
4.再切换键盘为大写模式，按下两次 “Z”键，vim模式会自动回到git命令窗口模式
git命令窗口会提示你本次rebase成功
>注意有多次commit可能要忽略一些，不然有可能会有冲突，进入eabasing模式（不知道干啥用的）
>https://zhuanlan.zhihu.com/p/672380389