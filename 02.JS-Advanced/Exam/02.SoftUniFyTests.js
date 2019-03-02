let expect = require("chai").expect;
let SoftUniFy = require("./02.SoftUniFy").SoftUniFy;

describe("SoftUniFy", function () {
    let songs;
    beforeEach(function () {
        songs = new SoftUniFy();
    });

    it("should have allSongs empty {}", function () {
        expect(songs.allSongs).to.be.an('object');
        expect(songs.allSongs).eql({});
    });
    

    it("should return \"The Eminem is not on your artist list.\"", function () {
        expect(sofunify.rateArtist('Eminem')).equal("The Eminem is not on your artist list.");
    });

    it("should return ...", function () {
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        expect(sofunify.allSongs).equal();
    });
});
let sofunify = new SoftUniFy();

console.log(sofunify.rateArtist('Eminem'));
console.log(sofunify.rateArtist('Eminem', 50));

