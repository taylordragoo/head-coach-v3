<template>
    <div class="grid">
        <div class="col-12 md:col-7 xl:col-12">
            <div class="card">
                <div>
                    <div class="col-12">
                        <div class="flex flex-wrap gap-4">
                            <div v-for="(pos, i) in POSITIONS" :key="i" class="flex-1" @click="togglePosition(pos)">
                                <div :class="['p-3 border-1 surface-border flex align-items-center justify-content-between hover:surface-200 cursor-pointer border-round', { 'selected-position': isPositionSelected(pos) }]">
                                    <div class="flex items-center text-center">
                                        <span class="text-900 text-lg text-center items-center font-medium">
                                            {{ pos }}
                                        </span>
                                    </div>
                                    <span class="text-900 text-lg font-semibold">{{ '&nbsp;' + getPositionCount(pos) }}</span>
                                </div>
                            </div>
                            <Dropdown v-model="selectedTeam" :options="teams" option-label="name" class="w-6rem" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <DataTable v-if="selectedTeam" sortField="ratings.position" :value="filteredPlayers" dataKey="id" paginator :rows="20" responsiveLayout="scroll">
                    <Column field="ratings.position" header="POS" default sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.position[0].position ?? '1' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.position_archetype" header="PAR" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center uppercase">
                                <span>{{ data.ratings.position_archetype ?? '2' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.mental_archetype" header="MAR" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center uppercase">
                                <span>{{ data.ratings.mental_archetype ?? '2' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.speed" header="SPD" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.speed ?? '2' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.acceleration" header="ACC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.acceleration ?? '3' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.agility" header="AGI" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.agility ?? '4' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.strength" header="STR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.strength ?? '5' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.vertical" header="VER" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.vertical ?? '6' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.stamina" header="STA" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.stamina ?? '7' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.carrying" header="CAR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.carrying ?? '8' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.catching" header="CTH" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.catching ?? '9' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.route_running" header="ROR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.route_running ?? '10' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_power" header="THP" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.throw_power ?? '11' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_deep" header="DAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.throw_accuracy_deep ?? '12' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_mid" header="MAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.throw_accuracy_mid ?? '13' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_accuracy_short" header="SAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.throw_accuracy_short ?? '14' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.throw_on_the_run" header="TOR" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.throw_on_the_run ?? '15' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.play_action" header="ACT" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.play_action ?? '16' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.pass_blocking" header="PBL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.pass_blocking ?? '17' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.run_blocking" header="RBL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.run_blocking ?? '18' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.shed_block" header="SHD" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.shed_block ?? '19' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.tackle" header="TKL" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.tackle ?? '20' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.man_coverage" header="MCV" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.man_coverage ?? '21' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.zone_coverage" header="ZCV" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.zone_coverage ?? '22' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.punt_accuracy" header="PAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.punt_accuracy ?? '23' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.punt_power" header="PPW" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.punt_power ?? '24' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.kick_accuracy" header="KAC" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.kick_accuracy ?? '25' }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ratings.kick_power" header="KPW" sortable :headerStyle="{ minWidth: '5rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ratings.kick_power ?? '26' }}</span>
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <div v-else>No team selected or team data not available.</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { FileService } from '@/service/FileService';
import { useStore } from 'vuex';
import { useLayout } from '@/layout/composables/layout';
import World from "../../models/World";
import League from "../../models/League";
import User from "../../models/User";
import Team from "../../models/Team";
import Player from "../../models/Player";
import {POSITIONS, OFF_POSITIONS, DEF_POSITIONS} from '@/data/constants';

export default {
    components: {},
    data() {
        return {
            POSITIONS,
            OFF_POSITIONS,
            DEF_POSITIONS,
            selectedTeam: null,
            selectTeams: [
                {code: 0, name: 'Team 1'},
                {code: 1, name: 'Team 2'},
                {code: 2, name: 'Team 3'},
                {code: 3, name: 'Team 4'},
                {code: 4, name: 'Team 5'},
                {code: 5, name: 'Team 6'},
                {code: 6, name: 'Team 7'},
                {code: 7, name: 'Team 8'},
                {code: 8, name: 'Team 9'},
                {code: 9, name: 'Team 10'},
                {code: 10, name: 'Team 11'},
                {code: 11, name: 'Team 12'},
                {code: 12, name: 'Team 13'},
                {code: 13, name: 'Team 14'},
                {code: 14, name: 'Team 15'},
                {code: 15, name: 'Team 16'},
                {code: 16, name: 'Team 17'},
                {code: 17, name: 'Team 18'},
                {code: 18, name: 'Team 19'},
                {code: 19, name: 'Team 20'},
                {code: 20, name: 'Team 21'},
                {code: 21, name: 'Team 22'},
                {code: 22, name: 'Team 23'},
                {code: 23, name: 'Team 24'},
                {code: 24, name: 'Team 25'},
                {code: 25, name: 'Team 26'},
                {code: 26, name: 'Team 27'},
                {code: 27, name: 'Team 28'},
                {code: 28, name: 'Team 29'},
                {code: 29, name: 'Team 30'},
                {code: 30, name: 'Team 31'},
                {code: 31, name: 'Team 32'},
            ],
            filtered_positions: [],
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
            return this.filtered_positions.includes(pos);
        },
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
                return Player.query().with('team').all();
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
                        this.filtered_positions.includes(player.position[0].position)
                    );
                }
            } else {
                return this.user.team?.players;
            }

            return [];
        },
    },
    mounted() {
        this.selectedTeam = this.teams[0];
    },
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
    background-color: var(--surface-100);
}
</style>
