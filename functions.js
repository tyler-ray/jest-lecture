module.exports={
    test:()=>{
        return 'test'
    },
    objMaker:()=>{
        return {
            name:'coolest name',
            id:1
        }
    },
    arrMaker:()=>{
        return [1,2,3, 'bob']

    },
    returnNothing:()=>{
        console.log('nothing')
    }
}