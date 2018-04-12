function reverse(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(reverse("meow"));


function insert(string1, index, string2) {
    var newString = "";
    for (var i = 0; i < string1.length; i++) {
        if (i === index) {
            newString = newString + string2;
        }
        newString = newString + string1[i];
    }
    return newString;
}
console.log(insert("something", 2, "meow"));