pipeline{
    agent any
    environment{
        VERSION = "1.4.${env.BUILD_ID}"
        JOB_NAME = "${env.JOB_NAME}"
        BUILD_NUMBER = "${env.BUILD_NUMBER}"
        APPNAME = "website"
        IMAGE_LOCATION = "172.31.6.41:5009"
    }
    stages{

        stage("docker build & push")
        {
          steps{
                  script{
                       withCredentials([string(credentialsId: 'docker_password', variable: 'docker_login_pass')]) {
                         sh 'docker build -f docker/Dockerfile -t ${IMAGE_LOCATION}/${APPNAME}:${VERSION} .'
                         sh 'echo "$docker_login_pass" | docker login --username system --password-stdin ${IMAGE_LOCATION}'
                         sh 'docker push  ${IMAGE_LOCATION}/${APPNAME}:${VERSION}'
                         sh 'docker rmi ${IMAGE_LOCATION}/${APPNAME}:${VERSION}'
                 }
               }
            }
         }

         stage('Deploying application to cluster') {
             steps {
                script{
                     withCredentials([string(credentialsId: 'docker_password', variable: 'docker_login_pass')]) {
                         sh 'echo "$docker_login_pass" | docker login --username system --password-stdin ${IMAGE_LOCATION}'
                         sh 'docker stack deploy -c ${HOME}/deployments/${APPNAME}.yml ${APPNAME}  --with-registry-auth '
                     }
                }
             }
         }


      }

    post {
           success {
                slackSend color: "good", message: "Build deployed successfully - ${JOB_NAME} #${BUILD_NUMBER}"
            }
            unstable {
                slackSend color: "warning", message: "Build unstable - ${JOB_NAME} #${BUILD_NUMBER}"
            }
           failure {
                slackSend failOnError: true, color: "danger", message: "Build failed  - ${JOB_NAME} #${BUILD_NUMBER}"
            }
        }

}
