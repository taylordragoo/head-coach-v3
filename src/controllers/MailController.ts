import { MailService } from '../service/index';

class MailController {
    private static instance: MailController;
    private mailService: MailService;

    public constructor() {
        this.mailService = MailService.getInstance();
    }

    public static getInstance(): MailController {
        if (!MailController.instance) {
            MailController.instance = new MailController();
        }

        return MailController.instance;
    }
}

export default MailController;