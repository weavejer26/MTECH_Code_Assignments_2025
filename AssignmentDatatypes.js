//In Class Assignment Datatypes JW 10/27/2025

{
    const firstName = "Bill"; //Person First name, String
    console.log(firstName); //Log firstName

    const Age = 65; //Age, Number
    console.log(Age); //Log Age

    const isStudent = true; //isStudent, Boolean
    console.log(isStudent); //Log isStudent

    const toyotaMiles = 500000n; //toyotaMiles, BigInt
    console.log(toyotaMiles) //Log toyotaMiles

    let evGas; //evGas, Undefined
    console.log(evGas); //Log evGas

    const fullEV = null; //fullEV, null
    console.log(fullEV); //Log fullEV

    const makeModel = { //makeModel, Object
        make: "Ford",
        model: "Ecosport"
    };
    console.log(makeModel); //Log makeModel

    let myHouse = Symbol("home"); //myHouse, Symbol
    let yourHouse = Symbol("home");
    console.log(myHouse === yourHouse); //Log myHouse
}