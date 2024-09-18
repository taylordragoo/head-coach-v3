class MailService {

    private constructor() {}

    public static getInstance(): MailService {
        return new MailService();
    }
    
    async sendMail() {
        return true;
    }
}

export default MailService;

