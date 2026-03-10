pipeline {
    agent { label 'jenkins_node' }

    environment {
        // Change these to match your project
        IMAGE_NAME = "my-website"
        CONTAINER_NAME = "web-live"
        PORT_MAPPING = "8081:8081" // Host  port 8081 maps to Container port 8081
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                script {
                    // Builds the image using the Dockerfile in your repo
                    sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        }

        stage('Deploy to Host') {
            steps {
                script {
                    // 1. Stop and remove the old container if it exists
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    // 2. Run the new container on the Ubuntu host
                    sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT_MAPPING} --restart always ${IMAGE_NAME}:${BUILD_NUMBER}"
                }
            }
        }

        stage('Clean Up') {
            steps {
                // Remove "dangling" old images to save disk space
                sh "docker image prune -f"
            }
        }
    }
}
