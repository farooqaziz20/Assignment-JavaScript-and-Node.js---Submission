function make_great(arryMagicians){
    var newarray=arryMagicians.slice();
    arryMagicians.map((magician, index)=>{
        newarray[index]="Great "+magician;
    })
    return newarray;
}
function show_magicians(arryMagicians){
    arryMagicians.map((magician, index)=>{
        console.log(magician)
    })
}

var magNames=["David Copperfield","Doug Henning","Siegfried and Roy","Lance Burton"];
var gratemagName=make_great(magNames)
show_magicians(magNames)
show_magicians(gratemagName)