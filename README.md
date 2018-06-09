# WebService

```
=> node version 10.1.0
=> php version 7.1
		mbcrypt
		mysql
=> mysql 
=> angular cli en global

``` 

#Run server
```

cd Server
composer install
php -S localhost:1234 public/index.php

``` 

#Run angular client : 

```

cd RESTProjetFront
npm i -g @angular/cli

ng serve

``` 


We also used mysqld so you need to have it and run the following command 
```

mysqld -u root -p 

create database xxx;
use xxx;
source 'Server/db_backup.sql'
``` 
