const fs = require ('fs');
fs.readFile('topview/maxread3.json','utf-8',(err,maxRead) =>{
    if(err){
        throw err;
    }
    maxRead=JSON.parse(maxRead);
    fs.readFile('./yuanAge/years.json','utf-8',(err,years) =>{
    if(err){
        throw err;
    }
        let obj={}
        years=JSON.parse(years);
        years.forEach(item =>{
            obj[item.user] = {age:item.age,follower:item.follower};
        });
        let result = maxRead.map(item =>{ 
            if(obj[item.user]){
                item.age = obj[item.user].age;
                item.follower = obj[item.user].follower;
            }    
            return item;
        })
        fs.writeFile('merge/merge.json' ,JSON.stringify(result),err => {
            if(err){
                console.log(err);
            }
            console.log('done');
        })
    })
})
