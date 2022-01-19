function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(!hasDrivingLiscence){
        return "You cannot drive"
    }
    if (isTired || !isSober){
        return "You shouldn't drive"
    }
    return "You can drive"
}

module.exports = CanDrive;
