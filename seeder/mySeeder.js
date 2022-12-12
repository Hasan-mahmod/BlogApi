const role =require("../models/roleModel")
const userRole=require("../models/userroleModel")
const user=require("../models/userModel")

exports.databaseSeeder=async () => {
    const roles = await role.find().exec();
    const users = await user.find().exec();
    const userroles = await userRole.find().exec();
   var {roleId,userid}='';
    if (roles.length == 0) {
       // console.log("myseeder is running....")
        var seed = new role({"roleName":"Admin",});
        await seed.save()
        roleId=seed._id
    }    
    if (users.length == 0) {
        // console.log("myseeder is running....")
         var seed = new user({
            "fname": "Hasan",
            "lname": "Mahmod",
             "userName": "admin",
            "email": "admin@mail.com",
            "password": "125525"});
            await seed.save()  
            userid= seed._id;
     }   
     if (userroles.length == 0) {
        // console.log("myseeder is running....")
         var seed = new userRole({user:userid,role:roleId});
         await seed.save()   
         console.log("seed done")  
     } 
    return;
}
