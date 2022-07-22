# Vue 3.2 + TypeScript + Vite2 + pinia + Antd

### 部署
```shell
# 镜像名 $my_image = chakcheung4565/shinp-vue3-admin
# 仓库 $my_hub = chakcheung4565

docker build -t $my_image -f ./docker/Dockerfile .

docker login -u $my_hub

docker push $my_image

# 服务器
docker login -u $my_hub

docker pull $my_image

docker run -p 9001:80 -d --restart=always
```
