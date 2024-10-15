<script setup>
import { FilterMatchMode } from 'primevue/api';
import { ref, onMounted, onBeforeMount, computed, watch } from 'vue';
import TreeTable from 'primevue/treetable';
import { POSITIONS, POSITION_ARCHETYPES, POSITION_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants.ts'
import { RAW_MENTAL_ARCHETYPES, MENTAL_ARCHETYPES_DISPLAY_NAMES } from '@/data/constants.ts'
import Menu from 'primevue/menu';
import { ProductService } from '@/service/ProductService';
import { NodeService } from '@/service/NodeService';
import { CustomerService } from '@/service/CustomerService';
import { useToast } from 'primevue/usetoast';
import { DatabaseController, CareerController } from "@/controllers/";
import Utilities from "../../utils/utilities.ts";
import World from "../../models/World";
import League from "../../models/League";
import User from "../../models/User";
import Team from "../../models/Team";
import Player from "../../models/Player";
import Staff from "../../models/Staff";
import { useLayout } from '@/layout/composables/layout';
import EditorTopBar from '../../layout/EditorTopBar.vue';

// *********** OLD SHIT ****************
const toast = useToast();
const products = ref(null);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref(null);
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);
const productService = new ProductService();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'USA' }
]);
const selectedCountry = ref(null);
const nodeService = new NodeService();
const curtomerService = new CustomerService();
const customers = ref([]);
// ************************************

const menuItems = ref([
    { label: 'Edit', icon: 'pi pi-pencil', command: () => openNew() },
    { label: 'Fire', icon: 'pi pi-trash', command: () => handleDelete() },
]);
const menu = ref(null);
const clickedTask = ref(null);
const statuses = ref([{ value: 'Team Info' }, { value: 'Staff' }, { value: 'Players' }]);
const world = ref(null);
const leagues = ref([]);
const teams = ref([]);
const players = ref([]);
const selected_team = ref([{ name: 'Select...' }]);
const selected_type = ref(statuses.value[0]);
const careerController = CareerController.getInstance();
const databaseController = DatabaseController.getInstance();
const staffTreeValue = ref([]);
const playerDialog = ref(false);
const staffDialog = ref(false);
const staffEditObject = ref(null);
const playerEditObject = ref(null);

onBeforeMount(() => {
    initFilters();
});
onMounted(async () => {
    productService.getProducts().then((data) => (products.value = data));
    customers.value = await curtomerService.getCustomersLarge();
    await getDefaultDatabase().then(() => {
        selected_team.value = teams.value[0];
    });
});
const getDefaultDatabase = async () => {
    console.log('default');
    await careerController.loadSelectedCareer('default');
    players.value = Player.all();
    teams.value = Team.query().with('players.*').all();
    leagues.value = League.all();
    world.value = World.query().with('leagues.teams.players.*').first()
}
const positionArchetypes = computed(() => {
    return playerEditObject.value && playerEditObject.value.position 
        ? POSITION_ARCHETYPES[playerEditObject.value.position].map(archetype => ({
            value: archetype,
            label: POSITION_ARCHETYPES_DISPLAY_NAMES[archetype]
          }))
        : [];
})
const mentalArchetypes = computed(() => {
    return RAW_MENTAL_ARCHETYPES.map(archetype => ({
        value: archetype,
        label: MENTAL_ARCHETYPES_DISPLAY_NAMES[archetype]
    }));
})
watch(() => playerEditObject.value?.position, (newPosition) => {
    const newArchetypes = POSITION_ARCHETYPES[newPosition] || [];
    if (!newArchetypes.includes(playerEditObject.value.position_archetype)) {
        playerEditObject.value.position_archetype = '';
    }
});
const filteredTeam = computed(() => {
    if(selected_type.value != null) {
        if(selected_type.value.value == 'Team Info') {
            return selected_team.value;
        }
        if(selected_type.value.value == 'Staff') {
            return selected_team.value.staff;
        }
        if(selected_type.value.value == 'Players') {
            return selected_team.value.players;
        }
    }
})
const filteredStaff = computed(() => {
    let coaches = Staff.query().where('team_id', selected_team.value.tid).where('role', [
        'Head Coach', 
        'Offensive Coordinator', 
        'Defensive Coordinator',
        'QB Coach',
        "RB Coach",
        "TE Coach",
        "WR Coach",
        'OLine Coach',
        'DLine Coach',
        'Linebacker Coach',
        'Secondary Coach',
        'Special Teams Coach',
        'Strength Coach',
        'Coach'
    ]).get();
    let medical = Staff.query().where('team_id', selected_team.value.tid).where('role', [
        'Sports Medicine Director',
        'Doctor',
        'Trainer'
    ]).get();
    let scouting = Staff.query().where('team_id', selected_team.value.tid).where('role', [
        'Director of Pro Scouting',
        'Director of College Scouting',
        'Scout'
    ]).get();
    let front_office = Staff.query().where('team_id', selected_team.value.tid).where('role', [
        'Owner',
        'Chief Executive Officer',
        'President',
        'General Manager'
    ]).get();

    return {
        coaches: coaches,
        medical: medical,
        scouting: scouting,
        front_office: front_office
    }
})
const transformStaffToTreeData = (staffGroup, categoryKey) => {
    const customerData = customers.value;

    return staffGroup.map((staff, index) => ({
        key: `${categoryKey}-${index}`,
        data: {
            id: staff.id,
            category: "",
            role: staff.role,
            first_name: staff.first_name,
            last_name: staff.last_name,
            age: Utilities.randInt(30, 70),
            contract_length: Utilities.randInt(1, 5),
            contract_amount: formatCurrency(Utilities.randInt(100000, 1000000)),
            image: customerData[Math.floor(Math.random() * customerData.length)].representative.image,
            ratings: staff
        }
    }));
};

