@Library('jenkins-shared-library') _

import api.ApiProcessor
import api.DockerApi

pipeline {
  agent any
  environment {
    GITHUB_URL = "github.com/lukasbriza/config-templates"
    PROJECT_DIR = "config-templates"
  }
  stages {
    stage("Check workspace") {
      when {
        expression { fileExists(env.PROJECT_DIR) }
      }
      steps {
        script {
          checkWorkspace("${env.PROJECT_DIR}")
        }
      }
    }

    stage("Checking prerequisities") {
      steps {
        script {
          // Creates in env: PLATFORM, PROJECT_NAME, ENVIRONMENT, VERSION, COMPOSE_FILE_NAME
          checkPrerequisities(4, env.BRANCH_NAME, env.API_PROCESSOR_API)
        }
      }
    }

    stage("Fetch secrets") {
      steps {
        script {
          def api = new ApiProcessor(this)
          def sharedSecrets = api.getProjectSecrets(env.API_PROCESSOR_API, env.PLATFORM, "shared", env.ENVIRONMENT)
          def secrets = api.getProjectSecrets(env.API_PROCESSOR_API, env.PLATFORM, env.PROJECT_NAME, env.ENVIRONMENT)

          env.DOCKER_NAME = sharedSecrets["DOCKER_NAME"]
          env.DOCKER_PASSWORD = sharedSecrets["DOCKER_PASSWORD"]
          env.SEND_EMAIL_ADDRESS = sharedSecrets["SEND_EMAIL_ADDRESS"]
          env.GITHUB_PAT = sharedSecrets["GITHUB_PAT"]

          // PUBLISH
          env.NODE_ENV = secrets["NODE_ENV"]
          env.CONFIG_TEMPLATES_PAT = secrets["CONFIG_TEMPLATES_PAT"]
        
        }
      }
    }

    stage("Clone branch") {
      steps {
        script {
          cloneBranch("https://lukasbriza:${env.GITHUB_PAT}@${env.GITHUB_URL}.git")
        }
      }
    }

    stage("Build Docker images") {
      steps {
        script {
          buildImages(env.COMPOSE_FILE_NAME)
        }
      }
    }

    stage("Run docker images") {
      steps {
        script {
          sh "docker-compose -f ${env.COMPOSE_FILE_NAME} up"
        }
      }
    }
  }

  post {
    always {
      script {
        println("Cleaning up...")

        if (fileExists("${env.PROJECT_DIR}")) {
            sh "rm -rf ${env.PROJECT_DIR}"
        }

        dockerApi.cleanDocker()
      }
    }
    success {
      println("Job succeeded!")

      mail to: "${env.SEND_EMAIL_ADDRESS}",
      subject: "Jenkins: Job of ${env.PROJECT_DIR} ${env.BUILD_DISPLAY_NAME} succeeded!",
      body: """
        Project ${env.PROJECT_DIR}:
        Job ${env.BUILD_DISPLAY_NAME} with url ${env.JOB_URL} succeeded!
        For more information visit url above. 
      """
    }

    failure {
      println("Job failed!")

      mail to: "${env.SEND_EMAIL_ADDRESS}",
        subject: "Jenkins: Job of ${env.PROJECT_DIR} ${env.BUILD_DISPLAY_NAME} failed!",
        body: """
          Project ${env.PROJECT_DIR}:
          Job ${env.BUILD_DISPLAY_NAME} with url ${env.JOB_URL} failed!
          For more information visit url above. 
        """
    }
  }
}
