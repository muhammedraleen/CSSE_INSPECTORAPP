//define two variables to accss globally
let Halt = String;
let User = String;


//setters and getters for halt
exports.setHalt = (halt) => {
    Halt = halt;
}
exports.getHalt = () => {
    return Halt;
}

//setters and getters for user
exports.setUser = (user) => {
    User = user;
}
exports.getUser = () => {
    return User;
}

//sample data for testing
exports.bookingDetatils =  [
    {
    route:"Route1",
    startHalt:"100",
    endHalt:"1001",
    isScanned:true,
    fair:180,
    fname:"MR",
    lname:"RR",
    phone:"0774455221"
    }]