const onEdit = () => {
    if (clickedTask.value) {
        clickedTask.value = null;
    }
}

const handleDelete = () => {
    if (clickedTask.value) {
        clickedTask.value = null;
    }
}

const updateTreeValue = () => {
    const staffData = filteredStaff.value;

    staffTreeValue.value = [
        {
            key: "0",
            data: {
                category: "Board",
                role: "",
                first_name: "",
                last_name: "",
                age: "",
                image: ""
            },
            children: transformStaffToTreeData(staffData.front_office, "0")
        },
        {
            key: "1",
            data: {
                category: "Coaches",
                role: "",
                first_name: "",
                last_name: "",
                age: "",
                image: ""
            },
            children: transformStaffToTreeData(staffData.coaches, "1")
        },
        {
            key: "2",
            data: {
                category: "Scouting",
                role: "",
                first_name: "",
                last_name: "",
                age: "",
                image: ""
            },
            children: transformStaffToTreeData(staffData.scouting, "2")
        },
        {
            key: "3",
            data: {
                category: "Medical",
                role: "",
                first_name: "",
                last_name: "",
                age: "",
                image: ""
            },
            children: transformStaffToTreeData(staffData.medical, "3")
        },
    ];
};

watch(filteredStaff, updateTreeValue, { immediate: true });

const saveStaff = async () => {
    if (staffEditObject.value) {
        const staff = await Staff.update({
            id: staffEditObject.value.id,
            first_name: staffEditObject.value.first_name,
            last_name: staffEditObject.value.last_name,
            birth_year: staffEditObject.value.birth_year,
            leadership: staffEditObject.value.leadership,
            adaptability: staffEditObject.value.adaptability,
            ambition: staffEditObject.value.ambition,
            discipline: staffEditObject.value.discipline,
            motivation: staffEditObject.value.motivation,
            rookie_player_management: staffEditObject.value.rookie_player_management,
            veteran_player_management: staffEditObject.value.veteran_player_management,
            contract_negotiations: staffEditObject.value.contract_negotiations,
            play_calling_ability: staffEditObject.value.play_calling_ability,
            gameplan: staffEditObject.value.gameplan,
            data_analysis: staffEditObject.value.data_analysis,
            player_ability_analysis: staffEditObject.value.player_ability_analysis,
            player_potential_analysis: staffEditObject.value.player_potential_analysis,
            staff_ability_analysis: staffEditObject.value.staff_ability_analysis,
            offensive_technical: staffEditObject.value.offensive_technical,
            defensive_technical: staffEditObject.value.defensive_technical,
            throwing_technical: staffEditObject.value.throwing_technical,
            hands_technical: staffEditObject.value.hands_technical,
            routes_technical: staffEditObject.value.routes_technical,
            blocking_technical: staffEditObject.value.blocking_technical,
            tackling_technical: staffEditObject.value.tackling_technical,
            coverage_technical: staffEditObject.value.coverage_technical,
            kicking_technical: staffEditObject.value.kicking_technical,
            punting_technical: staffEditObject.value.punting_technical,
            athletic_training: staffEditObject.value.athletic_training,
            medical_training: staffEditObject.value.medical_training
        })
        staffEditObject.value = staff.staff[0];
        console.log(staffEditObject.value)
        databaseController.saveDefaultDatabase();
    }
}

