export default {
    doUserRegistration(context, userId) {
        context.commit('registerUser',userId);
    }
}