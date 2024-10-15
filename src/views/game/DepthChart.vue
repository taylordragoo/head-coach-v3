<template>
    <div class="grid">
        <div class="col-12">
            <div class="grid grid-nogutter align-items-center mb-2">
                <div
                    class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-1 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    :class="{ 'border-primary border-2 text-primary': chart === 'offense' }"
                    @click="setDepthChart('offense')"
                >
                    Offense
                </div>
                <div
                    class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round ml-2 mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    :class="{ 'border-primary border-2 text-primary': chart === 'defense' }"
                    @click="setDepthChart('defense')"
                >
                    Defense
                </div>
                <div
                    class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round ml-1 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    :class="{ 'border-primary border-2 text-primary': chart === 'special' }"
                    @click="setDepthChart('special')"
                >
                    Special Teams
                </div>
            </div>

            <CustomTabPanel contentClass="w-1/2">
                <div v-if="chart === 'defense'" class="surface-ground pt-3">

                    <!-- #region Midfield Defense -->
                    <div class="grid grid-nogutter justify-content-center mb-4">
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">FS</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">LOLB</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">MLB1</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">MLB2</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">ROLB</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">SS</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <!-- #endregion -->

                    <!-- #region Frontline Defense -->
                    <div class="grid grid-nogutter justify-content-center mb-4">
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">CB2</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">LE</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">DT</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">RE</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">CB3</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">CB1</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <!-- #endregion -->
                </div>

                <div v-if="chart === 'offense'" class="surface-ground pt-3">

                    <!-- #region Frontline Offense -->
                    <div class="grid grid-nogutter justify-content-center mb-4">
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">LT</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">LG</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">C</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">RG</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">RT</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 p-3 border-round-xl">
                                <div class="flex justify-content-between mb-3">
                                    <div>
                                        <span class="block text-900 text-xl font-medium mt-2">TE</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:2.5rem;height:2.5rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="flex flex-row justify-content-between">
                                        <div class="text-900 font-medium text-sm">F. LastName</div>
                                        <div class="text-900 font-medium text-sm">72</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <!-- #endregion -->

                    <!-- #region Backline Offense -->
                    <div class="grid grid-nogutter justify-content-center">
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">WR2</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.wr2"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.wr2" :key="item.id" draggable class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.wr2.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add Player" class="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">FB</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.rb"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.rb" :key="item.id" draggable class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.rb.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add FB" class="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">QB</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.qb"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.qb" :key="item.id" draggable @contextmenu="onQuarterbackRightClick($event, item)" class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.qb.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add QB" class="w-full"/>
                                    </div>
                                </div>
                                <ContextMenu ref="menu" :model="menuItems" />
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">RB</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.rb"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.rb" :key="item.id" draggable class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.rb.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add RB" class="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">WR3</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.wr3"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.wr3" :key="item.id" draggable class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.wr3.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add WR3" class="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="surface-card shadow-2 px-3 py-2 border-round-xl">
                                <div class="flex w-full inline-flex justify-content-between border-bottom-1 surface-border">
                                    <div class="pt-1 pb-2 px-1">
                                        <span class="block text-900 text-xl font-medium mt-1">WR1</span>
                                    </div>
                                    <div class="flex align-items-center justify-content-center border-round" style="width:3rem;height:3rem">
                                        <i class="pi pi-unlock text-500 text-xl"></i>
                                    </div>
                                </div>
                                <VueDraggable
                                    v-model="depthChartObject.wr"
                                    animation="150"
                                    ghostClass="ghost"
                                    chosenClass="chosen"
                                    class="container"
                                    @end="onEnd"
                                >
                                    <div v-for="(item, index) in depthChartObject.wr" :key="item.id" draggable class="p-2 justify-content-between border-bottom-1 surface-border">
                                        <div class="flex align-items-center justify-content-between">
                                            <span class="text-900 font-medium text-md">{{ index + 1 }}. {{ item.player.first_name }} {{ item.player.last_name }}</span>
                                            <span class="text-900 text-md ml-3">{{ item.player.ratings.overall_rating}}</span>
                                        </div>
                                        <span class="text-600 text-sm">{{ item.player.ratings.position_archetype_name}}</span>
                                    </div>
                                </VueDraggable>
                                <div v-show="depthChartObject.wr.length < 9" class="p-2 justify-content-between surface-border">
                                    <div class="flex align-items-center justify-content-between">
                                        <Button icon="pi pi-plus" label="Add WR1" class="w-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- #endregion -->

                </div>
            </CustomTabPanel>

        </div>
    </div>
