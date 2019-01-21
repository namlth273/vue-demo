import { VuexModule, Module, getModule, MutationAction } from "vuex-module-decorators";
import store from '..';
import { Profile, User, UserSubmit } from '../models';
import { loginUser, setJWT } from '../api';

@Module({
    namespaced: true,
    name: "users",
    store,
    dynamic: true
})
class UsersModule extends VuexModule {
    user: User | null = null;
    profile: Profile | null = null;

    @MutationAction
    async login(userSubmit: UserSubmit) {
        const user = await loginUser(userSubmit);
        setJWT(user.token);
        return { user };
    }
}

export default getModule(UsersModule);