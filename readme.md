# Assist
A client tracking and reporting tool for agencies that provide services to the victims of domestic abuse. It is an single page application that was originally built for [Domestic Violence Intervention Program](https://dvipiowa.org) written using Laravel and Vue.js.

## Running locally
Assist is built to run locally using [Laravel Homestead](https://github.com/laravel/homestead).

### Install Dependencies
Install the following programs, if not already installed.
* Virtualbox
* Vagrant - Requires the latest version.

### Setup Homestead
Unless you happened to download Assist to the `~/Sites/assist` directory, you'll need to update the `Homestead.yaml` file that is located at the root of the project.
```yaml
folders:
    -
        map: ~/Sites/assist # <- Change this to the location of Assist.
        to: /home/vagrant/code
```
Inside the `assist` directory, run the following command:
```bash
vagrant up
```
This command will provision the virtual machine and get it ready to use. Once that command has completed, you can ssh into the VM with the following command:
```bash
vagrant ssh
```
### Setup Application
* Make a copy of the `.env.example` file called `.env`: `cp .env.example .env`
* Generate application key: `artisan key:generate`
* Run migrations: `artisan migrate`
* Install Laravel Passport: `artisan passport:install`
* Seed database, if desired: `artisan db:seed`. This step may take a while because the application will download and populate records for cities and counties for every state.

## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
