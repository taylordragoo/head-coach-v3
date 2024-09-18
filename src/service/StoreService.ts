import VuexORM, { Database } from '@vuex-orm/core';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import VuexPersistence from 'vuex-persist'
import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
import TrainingSchedule from "@/models/TrainingSchedule";
import Activity from "@/models/Activity";
import Match from "@/models/Match";
import Born from "@/models/Born";
import College from "@/models/College";
import Conference from "@/models/Conference";
import Division from "@/models/Division";
import DepthChart from "@/models/DepthChart";
import Contract from "@/models/Contract";
import Draft from "@/models/Draft";
import Ratings from "@/models/Ratings";
import Health from "@/models/Health";
import Injury from "@/models/Injury";
import Relative from "@/models/Relative";
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Transaction from "@/models/Transaction";
import Award from "@/models/Award";
import Overalls from "@/models/Overalls";
import Potentials from "@/models/Potentials";
import Skill from "@/models/Skill";
import Phase from "@/models/Phase";
import Season from "@/models/Season";
import Staff from "@/models/Staff";
import StaffContract from '@/models/StaffContract';
import localForage from 'localforage';
import {clone} from 'pouchdb-utils';

class StoreService {
    private static instance: StoreService;
    public store: any;
    public database: Database;

    private constructor() {
        this.database = new Database();
        this.database.register(User);
        this.database.register(Player);
        this.database.register(Team);
        this.database.register(Match);
        this.database.register(Award);
        this.database.register(Transaction);
        this.database.register(Draft);
        this.database.register(Health);
        this.database.register(Born);
        this.database.register(Ratings);
        this.database.register(College);
        this.database.register(Salary);
        this.database.register(Stat);
        this.database.register(Injury);
        this.database.register(Contract);
        this.database.register(StaffContract);
        this.database.register(Relative);
        this.database.register(Overalls);
        this.database.register(Potentials);
        this.database.register(Skill);
        this.database.register(Phase);
        this.database.register(TrainingSchedule);
        this.database.register(Activity);
        this.database.register(Conference);
        this.database.register(Division);
        this.database.register(Season);
        this.database.register(Staff);
        this.database.register(League);
        this.database.register(World);
        this.database.register(DepthChart);

        this.store = new Vuex.Store({
            actions: {
                resetState({ commit }) {
                    commit('RESET_STATE')
                }
            },
            mutations: {
                RESET_STATE() {
                    this.dispatch('entities/deleteAll')
                }
            },
            plugins: [
                VuexORM.install(this.database),
                new VuexPersistence({
                    storage: localForage,
                    asyncStorage: true,
                    reducer: (state) => clone(state),
                }).plugin
            ],
        });
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

    public getVuexDatabase(): Database {
        return this.database;
    }
}

export default StoreService;
