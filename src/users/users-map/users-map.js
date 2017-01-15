import './user-map.scss';

class UsersMapController {
    /*@ngInject*/
    constructor($state, UsersService){
        this.usersSvc = UsersService;
    }

    $onInit() {
    }
}

const UsersMap = {
    template: require('./users-map.html'),
    controller: ['$state', 'UsersService', UsersMapController],
    bindings: {
        users: '<'
    }
};

export default UsersMap;
