const role =require("../models/roleModel")

exports.databaseSeeder=async () => {
    const data = await role.find().exec();
    if (data.length == 0) {
        console.log("myseeder is running....")
        const seed = new role({"roleName":"User",});
        await seed.save()
      
        return;
    }    
    
}
