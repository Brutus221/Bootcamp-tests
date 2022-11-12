
describe('Test my greet function' , function(){
    it("It should return ,'Hello,Brutus 'when called with 'Brutus'" , function(){
        assert.equal("Hello, Brutus",greet("Brutus"),"this should be true");
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Busiswa ' when called with 'Busiswa'" , function(){
        assert.equal("Hello, Busiswa",greet("Busiswa"),"this should be true");
        // assert.deepEqual([2,2],[2,2]);
    });
});
// console.log(greet('Sinenkosi'))