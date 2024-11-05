import VuexORM, { Database } from '@vuex-orm/core';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import localForage from 'localforage';
import {clone} from 'pouchdb-utils';

import User from '@/models/User';
import World from '@/models/World';
import League from '@/models/League';
import Team from '@/models/Team';
import Player from '@/models/Player';
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
import Salary from "@/models/Salary";
import Stat from "@/models/Stat";
import Overalls from "@/models/Overalls";
import Potentials from "@/models/Potentials";
import Phase from "@/models/Phase";
import Staff from "@/models/Staff";
import StaffContract from '@/models/StaffContract';
import Position from '@/models/Position';
import Budget from '@/models/Budget';

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
        this.database.register(Overalls);
        this.database.register(Potentials);
        this.database.register(Phase);
        this.database.register(Conference);
        this.database.register(Division);
        this.database.register(Staff);
        this.database.register(League);
        this.database.register(World);
        this.database.register(DepthChart);
        this.database.register(Position);
        this.database.register(Budget);

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
