const maximumPyr = require('../lib/pyramid.js')

const input = [[[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]],[[2],[5,6],[10,9,11],[20,10,5,1]]]
const output = [23,37]
describe('maximumPyr function ',()=>{
    for(let i=0;i<input.length;i++){
        it('works for case '+i,()=>{
            expect(maximumPyr(input[i])).toEqual(output[i])
        })
    }

})