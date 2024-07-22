const {test, expect } = require('@playwright/test');


test.beforeAll(async()=>{
    console.log("This Execute Before All..");

})
test.afterAll(async()=>{
    console.log("This Execute After All..");

})

test.beforeEach(async()=>{
    console.log("This Execute Before Each........");
})
test.afterEach(async()=>{
    console.log("This Execute After Each........");
})

test.describe.only('Group 1', async ()=>{
    test('test 1', async ({page})=>{
        console.log("This is Test 1..............");
    
    })
    test('test 2', async ({page})=>{
        console.log("This is Test 2..............");
    
    })

})

test.describe('Group 2', async ()=>{
    test('test 3', async ({page})=>{
        console.log("This is Test 3..............");
    
    })
    test('test 4', async ({page})=>{
        console.log("This is Test 4..............");
    
    })

})
