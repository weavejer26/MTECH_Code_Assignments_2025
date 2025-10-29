//In Class Assignment Arrow Functions 10/27/2025
{
    const addArrow = (a, b) => {
        return a + b;
    }
    console.log(addArrow(3, 4));

    const addSub = (a, b, c) => {
        return (a + b) - c;
    }
    console.log(addSub(6, 4, 5));

    const divNum = (a, b) => {
        return (a / b);
    }
    console.log(divNum(60, 10));

    const twoParam = (a, b) => {
        return a + a + b + b;
    }
    console.log(twoParam(1, 3));

    const threeParam = (a, b, c) => {
        return a - b - c;
    }
    console.log(threeParam(5, 7, 12))

    const multAdd = (a, b) => {
        return (a * b) + b;
    }
    console.log(multAdd(2, 10));
}