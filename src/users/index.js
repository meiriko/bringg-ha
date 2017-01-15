import angular from 'angular';
import ngMap from 'ngmap';

import UserBox from './user-box/user-box';
import UserList from './user-list/user-list';
import UserForm from './user-form/user-form';
import UsersMap from './users-map/users-map';
import usersService from './users.service';

const module = angular.module('users.module', ['ngMap'])
    .service('UsersService', usersService)
    .service('ngMap', ngMap)
    .config(($stateProvider) => {
        $stateProvider.state('users', {
            url: '/users',
            views: {
                "": {
                    template: '<user-list users="$resolve.users"></user-box>',
                    resolve: {
                        users: function (UsersService) {
                            return UsersService.getUsers();
                        }
                    }
                },
                content: {
                    template: '<users-map users="$resolve.users"></users-map>',
                    resolve: {
                        users: function (UsersService) {
                            return UsersService.getUsers();
                        }
                    }
                }
            }
        });
        $stateProvider.state('create', {
            url: '/users/create',
            views: {
                "": {
                    template: '<user-list users="$resolve.users"></user-box>',
                    resolve: {
                        users: function (UsersService) {
                            return UsersService.getUsers();
                        }
                    }
                },
                content: {
                    template: '<user-form></user-form>'
                }
            }
        });
    })
    .component('userBox', UserBox)
    .component('userForm', UserForm)
    .component('userList', UserList)
    .component('usersMap', UsersMap)
    .filter('capitalizeName', function(){
        return function(str) {
            if(str){
                var parts = str.split(/\s+/);
                return parts.map(function(part) {
                    return part[0].toUpperCase() + part.slice(1).toLowerCase();
                }).join(' ');
            } else {
                return str;
            }
        }
    })
    .name;

export default module;