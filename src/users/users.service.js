import staticUsers from '../static-users';

class UsersService {
    /*@ngInject*/
    constructor() {
        this.users = staticUsers;
        this.zoomUser = staticUsers[0];
    }

    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }

    removeUser(id){
        var index = this.users.findIndex(user => user.id === id);
        this.users.splice(index, 1);
    }

    zoomToUser(user) {
        this.zoomUser = user;
    }
}

export default UsersService;