const user = {id:1,name:'nafi',job:'actor'};

const stringified = JSON.stringify(user)



// console.log(user)
// console.log(stringified)

const shop = {
    owner : 'naf',
    address:{
        street: '12 road',
        city:'ctg',
        country:"usa"
    },
    products : ['laptop',"mobile",'monitor',"keyboard"],
    revenue:45000,
    isOpen: true,
    isNew: false
};
console.log(shop)
const shopJson = JSON.stringify(shop)
console.log(shopJson)
const shopObj= JSON.parse(shopJson)
console.log(shopObj)



