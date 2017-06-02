/*
node9 上课内容




本次内容是
Linux 服务器介绍和使用
常用 Linux 版本分析
常用工具/概念/使用方式
以前和现在的服务器(托管和云平台)
服务器配置
部署项目



域名购买(腾讯云买 .cc 域名)
VPS购买, 可以用下面的服务(论坛使用的主机商), 2.5刀/月的即可
http://www.vultr.com/?ref=6991688
    地址选 日本, 如果不能访问, 那么就删除再新建一个


为什么服务器多用 Linux?
    微软很贵, Linux 免费
Linux 生态圈更好


Linux 的各种版本分析
Debian 最好的 最稳定
Ubuntu 抄的 debian, 用途广泛, 用户多(我们用的是 ubuntu 1604)
CentOS 垃圾 工具老旧, 使用不方便


连接服务器推荐使用 cmder 软件(windows下)
如果在 mac 下, 直接用终端连接



系统配置
程序安装
PATH
命令
参数
权限
用户
用户组


常用操作
pwd
print working dir
显示现在所处的目录

ls
不带参数就显示当前目录下的所有文件
程序可以加选项
-l 显示详细信息
-h 人性化显示文件尺寸
-a 显示所有文件， 以 . 开头的文件是隐藏文件
还可以带一个目录当参数，这样就会显示这个目录
ls /usr
下面两个是等价的
ls -l -h
ls -lh


输入命令时, 可以用 tab 补全

cd
cd /usr
改变当前目录
    . 代表当前目录
    .. 代表上级目录
cd 不带参数就回到默认的家目录, 与 cd ~ 的效果是一样的
每个用户都有一个家目录，默认在 /home/用户名
root 用户的家目录是 /root

我们可以在 linux 命令行中使用 nano 这个编辑器, 很方便

操作文件与目录
cp
复制出一个文件，用法如下
cp a.txt b.txt
复制 a.txt 并把新文件取名为 b.txt
复制目录要加上 -r 参数
cp -r a b
mkdir
创建一个目录
-p 可以一次性创建多层目录
mkdir -p a/b/c
rmdir
只能用来删除一个空目录
rm
这个命令直接删除东西，很危险，一般不要用
删除文件或者目录
-f 强制删除
-r 用来递归删除目录
mv
移动文件或者文件夹
也可以用来改名
mv a.txt b.txt
mv b.txt ../
mv b.txt ../gua.txt
可以用 mv xx /tmp 的方式来将文件放入临时文件夹
（/tmp是操作系统提供的临时文件夹，重启会删除里面的所有文件）

ls -l /usr/bin/ > b.txt

cat
显示文件内容
tac
反过来显示文件内容
nl
显示内容并附带行号
more less head tail
more 可以分屏分批看文件内容
less 比 more 更高级，可以前后退看文件
h 显示屏幕帮助, q 退出 less 程序

head 可以显示文件的前 10 行
tail 可以显示文件的后 10 行
head 和 tail 有一个 -n 参数
head -n 20 a.gua
touch
touch a.gua
如果 a.gua 存在就更新修改时间
如果 a.gua 不存在就创建文件

权限操作
腾讯主机默认是用 ubuntu 这个用户登录, 为了方便操作, 统一选择 root 用户登录
sudo
用管理员帐户执行程序
比如安装程序或者修改一些系统配置都需要管理员权限

文件权限    文件类型    用户 用户组 文件大小  修改日期           文件名
-rw-r--r--  1       root root   45      May 24 10:17    lazy_dog.txt
-rw-r--r--  1       root root   56      May 24 09:47    ls-error.txt
-rw-r--r--  1       root root   30      May 24 09:45    ls-output.txt
drwxr-xr-x  4       root root 4096      May 24 03:37    node9

 drwxr-xr-x 第一位是表示文件类型, 后面每三位分为一组, 每组表示的权限意思是一样的
文件类型    是否可读  是否可写  是否可执行
d           r       w           x
-           r       w           x

其中 d 表示 目录 directory, - 表示普通文件
三组 rwx 分表代表 所属用户|同组用户(文件所属的群组)|其他用户
rwx 可以用数字表示为 421

777 表示三组都是 rwx rwx rwx
也就是 -rwxrwxrwx

每一位使用的是 2 进制数字表示
210
于是乎
r-- 就是 4
rw- 就是 6
rwx 就是 7
r-x 就是 5

-rw-rw-r--     文件的访问权限
1              文件的链接数目(这个不用关心)
root           文件所有者的用户名
root           文件所属用户组
10             文件大小（单位是字节）
11/09 20:28    上次修改文件的日期和时间
b.gua          文件名

// 我们只考虑一个 root 用户的情况, 所以这部分不演示了, 直接跳过
chown
改变文件的用户
chown gua c.gua
chown gua:gua c.gua


chmod
改变文件权限
666 这种表示按照 8 进制数字更改, 换成字符就是 rw- rw- rw-

u   user    表示文件所有者
g   group   表示文件所属群组
o   others  表示其他用户
a   all     表示 ugo 的组合
+x 表示添加 x 权限, 等价于 a+x, 文件所有者/文件所属群组/其他用户都添加 x 权限
-x 表示减少 x 权限
chmod 666 a.txt
chmod +x b.txt
chmod -x tmp


信息查找
file
显示文件的类型（不是百分之百准确）
uname
显示操作系统的名字或者其他信息
uname -r
uname -a
which
which perl
有时候开发语言里会提到 3p, 也就是 perl php python
which pwd
显示 pwd 的具体路径
whereis
whereis ls
显示更全面的信息
whoami
find . -name ""

奇怪符号
~   家目录快捷方式
>   覆盖式重定向
>>  追加重定向
|   管道, 很麻烦 以后说
``  获取命令执行的结果
比如 echo pwd 输出的就是 pwd 这个字符串
echo `pwd` 输出的是 pwd 命令执行的结果, 相当于一个变量

&   后台执行
node app.js &
可以用 fg 命令把一个在后台的程序拉到前台来
可以用 Ctrl-z 来把一个前台的程序放到后台去挂起
()  开新的子进程shell执行(不用掌握这一条, 因为几乎没人用)

history
查看历史命令
grep
查找
这两个一般配合使用
history | grep touch

ps
查看进程, 一般用下面的用法
ps ax
ps ax | grep node
查看带 node 字符串的进程

kill 和 killall 杀进程
用 ps ax 找到进程id (pid)
kill [pid]
kill -9 [pid]
kill -15 [pid]
killall 是用进程名字来杀进程

后台前台
fg
jobs

快捷键
C-z     把正在运行的程序挂起并放在后台
C-c     中断程序的执行
C-d     输入文件终止符(end of file, EOF)

比如输入 cat(不带参数), 会等待着从键盘输入内容
hello
输入 Ctrl-d 后会结束输入

输入快捷键
C-t     交换光标前面的两个字符(只在终端有效)
C-w     一次删除一个单词
C-u     一次删除一行（从光标删除到行首）
C-k     从光标删除到行尾
C-d     删除后一个字符
C-h     删除前一个字符


C-f     forward 往前 就是右
C-b     backward 往后 就是左箭头
C-p     pres    往上 就是上箭头
C-n     next    往下 就是下箭头
C-a     光标回到行首
C-e     光标跳到行尾

快捷键
C-z 挂起到后台
C-c 中断程序


reboot
重启
shutdown
关机
可以用参数指定时间
halt
关机







配置服务器免登陆设置
ssh-key
===
生成 ssh-key
===

*** 注意, 不懂就在群里问
Mac 用户直接打开终端输入命令
Win 打开 cmder 程序, 在里面输入下面的命令

1. 在本机生成 ssh key 公钥私钥
注意 下面的 mykey 随便换一个你喜欢的名字, 这是一个标注, 方便你看的
ssh-keygen -C <mykey>
会提示你生成的文件的地址, 并且让你输入密码, 你不要输入密码, 直接回车

这样你就得到了一对 ssh-key, 这是用于登录服务器用的
默认你会得到两个文件
id_rsa 是私钥 自己保存 不要给别人看
id_rsa.pub 是公钥, 是要到处使用的
这个是我们之前提到的非对称加密


===
重建服务器并且配置 ssh-key
===

去 vultr 的管理界面
先删除(Destory)现有的服务器
新建服务器的时候, 把刚才生成的 id_rsa.pub 文件(用 atom/webstorm 可以打开)里面的内容加入到 ssh-key 步骤中
这样你就可以不用密码, 自动登录服务器了


// 如果你不想重建服务器, 配置 ssh-key 的方法如下
// 在服务器把本机生成的 public key 添加到 /root/.ssh/authorized_keys 文件中
// 1 用 root 用户登录到服务器, 创建 .ssh 目录
cd /root
mkdir .ssh
// 2 编辑 authorized_keys 文件, 把刚才生成的 id_rsa.pub 文件里面的内容粘贴进去并保存退出
// 注意, 这里可以粘贴多个 key, 一行一个
nano .ssh/authorized_keys



// 安装必备软件
// 安装 oh-my-zsh 配置(方便你使用命令行的配置)
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

// 安装防火墙 和 防火墙的基本套路配置
// 防火墙的作用(redis安全漏洞)
apt-get install ufw
ufw allow 22
ufw allow 80
ufw allow 443
ufw allow 3000
ufw default deny incoming
ufw default allow outgoing
ufw status verbose
ufw enable

 ufw allow 8090/8388(这个是留给飞机用的端口)


部署项目
软件安装
====
安装 git nginx
apt-get install git nginx

ubuntu 的软件仓库中的 nodejs 更新很慢, 几乎可以认为不可用,
所以我们从 nodeSource 仓库中安装新款 nodejs

配置 nodeSource 仓库
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

配置之后就可以安装最新的 nodejs
apt-get install nodejs

安装 yarn
npm install yarn -g(这个官网不推荐)
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 sudo apt-get update && sudo apt-get install yarn


用 git pull 项目
用 sourcetree

安装依赖
yarn install

配置 nginx
ln -s /var/www/weibo/weibo.nginx /etc/nginx/sites-enabled/weibo

` 这部分和部署无关
列出 nginx/sites-enabled 下面的文件
root@linlab:~# ls -l /etc/nginx/sites-enabled/

第一个字母是 l, 这个表示 weibo 是一个软链接, 当访问 weibo 时,
实际上访问的是 /var/www/weibo/weibo.nginx
这样做的好处是我们只需要更新 weibo.nginx 就可以
软链接类似 windows 下的快捷方式

lrwxrwxrwx 1 root root 26 May 23 14:09 weibo -> /var/www/weibo/weibo.nginx
`

移除默认的配置文件
mv /etc/nginx/sites-enabled/default /tmp

重启 nginx
service nginx restart

运行程序
yarn run start

安装 pm2
yarn global add pm2

pm2 日志
/root/.pm2/logs 文件夹会包含所有应用的日志

实时日志命令
pm2 logs


我们已经有 node 的情况下, 为什么要用 nginx
1. node 性能是不如 nginx 的, nginx 处理静态文件的性能非常高
2. nginx 接收 80 端口的请求(来自用户的请求), 然后转发给各个 app.js(app.js
实际上是应用服务器, 也就是我们常说的框架)
3. nginx 是使用非常广泛的静态服务器, 安全性方面是非常好的


 给静态资源增加一个路由，如果发现请求是静态资源，
 nginx直接处理, 不用让node来处理，可以这么理解吗
 当然可以, 这个是完全正确的


1. 高性能的静态服务器 nginx  nginx   nginx       nginx       nginx
2. 高性能的网络(?)服务器     node    gunicorn    unicorn     tomcat/jetty
3. 一般性能的开发服务器      node    app          app         app

// ===
// 服务器中文编码问题
// ===
//
// 编辑下面的文件, 不要拼错
nano /etc/environment
// 加入下面的内容, 保存退出
LC_CTYPE="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
*/