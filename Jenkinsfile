def label = "slave-${UUID.randomUUID().toString()}"


podTemplate(label: label, serviceAccount: 'jenkins', containers: [
  containerTemplate(name: 'node', image: 'harbor.kux.com/library/node:alpine', command: 'cat', ttyEnabled: true),
  containerTemplate(name: 'docker', image: 'harbor.kux.com/library/docker:latest', command: 'cat', ttyEnabled: true),
  containerTemplate(name: 'kubectl', image: 'harbor.kux.com/library/kubectl:latest', command: 'cat', ttyEnabled: true)
], volumes: [
  hostPathVolume(mountPath: '/home/jenkins/.kube', hostPath: '/root/.kube'),
  hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
]) {
  node(label) {
    def myRepo = checkout scm
    def gitCommit = myRepo.GIT_COMMIT
    def gitBranch = myRepo.GIT_BRANCH
    def imageTag = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
    def dockerRegistryUrl = "harbor.kux.com"
    def imageEndpoint = "charts/charts-ui"
    def image = "${dockerRegistryUrl}/${imageEndpoint}"

    stage('单元测试') {
      echo "1.测试阶段"
      sh """
      """
    }
    stage('编译打包') {
      echo "2.编译打包阶段"
      container('node') {
        sh """
          npm get registry
          npm config set registry http://npm.kingdee.com/
          npm install
          npm run docs:build
        """
      }
    }
    stage('构建 Docker 镜像') {
      withCredentials([[$class: 'UsernamePasswordMultiBinding',
        credentialsId: 'dockerhub',
        usernameVariable: 'DOCKER_HUB_USER',
        passwordVariable: 'DOCKER_HUB_PASSWORD']]) {
          container('docker') {
            echo "3. 构建 Docker 镜像阶段"
            sh """
              docker login ${dockerRegistryUrl} -u ${DOCKER_HUB_USER} -p ${DOCKER_HUB_PASSWORD}
              docker build -t ${image}:${imageTag} .
              docker push ${image}:${imageTag}
              """
          }
      }
    }
    stage('运行 Kubectl') {
      container('kubectl') {
        echo "查看 K8S 集群 Pod 列表"
        sh "kubectl get pods"
        echo "4.部署阶段"
        sh """
          sed -i 's@<IMAGE>@${image}@g' k8s.yaml
          sed -i 's@<IMAGE_TAG>@${imageTag}@g' k8s.yaml
          kubectl apply -f k8s.yaml
        """
      }
    }
  }
}