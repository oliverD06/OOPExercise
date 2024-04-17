const mulan = {
    title: 'Mulan',
    main: 'Fa Mulan',
    quote: function() {
        return 'Dishonor! Dishonor on your whole family!';
    },
    storyline: function() {
        return `The movie ${this.title} is about ${this.main}.`;
    }
};
const tangled = {
    title: 'Tangled',
    main: 'Rapunzel',
    quote: function() {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
    storyline: function() {
        return `The movie ${this.title} is about ${this.main}.`;
    }
};
function DisneyMovie(t, m) {
    this.title = t;
    this.main = m;
}
DisneyMovie.prototype.storyline = function() {
    return `The movie ${this.title} is about ${this.main}.`;
};
const mulan1 = new DisneyMovie('Mulan', 'Fa Mulan');
const mulan13c = new DisneyMovie('Mulan', 'Fa Mulan');
const tangled1 = new DisneyMovie('Tangled', 'Rapunzel');
const tangled13d = new DisneyMovie('Tangled', 'Rapunzel');
class DM {
    constructor(t, m) {
        this.title = t;
        this.main = m;
    }
    storyline() {
        return `The movie ${this.title} is about ${this.main}.`;
    }
    static loveDisneyMovies() {
        return 'I Love Disney Movies!';
    }
}
console.log(DM.loveDisneyMovies()); // I Love Disney Movies!
const mulan2 = new DM('Mulan', 'Fa Mulan');
const mulan24c = new DM('Mulan', 'Fa Mulan');
const tangled2 = new DM('Tangled', 'Rapunzel');
class DMCast extends DM {
    constructor(t, m, c) {
        super(t, m);
        this.cast = c;
    }
}
const mulan3 = new DMCast('Mulan', 'Fa Mulan', {
    mulan: 'Ming-Na Wen',
    mushu: 'Eddie Murphy',
    shang: 'BD Wong',
    theEmperor: 'Pat Morita'
});
const rapunzel3 = new DMCast('Tangled', 'Rapunzel', {
    rapunzel: 'Mandy Moore',
    flynnRider: 'Zachary Levi',
    motherGothel: 'Donna Murphy'
});
const rapunzel35e = new DMCast('Tangled', 'Rapunzel', {
    rapunzel: 'Mandy Moore',
    flynnRider: 'Zachary Levi',
    motherGothel: 'Donna Murphy'
});
console.log(mulan3.storyline());