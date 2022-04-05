var Votation = /** @class */ (function () {
    function Votation(details) {
        this.details = details;
        this._votationOptions = [];
    }
    Votation.prototype.addVotationOption = function (votationOption) {
        this._votationOptions.push(votationOption);
    };
    Votation.prototype.vote = function (votateIndex) {
        if (!this._votationOptions[votateIndex])
            return;
        this._votationOptions[votateIndex].numberOfVotes += 1;
    };
    Object.defineProperty(Votation.prototype, "votationOptions", {
        get: function () {
            return this._votationOptions;
        },
        enumerable: false,
        configurable: true
    });
    return Votation;
}());
var VotationApp = /** @class */ (function () {
    function VotationApp() {
        this.votations = [];
    }
    VotationApp.prototype.addVotation = function (votation) {
        this.votations.push(votation);
    };
    VotationApp.prototype.showVotations = function () {
        for (var _i = 0, _a = this.votations; _i < _a.length; _i++) {
            var votation_1 = _a[_i];
            console.log(votation_1.details);
            for (var _b = 0, _c = votation_1.votationOptions; _b < _c.length; _b++) {
                var votationOptions = _c[_b];
                console.log(votationOptions.option, votationOptions.option);
            }
            console.log('### \n');
        }
    };
    return VotationApp;
}());
var votation = new Votation('Qual sua linguagem preferida?');
votation.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });
votation.vote(1);
votation.vote(2);
votation.vote(3);
var votationApp = new VotationApp();
votationApp.addVotation(votation);
votationApp.showVotations();
