function CreateObject(arr) {
    // Write your code here
    var obj = {};
    for(var i = 0;i < arr.length; i += 2){
        var key = arr[i];
        var value = arr[i+1];
        obj[key] = value;
    }
    return obj
}

module.exports = CreateObject;
