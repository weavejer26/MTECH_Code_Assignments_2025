//In Class Assignment Arrays JW 10/27/2025

//Fruits
{
    const Fruits = ["apple", "strawberry", "lemon", "kiwi"]; //Original Array

    console.log(Fruits[2]); //Log 3rd Fruit Listed

    Fruits.push("pineapple"); //Added Fifth Fruit

    console.log(Fruits); //Log Array Again

    console.log(Fruits[0]); //Change Second Fruit to Tomato 

    Fruits[0] = "tomato";

    Fruits.unshift("guava"); //Add Guava to Front of List


}

//Mixed
{
    const Mixed = ["cheese", 14, "shoe", true]; //Mixed Datatype Array

    console.log(Mixed[2]); //Change String to Number

    Mixed[2] = 15;

    Mixed.push("pencil"); //Add String to Array
}