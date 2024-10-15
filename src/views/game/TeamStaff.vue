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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <DataTable v-if="staff" sortField="ratings.overall" :sortOrder="-1" :value="staff" dataKey="id" paginator :rows="10" responsiveLayout="scroll">
                    <Column field="first_name" header="First" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.first_name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="last_name" header="Last" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.last_name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="role" header="Role" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.role }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="ambition" header="Ambition" default sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.ambition }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="discipline" header="Discipline" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.discipline }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="leadership" header="Leadership" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.leadership }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="motivation" header="Motivation" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.motivation }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="gameplan" header="Gameplan" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.gameplan }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="data_analysis" header="Data Analysis" sortable :headerStyle="{ minWidth: '10rem' }">
                        <template #body="{ data }">
                            <div class="flex align-items-center">
                                <span>{{ data.data_analysis }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column :style="{ width: '10rem' }">
                        <template #body>
                            <div class="text-center">
                                <Button icon="pi pi-user" class="p-button-text p-button-rounded"></Button>
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
import Staff from '@/models/Staff';
import {POSITIONS, OFF_POSITIONS, DEF_POSITIONS} from '@/data/constants';

export default {
    components: {},
    data() {
        return {
            POSITIONS,
            OFF_POSITIONS,
            DEF_POSITIONS,
            selectedTeam: 0,
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
            if (this.user) {
                return this.user.team?.players.filter(player => player.ratings.position === pos).length;
            }
            return 0;
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
        staff: {
            get() {
                return Staff.query().where('team_id', this.user?.team?.id).get();
            }
        },
        filteredPlayers() {
            if (this.user.team) {
                if (this.filtered_positions.length === 0) {
                    return this.user.team.players;
                } else {
                    return this.user.team.players.filter(player =>
                        this.filtered_positions.includes(player.ratings.position)
                    );
                }
            }
            return [];
        },
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
    background-color: var(--surface-100);
}
</style>
