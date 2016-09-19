export default class Creeping {
	private readonly name: string;

	constructor(yourName: string) {
		this.name = yourName;
	};

	public async say(): Promise<string> {
		await this.sleep(2000);

		return `meh, hello, ${this.name}`;
	};

	private sleep(ms: number): Promise<Function> {
		return new Promise(r => setTimeout(r, ms));
	};
};