const saveTeam = async () => {
    if (selected_team.value) {
        delete selected_team.value.players;
        let data = selected_team.value;
        const team = await Team.update({data});
        databaseController.saveDefaultDatabase();
    }
}

const savePlayer = async () => {
    if (playerEditObject.value) {
        let data = playerEditObject.value
        const player = await Player.update({data});
        databaseController.saveDefaultDatabase();
    }
}

const toggle = (event, node) => {
    // console.log(node)
    staffEditObject.value = Staff.find(node.data.id)
    menu.value.toggle(event);
};

const toggle_player_edit = (event, node) => {
    // console.log(node);
    playerEditObject.value = node;
    openPlayerEdit();
};

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const openPlayerEdit = () => {
    playerDialog.value = true;
}

// ********** OLD SHIT *****************
const openNew = () => {
    product.value = {};
    submitted.value = false;
    staffDialog.value = true;
};

const hideDialog = () => {
    staffDialog.value = false;
    playerDialog.value = false;
    submitted.value = false;
};

const saveProduct = () => {
    submitted.value = true;
    if (product.value.name && product.value.name.trim() && product.value.price) {
        if (product.value.id) {
            product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus;
            products.value[findIndexById(product.value.id)] = product.value;
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        } else {
            product.value.id = createId();
            product.value.code = createId();
            product.value.image = 'product-placeholder.svg';
            product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
            products.value.push(product.value);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }
        productDialog.value = false;
        product.value = {};
    }
};

const editProduct = (editProduct) => {
    product.value = { ...editProduct };
    productDialog.value = true;
};

const confirmDeleteProduct = (editProduct) => {
    product.value = editProduct;
    deleteProductDialog.value = true;
};

const deleteProduct = () => {
    products.value = products.value.filter((val) => val.id !== product.value.id);
    deleteProductDialog.value = false;
    product.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
};

const createId = () => {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};

const exportCSV = () => {
    dt.value.exportCSV();
};

const confirmDeleteSelected = () => {
    deleteProductsDialog.value = true;
};

