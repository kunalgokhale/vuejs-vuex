import { createStore } from 'vuex';

export const store = createStore({
    state: {
        registrations: [],
        users: [
            { id: 1, name: 'Max', registered: false },
            { id: 2, name: 'Anna', registered: false },
            { id: 3, name: 'Chris', registered: false },
            { id: 4, name: 'Sven', registered: false }
        ],
    },
    getters: {
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
    },
    mutations: {
        registerUser(state, userId) {
            const date = new Date();
            const user = state.users.find(user => {
                return user.id == userId;
            });
            user.registered = true;

            const registration = {
                userId: user.id,
                name: user.name,
                date: date.getMonth() + "/" + date.getDay(),
            };

            state.registrations.push(registration);
        },
        unregisterUser(state, payload) {
            const user = state.users.find(user => {
                return user.id == payload.userId;
            });
            user.registered = false;

            const registration = state.registrations.find(registration => {
                return registration.userId == payload.userId;
            });
            state.registrations.splice(
                state.registrations.indexOf(registration),
                1
            );
        }
    }
});