# How to set up the app system on Ubuntu 16.04

## Provision

    `sudo adduser updater`
    `sudo mkdir /webapps`
    `sudo chown updater.updater webapps`
    `sudo su - updater`
    
## Directory  

    /webapps/app
       
## Install Node
    
    `sudo apt install node`

## Install Ionic

    `sudo npm install -g ionic@3.19.0`

## Install Git

    `sudo apt install git`

## Checkout Code
    
    `cd /webapps`
    `git clone ssh://git@47.94.3.138:10022/fund-station/app.git`
 

## Install Dependent packages

    `cd app`
    `npm install`
    
## Ionic Operating 

    `ionic build` 
  
##  Install Nginx

    `sudo apt install nginx`
    
##  Config (nginx.conf)

    `
    include /etc/nginx/conf.d/*.conf;
    
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  39.107.146.35;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }`

##  Config (nginx.conf)

    `server {
        listen 80;
        listen [::]:80 ipv6only=on;
        client_max_body_size 100m;
        # access_log /tmp/jizhan-access.log main;
        # error_log /tmp/jizhan-error.log debug;
        server_name 39.107.146.35;
        #root /home/updater/app/www/build/;

        location /app/ {
            location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
                expires 1y;
            }
            alias /home/updater/webapps/app/www/;
        }
    }`    

##  Nginx operating 

    `service nginx start or service nginx restart`