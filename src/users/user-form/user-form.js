import './user-form.scss';

class UserFormController {
    /*@ngInject*/
    constructor($state, UsersService){
        this.usersSvc = UsersService;
        this.$state = $state;
    }

    initUser() {
    }

    $onInit() {
        this.user = {
            name: '',
            isActive: false,
            age: null,
            picture: null,
            email: null,
            latitude: null,
            longitude: null
        }
    }

    cancel() {
        this.$state.go('users');
    }
    submit() {
        this.user.id = Math.random().toString(16).substr(2);
        this.usersSvc.addUser(this.user);
        this.$state.go('users');
    }
}

const UserForm = {
    template: require('./user-form.html'),
    controller: ['$state', 'UsersService', UserFormController]
};

export default UserForm;
