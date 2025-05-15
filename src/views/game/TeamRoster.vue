<template>
    <div class="flex">
        <div class="w-full">
            <div class="card">
                <Toolbar class="mb-2 w-full flex justify-between">
                    <template #start>
                        <div v-for="(pos, i) in POSITIONS" :key="i" class="w-full" @click="togglePosition(pos)">
                            <Button :label="pos" severity="secondary" :class="['mr-2 px-5 flex align-items-center justify-between cursor-pointer border-round', { 'selected-position': isPositionSelected(pos) }]" @click="openNew" />
                        </div>
                    </template>
                    <template #end>
                        <Select v-model="selected_team_id" :options="teams" optionValue="id" optionLabel="name" placeholder="Select Team" class="w-6rem" />
                    </template>
                </Toolbar>
                <DataTable
                    :value="team?.players"
                    :rows="15"
                    :virtualScrollerOptions="{ itemSize: 46 }"
                    sortField="ratings.overall_rating"
                    :sortOrder="-1"
                    selectionMode="single"
                    paginator
                >
                    <Column field="ratings.position" header="Position" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="person.first_name" header="First Name" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #loading>a
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="person.last_name" header="Last Name" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="30%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.position_archetype_name" sortable header="PAR" :headerStyle="{ minWidth: '10rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.mental_archetype_name" header="MAR" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.overall" header="OVR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.speed" header="SPD" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.acceleration" header="ACC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.agility" header="AGI" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.strength" header="STR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.vertical" header="VER" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.stamina" header="STA" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.carrying" header="CAR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.catching" header="CTH" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.short_route_running" header="ROR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_power" header="THP" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_deep" header="DAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_mid" header="MAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_short" header="SAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_on_the_run" header="TOR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.play_action" header="PAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.pass_blocking" header="PBL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.run_blocking" header="RBL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.shed_block" header="SHD" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.tackle" header="TKL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.man_coverage" header="MCV" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.zone_coverage" header="ZCV" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.punt_accuracy" header="PAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.punt_power" header="PPW" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.kick_accuracy" header="KAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.kick_power" header="KPW" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #loading>
                            <div class="flex items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                                <Skeleton width="60%" height="1rem" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import World from "../../models/World";
import League from "../../models/League";
import User from "../../models/User";
import Team from "../../models/Team";
import Player from "../../models/Player";
import {POSITIONS, OFF_POSITIONS, DEF_POSITIONS, getModelConfig } from '@/data/constants';

export default {
    components: {},
    data() {
        return {
            POSITIONS,
            OFF_POSITIONS,
            DEF_POSITIONS,
            modelRepo: getModelConfig(),
            selected_team_id: 1,
            loading: true,
            filtered_positions: [],
            cities: [
                { id: 1, name: 'New York', code: 'NY' },
                { id: 2, name: 'Rome', code: 'RM' },
                { id: 3, name: 'London', code: 'LDN' },
                { id: 4, name: 'Istanbul', code: 'IST' },
                { id: 5, name: 'Paris', code: 'PRS' },
            ],
            documentStyle: getComputedStyle(document.documentElement),
            textColor: '#212121',
            chartOptions: {
                animation: {
                    duration: 0,
                },
                responsive: true,
                maintainAspectRatio: false,
                cutout: '90%',
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057',
                        },
                    },
                },
            }
        };
    },
    methods: {
        togglePosition(pos) {
            const index = this.filtered_positions.indexOf(pos);
            if (index > -1) {
                this.filtered_positions.splice(index, 1);
            } else {
                this.filtered_positions.push(pos);
            }
        },
        getPositionCount(pos) {
            if (this.selectedTeam) {
                return this.selectedTeam.players.filter(player => player.position[0].position === pos).length;
            } else {
                return this.user.team?.players.filter(player => player.position[0].position === pos).length;
            }
        },
        isPositionSelected(pos) {
            return !this.filtered_positions.includes(pos);
        }
    },
    computed: {
        user: {
            /* By default get() is used */
            get() {
                return User.query().with('team.players.*').first()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateUser', value)
            }
        },
        world: {
            /* By default get() is used */
            get() {
                return World.query().first()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateWorld', value)
            }
        },
        teams: {
            /* By default get() is used */
            get() {
                return Team.query().with('players.*').orderBy('name').all()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateTeams', value)
            }
        },
        players: {
            /* By default get() is used */
            get() {
                return Player.query().all();
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updatePlayers', value)
            }
        },
        filteredPlayers() {
            if(this.selectedTeam != null) {
                if (this.filtered_positions.length === 0) {
                    return this.selectedTeam.players;
                } else {
                    return this.selectedTeam.players.filter(player =>
                        this.filtered_positions.includes(player.position)
                    );
                }
            } else {
                return this.user.team?.players;
            }

            return [];
        },
        team: {
            get() {
                const team = Team.query().where('id',this.selected_team_id).with('players', query => {
                    if(this.filtered_positions.length > 0) {
                        query.whereHas('ratings', (query) => {
                            query.where('season', 2025).where('position', this.filtered_positions)
                        }).with('ratings')
                            .with('contract.salaries')
                            .with('person.born')
                            .with('draft')
                            .with('college')
                    } else {
                        query.with('contract.salaries')
                            .with('person.born')
                            .with('draft')
                            .with('college')
                            .with('ratings', (query) => {
                                query.where('season', 2025)
                            }
                        )
                    }
                }).first();
                if(team) {
                    for (const player of team?.players) {
                        player.ratings = player?.ratings[0];
                        player.position = player?.ratings.position;
                    }
                }
                return team
            }
        }
    }
}
</script>

<style scoped lang="scss">
::v-deep(#files-fileupload) {
    .p-fileupload-buttonbar {
        display: none;
    }

    .p-fileupload-content {
        border: none;
    }
}

.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
.upload-button-hidden {
    &.p-fileupload {
        padding: 0;

        .p-fileupload-buttonbar {
            display: none;
        }

        .p-fileupload-content {
            border: 0 none;
        }

        .p-progressbar {
            display: none;
        }
    }
}

.selected-position {
    background-color: var(--surface-900);
}
</style>
