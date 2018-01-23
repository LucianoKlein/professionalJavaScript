function f1(){

    function f2(){
        console.log(this)
    }
    f2.call()
}
var obj = {name: 'obj'}
f1.call( obj )