{
    function countdown(fromNumber) {
        console.log(fromNumber);
        if (fromNumber -1 > -0) {
            countdown(fromNumber-1)
        }
    }
    countdown(5);
}