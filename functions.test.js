const fns = require ('./functions') // now we have access to all the functions in our functions file.
//now we get to write a test.

//this is how we open up a single test.
test('Our first test'/*description string*/,()=>{
    let answer = fns.test()// we're expecting 'test'
    expect(answer).toBe('test')

})
describe('Tests for objMaker', ()=>{
    let testObj;
    beforeAll(()=>{
        testObj = fns.objectMaker()
    })
    test('objMaker should return an object',()=>{//basic pattern name of function should do this
        expect(typeof typeObj).toEqual('object')
    })

    test('objMaker should return an object with name:"coolest name"',()=>{//basic pattern name of function should do this
        expect(typeObj.name).toEqual('coolest name')
    })
})





test('arrMaker should return an array containing the value "bob"', ()=>{
    expect(fns.arrMaker()).toContain('bob')
})
// test('test all the thingss',()=>{
//     expect(1).toBeLessThan(3)
//     expect(1).toBeLessThanOrEqual(4)
//     expect(4).toBeGreaterThan(3)
//     expect(4).toBeGreaterThanOrEqual(4)
//     expect(undefined).toBeUndefined();
//     expect(null).toBeNull();
//     expect(0).toBeFalsy();
//     expect(true).toBeTruthy();
//     expect('test').toBeDefined();
//     expect('test').not.toBe(7)
// })
// test('returnNothing should not be defined.',()=>{
//     expect(fns.returnNothing()).toBeUndefined()
// })