</template>

<script>
import OrganizationChart from 'primevue/organizationchart';
import CustomTabView from '@/components/CustomTabView.vue';
import CustomTabPanel from '@/components/CustomTabPanel.vue';
import ContextMenu from 'primevue/contextmenu';
import DynamicDialog from 'primevue/dynamicdialog';
import { VueDraggable, useDraggable } from 'vue-draggable-plus';
import World from "@/models/World";
import League from "@/models/League";
import User from "@/models/User";
import Team from "@/models/Team";
import Player from "@/models/Player";
import DepthChart from '@/models/DepthChart';
import { DEPTH_CHART_POSITIONS, POSITIONS, OFF_POSITIONS, DEF_POSITIONS, POSITION_MAPPING } from '@/data/constants';
import {
    TeamController
}  from '@/controllers/index';

export default {
    components: {
        OrganizationChart,
        CustomTabView,
        CustomTabPanel,
        VueDraggable
    },
    data() {
        return {
            POSITIONS,
            OFF_POSITIONS,
            DEF_POSITIONS,
            DEPTH_CHART_POSITIONS,
            selectedTeam: 0,
            filtered_positions: [],
            quarterbacks: [],
            runningbacks: [],
            depthChartObject: {},
            menuItems: [
                { label: 'Copy', icon: 'pi pi-copy' },
                { label: 'Remove', icon: 'pi pi-trash' }
            ],
            idFrozen: false,
            chart: 'offense',
            nestedMenuitems: [
                {
                    label: 'Offense',
                    icon: 'pi pi-fw pi-users',
                },
                {
                    label: 'Defense',
                    icon: 'pi pi-fw pi-calendar-plus',
                },
                {
                    label: 'Special Teams',
                    icon: 'pi pi-fw pi-calendar-plus',
                }
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
            },
            teamController: null,
        };
    },
    created() {
        this.teamController = new TeamController()
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
        setDepthChart(chart) {
            this.chart = chart;
        },
        async onEnd(event) {
            let position = event.data.position.toLowerCase();
            this.depthChartObject[position].forEach((player, index) => {
                player.rank = index + 1;
            });
            if(event.newIndex !== event.oldIndex) {
                await this.saveDepthChart(position);
            }
        },
        async saveDepthChart(position) {
            let positionCopy = JSON.parse(JSON.stringify(this.depthChartObject[position]));
            for (const pos of positionCopy) {
                pos.player = null;
            }
            await this.teamController.updateTeamDepthChart(positionCopy);
        },
        updatePositions() {
            this.depthChartObject = {};
            DEPTH_CHART_POSITIONS.forEach(depthChartPosition => {
                this.depthChartObject[depthChartPosition.toLowerCase()] = this.teamDepthChart
                    .filter(obj => obj.position === depthChartPosition)
                    .sort((a, b) => a.rank - b.rank);
            });
        },
        onQuarterbackRightClick(event, item) {
            console.log(item);
            this.$refs.menu.show(event);
        }
    },
    watch: {
        filteredQuarterbacks: {
            immediate: true,
            handler() {
                this.quarterbacks = this.teamDepthChart
                    .filter(obj => obj.player.ratings.position === 'QB')
                    .sort((a, b) => a.rank - b.rank);
            },
        },
        filteredRunningbacks: {
            immediate: true,
            handler() {
                this.runningbacks = this.teamDepthChart
                    .filter(obj => obj.player.ratings.position === 'RB')
                    .sort((a, b) => a.rank - b.rank);
            },
        },
        teamDepthChart: {
            immediate: true,
            handler() {
                this.updatePositions();
            },
        },
    },
    computed: {
        user: {
            /* By default get() is used */
            get() {
                return User.query().with('team.depthChart.player.*').first()
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
                return Team.query().with('depthChart.player.*').orderBy('name').all()
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
        teamDepthChart() {
            if (this.user.team) {
                if (this.filtered_positions.length === 0) {
                    return this.user.team.depthChart;
                } 
            }
            return [];
        }
    }
}

</script>

<style scoped>
.ghost {
    opacity: .75;
    background: #9d9d9d;
    border: 0px 0px 2px 0px solid #73AD21;
    border-radius: 1rem;
    /* padding: 1rem; */
}
.chosen {
    opacity: .75;
    background: #9d9d9d;
    border: 0px 0px 2px 0px solid #73AD21;
    border-radius: 1rem;
    /* padding: 1rem; */
}
</style>