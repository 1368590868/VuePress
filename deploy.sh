#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
 echo ' git fetch --all &&  git reset --hard origin/master' > pull.sh

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  
#  git push -f git@github.com:1368590868/1368590868.github.io.git master
 git push -f git@gitee.com:ranlin/vueperss.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -