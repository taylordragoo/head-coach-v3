<template>
    <section class="min-h-screen flex items-center lg:items-start lg:py-20 justify-center animate-fadein animate-duration-300 animate-ease-in max-w-[100rem] mx-auto">
        <div class="flex w-full h-full justify-center gap-12">
            <div class="flex flex-col py-20 lg:min-w-[30rem]">
                <router-link to="/" class="flex items-center justify-center lg:justify-start mb-8">
                    <Logo />
                </router-link>
                <div class="flex flex-col justify-center flex-grow">
                    <div class="max-w-md mx-auto w-full">
                        <div v-if='this.databases.length > 0' class='row'>
                            <button type="button" @click='openContinue' label="Continue" class="flex items-center justify-center w-full rounded-lg leading-normal font-medium py-3 border border-primary-600 hover:border-primary-500 bg-primary-600 hover:bg-primary-500 text-surface-0 transition-all mb-2" >Continue</button>
                        </div>
                        <div v-else></div>
                        <div class='row'>
                            <button type="button" @click="openNew" label="New" class="flex items-center justify-center w-full rounded-lg leading-normal font-medium py-3 border border-primary-600 hover:border-primary-500 bg-primary-600 hover:bg-primary-500 text-surface-0 transition-all mb-2">New</button>
                        </div>
                        <div class='row'>
                            <button type="button" @click="openEditor" label="Editor" class="flex items-center justify-center w-full rounded-lg leading-normal font-medium py-3 border border-primary-600 hover:border-primary-500 bg-primary-600 hover:bg-primary-500 text-surface-0 transition-all mb-2">Editor</button>
                        </div>
                        <div class='row'>
                            <button type="button" label="Settings" class="flex items-center justify-center w-full rounded-lg leading-normal font-medium py-3 border border-primary-600 hover:border-primary-500 bg-primary-600 hover:bg-primary-500 text-surface-0 transition-all mb-2">Settings</button>
                        </div>
                        <div class='row'>
                            <button @click="closeApp" type="button" label="Quit" class="flex items-center justify-center w-full rounded-lg leading-normal font-medium py-3 border border-primary-600 hover:border-primary-500 bg-primary-600 hover:bg-primary-500 text-surface-0 transition-all mb-2">Quit</button>
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center lg:text-start block relative text-surface-400 dark:text-surface-500 text-sm">©{{ new Date().getFullYear() }} Okay Interactive</div>
            </div>
            <div class="hidden lg:flex h-full py-20">
                <div class="h-full w-full lg:max-w-[32.5rem] xl:max-w-[60.5rem] mx-auto flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] rounded-3xl border border-surface overflow-hidden">
                    <LazyImage class="w-auto h-full object-contain object-left" src="/demo/images/landing/auth-image.svg" alt="Auth Image" />
                </div>
            </div>
        </div>
    </section>

    <Dialog v-model:visible="coachDialog" append-to="body" modal :breakpoints="{ '960px': '75vw', '640px': '96vw' }" :style="{ width: '52vw' }" header="Edit Your Coach" :draggable="false" :closable="false" :resizable="false">
        <template #header>
            <div class="flex flex-col gap-2">
                <h1 class="m-0 text-surface-900 dark:text-surface-0 font-semibold text-xl leading-normal">Edit Your Coach</h1>
                <span class="text-surface-600 dark:text-surface-200 text-base">Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.</span>
            </div>
        </template>
        <form class="flex flex-col gap-4 mt-4">
            <div class="flex gap-4">
                <div class="w-full">
                    <label for="first_name" class="block mb-1 text-color text-base">First Name</label>
                    <IconField icon-position="left">
                        <InputIcon class="pi pi-user" />
                        <InputText id="first_name" v-model="first_name" required="true" autofocus class="w-full" />
                    </IconField>
                </div>
                <div class="w-full">
                    <label for="last_name" class="block mb-1 text-color text-base">Last Name</label>
                    <IconField icon-position="left">
                        <InputIcon class="pi pi-user" />
                        <InputText id="last_name" v-model="last_name" required="true" autofocus class="w-full" />
                    </IconField>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="w-full">
                    <label for="age" class="block mb-1 text-color text-base">Age</label>
                    <IconField icon-position="left">
                        <InputIcon class="pi pi-clock" />
                        <InputNumber id="age" v-model="age" name="age" required="true" autofocus class="w-full" />
                    </IconField>
                </div>
                <div class="w-full">
                    <label for="exp" class="block mb-1 text-color text-base">Experience</label>
                    <Select id="inventoryStatus" v-model='exp' :options="statuses" optionLabel="name" placeholder="Select experience level..." class="w-full"></Select>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="w-full">
                    <label for="age" class="block mb-1 text-color text-base">League</label>
                    <Select id="inventoryStatus" v-model='league' :options="leagues" optionLabel="name" placeholder="Select a league..." class="w-full"></Select>
                </div>
                <div class="w-full">
                    <label for="age" class="block mb-1 text-color text-base">Team</label>
                    <Select id="inventoryStatus" v-model='team' :options="league.teams" optionLabel="name" placeholder="Select a team..." class="w-full"></Select>
                </div>
                <div class="w-full">
                    <label for="age" class="block mb-1 text-color text-base">Skillset</label>
                    <Select id="inventoryStatus" v-model='skill' :options="skills" optionLabel="name" placeholder="Select a skillset..." class="w-full"></Select>
                </div>
            </div>
        </form>
        <template #footer>
            <div class="w-full flex gap-4 justify-end border-t border-surface pt-8">
                <Button label="Cancel" text @click="hideDialog" />
                <Button label="Create" rounded @click="createNewCareer" />
            </div>
        </template>
    </Dialog>

    <Dialog v-model:visible="continueDialog" :style="{width: '800px'}" header="Continue previous save..." close-icon="false" :draggable="false" :closable="false" :modal="true" class="p-fluid bg-white">
        <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-1" v-for='(save, index) in this.existing_db_names' v-bind:key="index">
                <div class="p-fluid">
                    <h5>{{ save.formatted }}</h5>
                    <div class="field grid">
                        <label class="col-12 mb-2 md:col-2 md:mb-0">Week</label>
                        <div class="col-12 md:col-10">
                            <InputText id="name3" type="text" disabled/>
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-12 mb-2 md:col-2 md:mb-0">Year</label>
                        <div class="col-12 md:col-10">
                            <InputText id="email3" type="text" disabled/>
                        </div>
                    </div>
                    <div class="flex w-full mt-2 mb-2 justify-between">
                        <div class="flex items-center w-full px-2">
                            <Button type="button" to='/dashboard' @click='loadSelectedCareer(save.original)' label="Continue Save" class="mb-2 p-button-primary w-full" />
                        </div>
                        <div class="flex items-center w-full px-2">
                            <Button type="button" to='/dashboard' @click='deleteSelectedCareer(save.original)' label="Delete" class="mb-2 p-button-danger w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1">
                <div class="flex px-2">
                    <Button @click="hideDialog()" label="Cancel" class="p-button-secondary mt-8 mb-2" />
                </div>
            </div>
        </div>
    </Dialog>

    <Dialog v-model:visible="loadingDialog" :style="{width: '800px'}" :draggable="false" :closable="false" :modal="true" class='p-fluid bg-white'>
        <div class="justify-content-center">
            <h5>Loading...</h5>
            <div class="grid">
                <div class="col">
                    <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="false"> Percent Complete: {{value1}}% </ProgressBar>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script>
import {
    CareerController,
    DatabaseController
}  from '@/controllers/index';
import { handleGetDefaultTeamsAndLeagues, handleCreateNewCareer } from '@/lib/MainMenuMethods'; 

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            age: null,
            exp: '',
            league: { teams: [] },
            team: null,
            skill: null,
            players: null,
            teams: null,
            leagues: null,
            value1: 0,
            db: null,
            databases: [],
            existing_db_names: [],
            interval: null,
            loading: false,
            deleting: false,
            creating: false,
            coachDialog: false,
            continueDialog: false,
            loadingDialog: false,
            selectedTreeTableValue: null,
            treeTableValue: null,
            selectedTreeValue: null,
            treeValue: null,
            statuses: [
                {name: 'None', value: 0 },
                {name: 'High School', value: 1 },
                {name: 'College', value: 2 },
                {name: 'Professional', value: 3 },
                {name: 'Hall Of Fame', value: 4 }
            ],
            skills: [
                { value: 0, name: "Team Builder" },
                { value: 1, name: "Staff Builder" },
                { value: 2, name: "Youth Specialist" },
            ],
            careerController: null,
            databaseController: null
        }
    },
    created() {
        this.careerController = new CareerController()
        this.databaseController = DatabaseController.getInstance()
        this.initializeData()
    },
    mounted() {
        // this.$store.dispatch('resetState')
    },
    watch: {
        value1() {
            let obj = this
            if(obj.value1 > 100) {
                obj.endProgress();
                console.log("Loading over")
            }
        }
    },
    methods: {
        async initializeData() {
            const data = await handleGetDefaultTeamsAndLeagues();
            this.leagues = data.leagues
            this.teams = data.teams
            this.leagues[0].teams = this.teams
            this.players = data.players
            this.treeTableValue = data.treeTableValue
            this.databases = data.databases
            this.existing_db_names = data.names
        },
        async loadSelectedCareer(name) {
            let obj = this
            let db_name = name;
            obj.loading = true
            obj.restartTimer();

            console.log("DB: " + db_name)
            this.careerController.loadSelectedCareer(db_name);
        },
        createNewCareer() {
            let obj = this
            obj.coachDialog = false
            obj.loadingDialog = true;
            obj.creating = true
            let user = {
                id: 0,
                first: obj.first_name,
                last: obj.last_name,
                age: obj.age,
                exp: obj.exp.label,
                skill: obj.skill.skill,
                team_id: obj.team.id,
            }
            handleCreateNewCareer(user);
            obj.restartTimer();
        },
        closeApp() {
            console.log("Close App")
            window.ipcRenderer.send('quit-app');
        },
        openNew() {
            this.coach = {};
            this.submitted = false;
            this.coachDialog = true;
        },
        openContinue() {
            this.coach = {};

            this.submitted = false;
            this.continueDialog = true;
        },
        openEditor() {
            this.$router.push('/editor')
        },
        hideDialog() {
            console.log("Hide Dialog")
            this.coachDialog = false;
            this.continueDialog = false;
            this.loadingDialog = false;
            this.submitted = false;

            if(this.loading) {
                console.log("Loading")
                this.$router.push('/home')
                this.loading = false
            }

            if(this.creating) {
                console.log("Creating")
                this.$router.push('/home')
                this.creating = false
            }

            if(this.deleting) {
                console.log("Deleting")
                this.$router.push('/')
                this.deleting = false
            }
        },
        async startProgressAndLongRunningFunction() {
            this.restartTimer();
            const longRunningFunctionPromise = this.longRunningFunction();
            await longRunningFunctionPromise;
            this.endProgress();
        },
        restartTimer() {
            clearInterval(this.interval);
            this.value1 = 0;
            setTimeout(() => {
                this.startProgress();
            }, 100);
        },
        startProgress() {
            this.continueDialog = false
            this.coachDialog = false
            this.loadingDialog = true
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
                this.value1 = newValue;
                console.log(this.value1);
            }, 500);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
            setTimeout(() => {
                this.hideDialog()
            }, 500);
        },
        deleteSelectedCareer(db) {
            let obj = this
            obj.deleting = true
            obj.restartTimer();
            this.careerController.delete(db);
        }
    }
}
</script>
