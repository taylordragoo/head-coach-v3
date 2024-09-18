import { CareerService } from '../service/index';
import DatabaseController from "./DatabaseController";

class CareerController {
    private static instance: CareerController;
    private careerService: CareerService;

    public constructor() {
        this.careerService = CareerService.getInstance();
    }

    public static getInstance(): CareerController {
        if (!CareerController.instance) {
            CareerController.instance = new CareerController();
        }

        return CareerController.instance;
    }

    public async createDefaultData() {
        await this.careerService.handleCreateDefaultWorld();
        return this.careerService.handleGetDefaultData();
    }

    public async loadSelectedCareer(name: string) {
        return this.careerService.handleLoadSelectedCareer(name);
    }

    public asyncsaveCareer: any = async () => {
        await this.careerService.handleSaveCareer();
    }

    public async continueCareer(): Promise<any> {
        this.careerService.handleContinueCareer();
    }

    public setPhaseBasedOnWeek: any = () => {
        this.careerService.handleSetPhaseBasedOnWeek();
    }
}

export default CareerController;