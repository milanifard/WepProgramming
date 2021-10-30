function mohale(tag) {
    getText = $(tag).find("option:selected").text()
    var arr = new Array();
    if (getText === "تهران") {
        arr = ["محله 1", "محله 2", "محله 3", "محله 4", "محله 5", "محله 6", "محله 7", "محله 8", "محله 9", "محله 10"];
    }
    if (getText === "اصفهان") {
        arr = ["محله 1", "محله 2", "محله 3", "محله 4", "محله 5"];
    }

    var k = 0
    if (arr.length > k) {
        for (k = 0; k < arr.length; k++) {
            $(".mohale").append($("<option>", {
                text: arr[k],
                value: arr[k]
            }))
        }
    }
}

