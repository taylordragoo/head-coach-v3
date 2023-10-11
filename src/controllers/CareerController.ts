import { CareerService } from '../service/index';
import DatabaseController from "@/controllers/DatabaseController";

class CareerController {
    private static instance: CareerController;
    private careerService: CareerService;

    private constructor() {
        this.careerService = CareerService.getInstance();
    }

    public static getInstance(): CareerController {
        if (!CareerController.instance) {
            CareerController.instance = new CareerController();
        }

        return CareerController.instance;
    }

    public createDefaultData: any = () => {
        this.careerService.handleCreateDefaultWorld();
        return this.careerService.handleGetDefaultData();
    }

    public loadSelectedCareer: any = (name: string) => {
        return this.careerService.handleLoadSelectedCareer(name);
    }

    public saveCareer: any = () => {
        this.careerService.handleSaveCareer();
    }

    public continueCareer(): any {
        this.careerService.handleContinueCareer();
    }

    public setPhaseBasedOnWeek: any = () => {
        this.careerService.handleSetPhaseBasedOnWeek();
    }
}

export default CareerController;
