import './user-list.scss';

class UserListController {
    /*@ngInject*/
    constructor($state){
        this.sortOn = 'name';
        this.$state = $state;
    }

    $onInit() {
    }

    $onRemove() {
    }

    createUser(){
        this.$state.go('create');
    }
}

const UserList = {
    template: require('./user-list.html'),
    controller: ['$state', UserListController],
    bindings: {
        users: '<'
    }
};

export default UserList;
