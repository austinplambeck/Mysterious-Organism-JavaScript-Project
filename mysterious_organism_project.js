// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Factory function
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      // method to mutate a single DNA base in the strand
      mutate() {
        let randomIndex = Math.floor(Math.random() * this.dna); // creates a random index [i]
        let randomBase = returnRandBase();                      // variable for a random base
        while (this.dna[randomIndex] === randomBase) {          // while the base is unchanged, produce a random base
          randomBase = returnRandBase();                        // until that base is changed
        }
        this.dna[randomIndex] = randomBase;                     // set it in stone
        return this.dna;                                        // return full dna
      },
      // method to compare the similarities two objects' DNA strands
      compareDNA(otherObj) {
        let commonBases = 0;                                    // initializing variable for common bases 
        for (let i = 0; i < this.dna.length; i++) {             // loop through DNA strand
          if (this.dna[i] === otherObj.dna[i]) {                // if this base is equal to other object's base at [i],
            commonBases++;                                      // add one to commonBases
          }
        }
        let percentCommon = Math.round(((commonBases / 15) * 100)); // computing the percentage of common bases
        // logging the common bases to the console
        console.log(`Specimen #${this.specimenNum} and specimen#${otherObj.specimenNum} have ${percentCommon}% DNA in common.`);
        return percentCommon;                                   // return the common percentage
      },
      // method to see if the organism is likely to survive bases on the amount of its 'C' and 'G' bases
      willLikelySurvive() {
        let total = 0;                                          // initializing variable for the total C and G bases
        for (let i = 0; i < this.dna.length; i++) {             // loop through DNA strand
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {     // if the base is a 'C' or 'G',
            total++;                                            // add one to total
          }
        }
        let likelyPercentage = Math.round(((total / 15) * 100)); // computing the likelihood of survival percentage
        if (likelyPercentage > 60) {                             // if the percentage is greater than 60, return true;
          return true;
        } else {
          return false;                                          // if not, false
        }
      }
    }
  }

const survivingSpecimen = [];                                   // creating an empty array for the surviving specimen
let idCounter = 1;                                              // initialzing variable for the specimen counter

while (survivingSpecimen.length < 30) {                         // while statement -- keeping the array at 30
    let newOrg = pAequorFactory(idCounter, mockUpStrand());     // creating a new object with the factory function
    if (newOrg.willLikelySurvive()) {                           // if this new object will survive, 
        survivingSpecimen.push(newOrg);                         // push it to the survivingSpecimen array
    }
    idCounter++;                                                // adds one to the idCounter
}

// log the resulting array
console.log(survivingSpecimen);
  
  

  
  
  
  
  
  
  
  