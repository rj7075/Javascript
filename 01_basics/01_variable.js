const account=122; //constant can not change once it decleared; block scope
var mail="rj7075yadav@gmail.com";//var having a globle scope or functional scope can be redecleare.
let accountpass="1234";//have a block scope can not redclare in same scope
accountcity="Delhi";

/*  var is prefer not to use due to block scope and functional scope*/
console.log(mail);
console.log(account);
console.table([account,mail,accountpass,accountcity,]);
