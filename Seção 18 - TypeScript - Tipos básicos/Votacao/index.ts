type VotationOption = {
    numberOfVotes : number;
    option: string;
}

class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details:string) {}

    addVotationOption(votationOption : VotationOption) : void {
        this._votationOptions.push(votationOption);
    }

    vote(votateIndex: number) : void {
        if(!this._votationOptions[votateIndex]) return;
        this._votationOptions[votateIndex].numberOfVotes += 1;
    }

    get votationOptions(): VotationOption[] {
        return this._votationOptions;
    }
}

class VotationApp {
    private votations: Votation[] = [];
    
    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotations() : void {
        for (const votation of this.votations){
            console.log(votation.details);
            for (const votationOptions of votation.votationOptions){
                console.log(votationOptions.option, votationOptions.numberOfVotes);
            }
            console.log('### \n');
        }
    }
}

const votation = new Votation('Qual sua linguagem preferida?');
votation.addVotationOption({option: 'Python', numberOfVotes: 0});
votation.addVotationOption({option: 'Javascript', numberOfVotes: 0});
votation.addVotationOption({option: 'Typescript', numberOfVotes: 0});
votation.vote(0);
votation.vote(1);
votation.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation)
votationApp.showVotations();