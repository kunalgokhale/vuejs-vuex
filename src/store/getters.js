export default {
    unregisteredUsers(state) {
        return state.users.filter(user => {
            return !user.registered;
        });
    },
    registrations(state) {
        return state.registrations;
    },
    totalRegistered(state) {
        return state.registrations.length;
    }
}