const { State } = require("react-native-gesture-handler");

let Halt = String;

exports.setHalt = (halt) => {
    Halt = halt;
}

exports.getHalt = () => {
    return Halt;
}

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