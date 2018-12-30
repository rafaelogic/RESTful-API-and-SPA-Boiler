# RESTful-API-and-SPA-Boiler
RESTful API using Laravel 5.7 with JWT Auth and SPA using Vue.js with Vuex, Vue-Router and Vue Storage

## Installation

1. Run `composer install` to install laravel dependencies
2. Run `npm run i` to install all node.js depedencies
3. Run `npm run dev` to compile all assets
4. Run `php artisan migrate` (assuming you already change the database informations in the .env file) to create tables
5. Run `php artisan tinker` then inside tinker Run `factory('App\User')->create(['email', 'your@shortest.email']);` which will have **secret** as a default password then `factory('App\Customer', 50)->create();` to create dummies that will be displayed in the table

*if you want more customize user creation, then run `mysql -u username - p` then manually insert data into the users table.*

6. Then lastly run `php artisan serve` to start the server and test this baby.

[More information](https://medium.com/@rafaelogic/rafaelogics-restful-api-and-spa-boiler-using-laravel-and-vue-js-stack-598a90d744dc)
