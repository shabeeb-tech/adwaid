pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                  git clone https://github.com/shabeeb-tech/adwaid.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r adwaid/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