const deleteSelectedProducts = () => {
    products.value = products.value.filter((val) => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

const getBadgeSeverity = (status) => {
    const stockStatus = {
        OUTOFSTOCK: 'danger',
        LOWSTOCK: 'warning',
        INSTOCK: 'success',
    };

    return stockStatus[status];
};
// ************************************
</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <div class="layout-content-wrapper">
            <div class="layout-topbar-menu-section">
                <EditorTopBar ref="topbarRef"></EditorTopBar>
            </div>
            <div class="layout-content">
                <div class="grid">
                    <div class="col-12">
                        <div class="card">
                            <Toolbar class="mb-4">
                                <template v-slot:start>
                                    <div class="flex my-2">
                                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                                        <Button label="Export" icon="pi pi-download" class="p-button-help mr-2" @click="exportCSV($event)" />
                                    </div>
                                </template>

                                <template v-slot:end>
                                    <div class="flex justify-end">
                                        <Dropdown v-model="selected_team" :options="teams" option-label="name" class="w-12rem mr-2" />
                                        <Dropdown v-model="selected_type" :options="statuses" option-label="value" class="w-12rem" />
                                    </div>
                                </template>
                            </Toolbar>

                            <div v-if="selected_type.value == 'Team Info'">
                                <span class="text-900 text-xl font-bold mb-4 block">Edit Team</span>
                                <div class="grid">
                                    <div class="col-12 lg:col-2">
                                        <div class="text-900 font-medium text-xl mb-3">Profile</div>
                                        <p class="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
                                    </div>
                                    <div class="col-12 lg:col-10">
                                        <div class="grid formgrid p-fluid">
                                            <div class="field mb-4 col-6">
                                                <label htmlFor="name" class="font-medium text-900"> Region </label>
                                                <InputText v-model="selected_team.region" id="name" type="text" />
                                            </div>
                                            <div class="field mb-4 col-6">
                                                <label htmlFor="nickname" class="font-medium text-900"> Nickname </label>
                                                <InputText v-model="selected_team.name" id="nickname" type="text" />
                                            </div>
                                            <div class="field mb-4 col-6">
                                                <label htmlFor="nickname" class="font-medium text-900"> Abbreviation </label>
                                                <InputText v-model="selected_team.abbreviation" id="nickname" type="text" />
                                            </div>
                                            <div class="field mb-4 col-12 md:col-6">
                                                <label htmlFor="country" class="font-medium text-900"> Country </label>
                                                <Dropdown 
                                                    @update:modelValue="val => selected_team.country = val.code"
                                                    :modelValue="selected_team.country"
                                                    :options="countries" 
                                                    optionLabel="name" 
                                                    :filter="true" 
                                                    placeholder="Select a Country"
                                                    :showClear="true" 
                                                >
                                                    <template #value="slotProps">
                                                        <div class="country-item country-item-value flex align-items-center" v-if="slotProps.value">
                                                            <span :class="`mr-2 flag flag-${countries.find(country => country.code === selected_team.country).code.toLowerCase()}`" style="width: 18px; height: 12px" />
                                                            <div>{{ countries.find(country => country.code === selected_team.country).name }}</div>
                                                        </div>
                                                        <span v-else>
                                                            {{ slotProps.placeholder }}
                                                        </span>
                                                    </template>
                                                    <template #option="slotProps">
                                                        <div class="country-item flex align-items-center">
                                                            <span :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px; height: 12px" />
                                                            <div>{{ slotProps.option.name }}</div>
                                                        </div>
                                                    </template>
                                                </Dropdown>
                                            </div>
                                            <div class="col-12">
                                                <Button label="Save Team Info" @click="saveTeam" class="w-auto mt-3"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="selected_type.value == 'Staff'">
                                <TreeTable :value="staffTreeValue" loadingMode="icon" nodeIcon="none" class="w-full">
                                    <template #header> Team Staff </template>
                                    <Column dataKey="name" field="category" header="" :expander="true" style="width: 10%"></Column>
                                    <Column field="" header="" style="width: 10%">
                                        <template #body="{ node }">
                                            <div v-if="!node.children" class="flex flex-wrap gap-2 justify-content-center">
                                                <img :src="`/demo/images/avatar/${node.data.image}`" class="w-2rem mr-2" />
                                            </div>
                                        </template>
                                    </Column>
                                    <Column field="role" header="Role"></Column>
                                    <Column field="first_name" header="First Name"></Column>
                                    <Column field="last_name" header="Last Name"></Column>
                                    <Column field="age" header="Age"></Column>
                                    <Column field="contract_length" header="Contract Length"></Column>
                                    <Column field="contract_amount" header="Contract Amount"></Column>
                                    <Column field="" header="" style="width: 5%">
                                        <template #body="{ node }">
                                            <div v-if="!node.children" class="flex flex-wrap gap-2 justify-content-end">
                                                <Button type="button" class="p-button-rounded p-button-text z-3 ml-auto sm:ml-0" icon="pi pi-ellipsis-v" @click="toggle($event, node)" aria-haspopup="true" aria-controls="overlay_menu" />
                                                <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" styleClass="w-8rem" />
                                            </div> 
                                        </template>
                                    </Column>
                                </TreeTable>
                            </div>

                            <DataTable v-if="selected_type.value == 'Players'"
                                sortField="ratings.position" 
                                :sortOrder="1"
                                stripedRows
                                :value="selected_team.players" 
                                dataKey="id" 
                                paginator 
                                :rows="10" 
                                responsiveLayout="scroll"
                                :rowsPerPageOptions="[5, 10, 20, 50]"
                                resizableColumns 
                                columnResizeMode="fit"
                                selectionMode="single"
                                scrollHeight="calc(100vh - 300px)" 
                                :virtualScrollerOptions="{ itemSize: 60 }"
                            >
                                <Column field="ratings.position" header="Position" sortable :headerStyle="{ minWidth: '5rem' }">
                                    <template #body="{ data }">
                                        <div class="flex align-items-center">
                                            <span>{{ data.ratings.position ?? '' }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="ratings.position_archetype" header="Position Archetype" sortable :headerStyle="{ minWidth: '10rem' }">
                                    <template #body="{ data }">
                                        <div class="flex align-items-center uppercase">
                                            <span>{{ data.ratings.position_archetype_name ?? '' }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="ratings.mental_archetype" header="Mental Archetype" sortable :headerStyle="{ minWidth: '10rem' }">
                                    <template #body="{ data }">
                                        <div class="flex align-items-center uppercase">
                                            <span>{{ data.ratings.mental_archetype_name ?? '' }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="first_name" header="First Name" sortable :headerStyle="{ minWidth: '10rem' }">
                                    <template #body="{ data }">
                                        <div class="flex align-items-center uppercase">
                                            <span>{{ data.first_name ?? '' }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="last_name" header="Last Name" sortable :headerStyle="{ minWidth: '10rem' }">
                                    <template #body="{ data }">
                                        <div class="flex align-items-center uppercase">
                                            <span>{{ data.last_name ?? '' }}</span>
                                        </div>
                                    </template>
                                </Column>
                                <Column field="" header="" :headerStyle="{ minWidth: '5rem' }">
                                    <template #body="{ data }">
                                        <div class="flex flex-wrap gap-2 justify-content-end">
                                            <Button type="button" class="p-button-rounded p-button-text z-3 ml-auto sm:ml-0" icon="pi pi-pencil" @click="toggle_player_edit($event, data)" />
                                        </div> 
                                    </template>
                                </Column>
                            </DataTable>

                            <Dialog v-model:visible="staffDialog" :style="{ width: '46rem' }" :draggable="false" :closable="true" header="Edit Staff" :modal="true" class="p-fluid">
                                <img :src="'/demo/images/product/' + product.image" :alt="product.image" v-if="product.image" width="150" class="mt-0 mx-auto mb-5 block shadow-2" />
                                <div class="field">
                                    <label for="first_name">First Name</label>
                                    <InputText id="first_name" v-model.trim="staffEditObject.first_name" required="true" autofocus :class="{ 'p-invalid': submitted && !staffEditObject.first_name }" />
                                    <small class="p-invalid" v-if="submitted && !staffEditObject.first_name">Name is required.</small>
                                </div>
                                <div class="field">
                                    <label for="last_name">Last Name</label>
                                    <InputText id="last_name" v-model.trim="staffEditObject.last_name" required="true" autofocus :class="{ 'p-invalid': submitted && !staffEditObject.last_name }" />
                                    <small class="p-invalid" v-if="submitted && !staffEditObject.last_name">Name is required.</small>
                                </div>
                                <div class="field">
                                    <label for="birth_year">Birth Year</label>
                                    <InputText id="birth_year" v-model.trim="staffEditObject.birth_year" required="true" autofocus :class="{ 'p-invalid': submitted && !staffEditObject.birth_year }" />
                                    <small class="p-invalid" v-if="submitted && !staffEditObject.birth_year">Name is required.</small>
                                </div>

                                <TabView>
                                    <TabPanel header="Mental">
                                        <div class="formgrid grid px-2 mt-3">
                                            <div class="col-6 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="leadership">Leadership</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="leadership" v-model="staffEditObject.leadership" :class="{ 'p-invalid': submitted && !staffEditObject.leadership }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="leadership">Adaptability</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="adaptability" v-model="staffEditObject.adaptability" :class="{ 'p-invalid': submitted && !staffEditObject.adaptability }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="ambition">Ambition</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="ambition" v-model="staffEditObject.ambition" :class="{ 'p-invalid': submitted && !staffEditObject.ambition }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="discipline">Discipline</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="discipline" v-model="staffEditObject.discipline" :class="{ 'p-invalid': submitted && !staffEditObject.discipline }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="motivation">Motivation</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="motivation" v-model="staffEditObject.motivation" :class="{ 'p-invalid': submitted && !staffEditObject.motivation }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Coaching">
                                        <div class="formgrid grid px-2 mt-3">
                                            <div class="col-6 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="leadership">Offense</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="offensive_technical" v-model="staffEditObject.offensive_technical" :class="{ 'p-invalid': submitted && !staffEditObject.offensive_technical }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="throwing_technical">Throwing</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throwing_technical" v-model="staffEditObject.throwing_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="hands_technical">Hands</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="hands_technical" v-model="staffEditObject.hands_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="routes_technical">Routes</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="routes_technical" v-model="staffEditObject.routes_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="blocking_technical">Blocking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="blocking_technical" v-model="staffEditObject.blocking_technical" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="defensive_technical">Defense</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="defensive_technical" v-model="staffEditObject.defensive_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="tackling_technical">Tackling</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="tackling_technical" v-model="staffEditObject.tackling_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="coverage_technical">Coverage</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="coverage_technical" v-model="staffEditObject.coverage_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="kicking_technical">Kicking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="kicking_technical" v-model="staffEditObject.kicking_technical" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="punting_technical">Punting</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="punting_technical" v-model="staffEditObject.punting_technical" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Scouting">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-6 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="data_analysis">Analysis</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="data_analysis" v-model="staffEditObject.data_analysis" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="player_ability_analysis">Ability</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="player_ability_analysis" v-model="staffEditObject.player_ability_analysis" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="player_potential_analysis">Potential</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="player_potential_analysis" v-model="staffEditObject.player_potential_analysis" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="staff_ability_analysis">Staff</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="staff_ability_analysis" v-model="staffEditObject.staff_ability_analysis" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Experience">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-6 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="rookie_player_management">Rookies</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="rookie_player_management" v-model="staffEditObject.rookie_player_management" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="veteran_player_management">Veterans</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="veteran_player_management" v-model="staffEditObject.veteran_player_management" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="play_calling_ability">Playcalling</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="play_calling_ability" v-model="staffEditObject.play_calling_ability" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="gameplan">Gameplan</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="gameplan" v-model="staffEditObject.gameplan" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Medical">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-6 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="athletic_training">Athletic Training</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="athletic_training" v-model="staffEditObject.athletic_training" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="field w-full inline-flex justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="medical_training">Medical Training</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="medical_training" v-model="staffEditObject.medical_training" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </TabView>
                                <template #footer>
                                    <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                                    <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveStaff" />
                                </template>
                            </Dialog>

                            <Dialog v-model:visible="playerDialog" header="Player Details" :draggable="false" :modal="true" class="p-fluid w-6">

                                <div class="formgrid grid">
                                    <div class="field col-6">
                                        <label for="First Name" class="mb-1">First Name</label>
                                        <InputText id="first_name" v-model.trim="playerEditObject.first_name" required="true" autofocus :class="{ 'p-invalid': submitted && !playerEditObject.first_name }" />
                                        <small class="p-invalid" v-if="submitted && !playerEditObject.first_name">First Name is required.</small>
                                    </div>
                                    
                                    <div class="field col-6">
                                        <label for="Last Name" class="mb-1">Last Name</label>
                                        <InputText id="last_name" v-model.trim="playerEditObject.last_name" required="true" autofocus :class="{ 'p-invalid': submitted && !playerEditObject.last_name }" />
                                        <small class="p-invalid" v-if="submitted && !playerEditObject.last_name">Last Name is required.</small>
                                    </div>
                                </div>

                                <div class="formgrid grid">
                                    <div class="field col-4">
                                        <label for="inventoryStatus" class="mb-1">Position</label>
                                        <Dropdown id="inventoryStatus" v-model="playerEditObject.position" :options="POSITIONS" placeholder="Select...">
                                            <template #value="slotProps">
                                                <div v-if="slotProps.value">
                                                    <Badge :severity="getBadgeSeverity(slotProps.value.value || slotProps.value)">{{ slotProps.value.value || slotProps.value }}</Badge>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div>
                                                    <Badge :severity="getBadgeSeverity(slotProps.option)">{{ slotProps.option }}</Badge>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>

                                    <div class="field col-4">
                                        <label for="inventoryStatus" class="mb-1">Position Archetype</label>
                                        <Dropdown id="inventoryStatus" v-model="playerEditObject.position_archetype" :options="positionArchetypes" placeholder="Select...">
                                            <template #value="slotProps">
                                                <div v-if="slotProps.value">
                                                    <Badge>{{ POSITION_ARCHETYPES_DISPLAY_NAMES[slotProps.value.value ? slotProps.value.value : slotProps.value] }}</Badge>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div>
                                                    <Badge :severity="getBadgeSeverity(slotProps.option.value)">{{ slotProps.option.label }}</Badge>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>

                                    <div class="field col-4">
                                        <label for="inventoryStatus" class="mb-1">Mental Archetype</label>
                                        <Dropdown id="inventoryStatus" v-model="playerEditObject.mental_archetype" :options="mentalArchetypes" placeholder="Select...">
                                            <template #value="slotProps">
                                                <div v-if="slotProps.value">
                                                    <Badge :severity="getBadgeSeverity(slotProps.value.value || slotProps.value)">{{ MENTAL_ARCHETYPES_DISPLAY_NAMES[slotProps.value.value ? slotProps.value.value : slotProps.value] }}</Badge>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div>
                                                    <Badge :severity="getBadgeSeverity(slotProps.option.value)">{{ slotProps.option.label }}</Badge>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>
                                </div>

                                <TabView>
                                    <TabPanel header="Mental">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="aggression">Aggression</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="aggression" v-model="playerEditObject.ratings.aggression" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.aggression }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="anticipation">Anticipation</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="anticipation" v-model="playerEditObject.ratings.anticipation" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.anticipation }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="bravery">Bravery</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="bravery" v-model="playerEditObject.ratings.bravery" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.bravery }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="composure">Composure</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="composure" v-model="playerEditObject.ratings.composure" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.composure }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="leadership">Leadership</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="leadership" v-model="playerEditObject.ratings.leadership" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.leadership }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="off_the_ball">Off The Ball</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="off_the_ball" v-model="playerEditObject.ratings.off_the_ball" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.off_the_ball }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="positioning">Positioning</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="positioning" v-model="playerEditObject.ratings.positioning" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.positioning }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="vision">Vision</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="vision" v-model="playerEditObject.ratings.vision" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.vision }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="decisions">Decisions</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="decisions" v-model="playerEditObject.ratings.decisions" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.decisions }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="determination">Determination</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="determination" v-model="playerEditObject.ratings.determination" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.determination }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="teamwork">Teamwork</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="teamwork" v-model="playerEditObject.ratings.teamwork" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.teamwork }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="work_rate">Work Rate</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="work_rate" v-model="playerEditObject.ratings.work_rate" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.work_rate }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Physical">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="speed">Speed</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="speed" v-model="playerEditObject.ratings.speed" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="acceleration">Acceleration</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="acceleration" v-model="playerEditObject.ratings.acceleration" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="agility">Agility</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="agility" v-model="playerEditObject.ratings.agility" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="vertical">Vertical</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="vertical" v-model="playerEditObject.ratings.vertical" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="strength">Strength</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="strength" v-model="playerEditObject.ratings.strength" integeronly />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="stamina">Stamina</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="stamina" v-model="playerEditObject.ratings.stamina" integeronly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="vertical">&nbsp;</label>
                                                    </div>
                                                    <div class="w-1/4 block">
                                                        <InputNumber id="vertical" class="hidden" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Passing">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="throw_accuracy_short">Short Accuracy</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throw_accuracy_short" v-model="playerEditObject.ratings.throw_accuracy_short" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.throw_accuracy_short }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="throw_accuracy_mid">Medium Accuracy</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throw_accuracy_mid" v-model="playerEditObject.ratings.throw_accuracy_mid" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.throw_accuracy_mid }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="throw_accuracy_deep">Deep Accuracy</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throw_accuracy_deep" v-model="playerEditObject.ratings.throw_accuracy_deep" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.throw_accuracy_deep }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="throw_power">Throw Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throw_power" v-model="playerEditObject.ratings.throw_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.throw_power }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="throw_on_the_run">Throw On The Run</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="throw_on_the_run" v-model="playerEditObject.ratings.throw_on_the_run" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.throw_on_the_run }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="play_action">Play Action</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="play_action" v-model="playerEditObject.ratings.play_action" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.play_action }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700"></div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Running">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="carrying">Carrying</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="carrying" v-model="playerEditObject.ratings.carrying" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.carrying }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="break_tackle">Break Tackle</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="break_tackle" v-model="playerEditObject.ratings.break_tackle" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.break_tackle }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="stiff_arm">Stiff Arm</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="stiff_arm" v-model="playerEditObject.ratings.stiff_arm" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.stiff_arm }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="spin_move">Spin Move</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="spin_move" v-model="playerEditObject.ratings.spin_move" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.spin_move }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="trucking">Trucking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="trucking" v-model="playerEditObject.ratings.trucking" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.trucking }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="trucking">Trucking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="trucking" v-model="playerEditObject.ratings.trucking" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.trucking }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Receiving">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="short_route_running">Short Routes</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="short_route_running" v-model="playerEditObject.ratings.short_route_running" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.short_route_running }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="medium_route_running">Medium Routes</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="medium_route_running" v-model="playerEditObject.ratings.medium_route_running" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.medium_route_running }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="deep_route_running">Deep Routes</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="deep_route_running" v-model="playerEditObject.ratings.deep_route_running" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.deep_route_running }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="catching">Catching</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="catching" v-model="playerEditObject.ratings.catching" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.catching }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="release">Release</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="release" v-model="playerEditObject.ratings.release" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.release }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="catch_in_traffic">Catch In Traffic</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="catch_in_traffic" v-model="playerEditObject.ratings.catch_in_traffic" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.catch_in_traffic }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Blocking">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="pass_blocking">Pass Blocking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="pass_blocking" v-model="playerEditObject.ratings.pass_blocking" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.pass_blocking }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="pass_blocking_power">Pass Block Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="pass_blocking_power" v-model="playerEditObject.ratings.pass_block_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.pass_block_power }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full text-left">
                                                        <label for="pass_block_finesse">Pass Block Finesse</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="pass_block_finesse" v-model="playerEditObject.ratings.pass_block_finesse" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.pass_block_finesse }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="run_blocking">Run Blocking</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="run_blocking" v-model="playerEditObject.ratings.run_blocking" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.run_blocking }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="run_block_power">Run Blocking Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="run_block_power" v-model="playerEditObject.ratings.run_block_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.run_block_power }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="run_block_finesse">Run Blocking Finesse</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="run_block_finesse" v-model="playerEditObject.ratings.run_block_finesse" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.run_block_finesse }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4"></div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Defense">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="tackle">Tackle</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="tackle" v-model="playerEditObject.ratings.tackle" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.tackle }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="shed_block">Shed Block</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="shed_block" v-model="playerEditObject.ratings.shed_block" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.shed_block }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="hit_power">Hit Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="hit_power" v-model="playerEditObject.ratings.hit_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.hit_power }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="pursuit">Pursuit</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="pursuit" v-model="playerEditObject.ratings.pursuit" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.pursuit }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="man_coverage">Man Coverage</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="man_coverage" v-model="playerEditObject.ratings.man_coverage" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.man_coverage }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="zone_coverage">Zone Coverage</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="zone_coverage" v-model="playerEditObject.ratings.zone_coverage" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.zone_coverage }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4"></div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Kicking">
                                        <div class="formgrid grid mt-3 px-2">
                                            <div class="col-4 border-right-1 border-gray-700">
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="kick_accuracy">Kick Accuracy</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="kick_accuracy" v-model="playerEditObject.ratings.kick_accuracy" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.kick_accuracy }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="kick_power">Kick Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="kick_power" v-model="playerEditObject.ratings.kick_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.kick_power }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="punt_accuracy">Punt Accuracy</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="punt_accuracy" v-model="playerEditObject.ratings.punt_accuracy" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.punt_accuracy }" :required="true" />
                                                    </div>
                                                </div>
                                                <div class="field w-full inline-flex h-2rem justify-content-between align-items-center">
                                                    <div class="w-full">
                                                        <label for="punt_power">Punt Power</label>
                                                    </div>
                                                    <div class="w-1/4">
                                                        <InputNumber id="punt_power" v-model="playerEditObject.ratings.punt_power" :class="{ 'p-invalid': submitted && !playerEditObject.ratings.punt_power }" :required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 border-right-1 border-gray-700"></div>
                                            <div class="col-4"></div>
                                        </div>
                                    </TabPanel>
                                </TabView>

                                <template #footer>
                                    <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                                    <Button label="Save" icon="pi pi-check" class="p-button-text" @click="savePlayer" />
                                </template>
                            </Dialog>

                            <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                                <div class="flex align-items-center justify-content-center">
                                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                                    <span v-if="product"
                                        >Are you sure you want to delete <b>{{ product.name }}</b
                                        >?</span
                                    >
                                </div>
                                <template #footer>
                                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
                                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                                </template>
                            </Dialog>

                            <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                                <div class="flex align-items-center justify-content-center">
                                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                                    <span v-if="product">Are you sure you want to delete the selected products?</span>
                                </div>
                                <template #footer>
                                    <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false" />
                                    <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
                                </template>
                            </Dialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>