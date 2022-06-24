function Fortune_Level(fortune){
    if (fortune >= 0 && fortune <= 3){
        var low = "You have a low Fortune"
        return low
    }
    if (fortune > 3 && fortune <= 7){
        var average = "you have an average fortune"
        return average
    }
    if (fortune > 8 && fortune <= 10){
        var high = "you have a great fortune"
        return high
    }
}

console.log("results:", Fortune_Level(7))