import './user-box.scss';

class UserBoxController {
    /*@ngInject*/
    constructor(UsersService){
        this.usersSVC = UsersService;
    }

    $onInit() {

    }

    $onRemove() {
    }

    remove(){
        this.usersSVC.removeUser(this.user.id);
    }

    zoomToUser() {
        this.usersSVC.zoomToUser(this.user);
    }
}

const UserBox = {
    template: require('./user-box.html'),
    controller: ['UsersService', UserBoxController],
    bindings: {
        user: '<'
    }
};

export default UserBox;
