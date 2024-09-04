### git 常用的一些指令[廖雪峰git学习网站](https://liaoxuefeng.com/books/git/gitee/index.html)
- ls: 查看本地文件
- git ls-files: 版本库文件
- git status: 查看暂存区状态
- git config --list：查看所有配置
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



 