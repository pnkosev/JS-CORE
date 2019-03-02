let expect = require("chai").expect;
const HolidayPackage = require("./02.HolidayPackage").HolidayPackage;

describe("HolidayPackage", function () {
    let newPackage;
    beforeEach(function () {
        newPackage = new HolidayPackage("Sweden", "Summer");
    });

    // describe("two params initialisation", function () {
    //     it("should have 2 params", function () {
    //         expect(newPackage.destination).equal("Sweden");
    //         expect(newPackage.season).equal("Winter");
    //     });
    //     it("should have strings as params", function () {
    //         expect(newPackage.destination).to.be.a('string');
    //         expect(newPackage.season).to.be.a('string');
    //     });
    //     it("should not be an empty string", function () {
    //         expect(newPackage.destination.length).to.not.equal(0);
    //         expect(newPackage.season.length).to.not.equal(0);
    //     });
    // });
    describe("insuranceIncluded property", function () {
        // it("should be a boolean", function () {
        //     expect(newPackage.insuranceIncluded).to.be.a('boolean');
        // });
        it("should return the current value when called get()", function () {
            expect(newPackage.insuranceIncluded).to.equal(false);
        });
        // it("should return true when set to true", function () {
        //     newPackage.insuranceIncluded = true;
        //     expect(newPackage.insuranceIncluded).to.be.true;
        // });
    });
    describe("addVacationer()", function () {
        // it("should return 1 for 1 vacationer added", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     expect(newPackage.vacationers.length).equal(1);
        // });
        // it("should consist of first and last name space separated", function () {
        //     let name = "Petar Kosev";
        //     newPackage.addVacationer(name);
        //     expect(name.split(' ').length).equal(2);
        // });
        // it("should hold string values", function () {
        //     let name = "Petar Kosev";
        //     newPackage.addVacationer(name);
        //     expect(name).to.be.a('string');
        // });
        it("should return \"Vacationer name must be a non-empty string\" for a non-string input", function () {
            expect(function () {
                newPackage.addVacationer(123)
            }).to.throw();
        });
        it("should return \"Vacationer name must be a non-empty string\" for an empty input", function () {
            expect(function () {
                newPackage.addVacationer(" ")
            }).to.throw();
        });
        it("should throw \"Name must consist of first name and last name\" for invalid input", function () {
            expect(function () {
                newPackage.addVacationer("Kosev")
            }).to.throw();
        })
        it("should return the vacationers added", function () {
            newPackage.addVacationer("Petar Kosev");
            newPackage.addVacationer("Mariya Koseva");
            expect(newPackage.showVacationers()).equal("Vacationers:\nPetar Kosev\nMariya Koseva");
        });
    });
    describe("showVacationers()", function () {
        // it("should return the vacationers added", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     newPackage.addVacationer("Mariya Koseva");
        //     expect(newPackage.showVacationers()).equal("Vacationers:\nPetar Kosev\nMariya Koseva");
        // });
        // it("should return value greater than 0 if vacationers added", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     expect(newPackage.showVacationers().length).not.equal(0);
        // });
        it("should throw \"No vacationers are added yet\" if 0 vacationers added", function () {
            expect(newPackage.showVacationers()).to.equal("No vacationers are added yet");
        });
    });
    describe("generateHolidayPackage()", function () {
        it("should return \"There must be at least 1 vacationer added\" for 0 vacationers", function () {
            expect(function () {newPackage.generateHolidayPackage()}).to.throw();
        });
        it("should return 1000 for 2 vacationers in Winter with no insurance", function () {
            newPackage.addVacationer("Petar Kosev");
            newPackage.addVacationer("Mariya Koseva");
            expect(newPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
                "Destination: " + "Sweden" + "\n" +
                "Vacationers:" + "\n" +
                "Petar Kosev" + "\n" +
                "Mariya Koseva" + "\n" +
                "Price: " + 1000);
        });
        // it("should return 1100 for 2 vacationers in Winter with insurance", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     newPackage.addVacationer("Mariya Koseva");
        //     newPackage.insuranceIncluded = true;
        //     expect(newPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
        //         "Destination: " + "Sweden" + "\n" +
        //         "Vacationers:" + "\n" +
        //         "Petar Kosev" + "\n" +
        //         "Mariya Koseva" + "\n" +
        //         "Price: " + 1100);
        // });
        // it("should return 800 for 2 vacationers in Autumn without insurance", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     newPackage.addVacationer("Mariya Koseva");
        //     newPackage.season = "Autumn";
        //     expect(newPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
        //         "Destination: " + "Sweden" + "\n" +
        //         "Vacationers:" + "\n" +
        //         "Petar Kosev" + "\n" +
        //         "Mariya Koseva" + "\n" +
        //         "Price: " + 800);
        // });
        // it("should return 900 for 2 vacationers in Autumn with insurance", function () {
        //     newPackage.addVacationer("Petar Kosev");
        //     newPackage.addVacationer("Mariya Koseva");
        //     newPackage.season = "Autumn";
        //     newPackage.insuranceIncluded = true;
        //     expect(newPackage.generateHolidayPackage()).equal("Holiday Package Generated\n" +
        //         "Destination: " + "Sweden" + "\n" +
        //         "Vacationers:" + "\n" +
        //         "Petar Kosev" + "\n" +
        //         "Mariya Koseva" + "\n" +
        //         "Price: " + 900);
        // });
    });
});