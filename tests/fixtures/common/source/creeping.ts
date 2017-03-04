class Creeping {
    private readonly name: string;

    constructor(yourName: string) {
        this.name = yourName;
    };

    public async say(): Promise<string> {
        await this.sleep(2000);

        return `meh, hello, ${this.name}`;
    };

    public showMeYourSelf() {
        return () => {
            const WOW = ['wow'];
            let yo;
            enum hi {
                smile
            };

            yo = Array.from(WOW[hi.smile]).map(yo => `yo, ${yo}`);
        };
    };

    private sleep(ms: number): Promise<Function> {
        return new Promise(r => setTimeout(r, ms));
    };
};

export default Creeping;
