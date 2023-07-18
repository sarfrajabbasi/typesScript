// Type Aliases:----

 type UserContacrInfo = {
    name:string,
    email:string
 }


 function printContactInfo(info:UserContacrInfo){
    console.log(info);

    console.log(info.email);
 }

 const printer = {
    name:"sarfraj",
    email:"sar345@gmail.com",
    favoriteColor:"Titanium White",
 };

printContactInfo(printer)

  
// Interface:---

interface UserInfo{
   name:string,
   email:string
}

function printUserInfo(info:UserInfo){
   info.name
}
