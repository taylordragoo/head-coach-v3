import { createPinia, setActivePinia } from 'pinia'
import { createORM } from 'pinia-orm'
import createPersistedState from 'pinia-plugin-persistedstate'
import localForage from 'localforage';

class StoreService {
    private static instance: StoreService;
    public store: any;

    private constructor() {
        this.store = createPinia()
        this.store.use(createORM());
        this.store.use(createPersistedState);
        setActivePinia(this.store);
    }

    public static getInstance(): StoreService {
        if (!StoreService.instance) {
            StoreService.instance = new StoreService();
        }

        return StoreService.instance;
    }

    public getStore(): any {
        return this.store;
    }
}

export default StoreService;
