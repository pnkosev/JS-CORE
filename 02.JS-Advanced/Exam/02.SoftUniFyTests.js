const assert = require('chai').assert;
const SoftUniFy = require('./02.Softunify').SoftUniFy;


describe("class SoftUniFy", () => {
    let songs;
    beforeEach(() => {
        songs = new SoftUniFy();
    });
    it("should have an allSongs empty object when initialized", () => {
        let result = songs.allSongs;
        assert.isEmpty(result);
        assert.isObject(result);
    });

    describe("downloadSong()", () => {
        it("should download and add with correct format", () => {
            songs.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let result = songs.allSongs['Eminem'];
            let compare = { rate: 0, votes: 0, songs: ['Venom - Knock, Knock let the devil in...'] };
            assert.deepEqual(result, compare);
        });

        it("should download and add songs in correct format", () => {
            songs.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            songs.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let result = songs.allSongs['Eminem']['songs'];
            assert.isArray(result);
            assert.deepEqual(result, ['Venom - Knock, Knock let the devil in...', 'Phenomenal - IM PHENOMENAL...']);
        });

        it("should download and return the entire class", () => {
            let result = songs.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            assert.deepEqual(result, songs);
        });
    });

    describe("playSong()", () => {
        it("should return an error msg if no such song", () => {
            let song = 'Venom';
            let result = songs.playSong(song);
            let msg = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`;
            assert.equal(result, msg);
        });

        it("should return all songs", () => {
            songs.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            let song = 'Venom';
            let result = songs.playSong(song);
            assert.equal(result, 'Eminem:\nVenom - Knock, Knock let the devil in...\n');
        });
    });

    describe("get songsList", () => {
        it("should return msg if list is empty", () => {
            let result = songs.songsList;
            assert.equal(result, 'Your song list is empty');
        });

        it("should return all songs if any", () => {
            songs.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            songs.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let result = songs.songsList;
            let compare = `Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...`;
            assert.equal(result, compare);
        });
    });

    describe("rateArtist()", () => {
        it("should throw if no such artist", () => {
            let artist = 'Eminem';
            let result = songs.rateArtist(artist);
            assert.equal(result, `The ${artist} is not on your artist list.`)
        });

        it("should return 0 if no rate given as second argument", () => {
            songs.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let artist = 'Eminem';
            let result = songs.rateArtist(artist);
            assert.equal(result, 0);
        });

        it("should return the average rate if second argument", () => {
            songs.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            let artist = 'Eminem';
            let result = songs.rateArtist(artist, 2);
            assert.equal(result, 2);
        });
    });
});
