function make_great(arryMagicians){
    arryMagicians.map((magician, index)=>{
        magNames[index]="Great "+magician;
    })
}
function show_magicians(arryMagicians){
    arryMagicians.map((magician, index)=>{
        console.log(magician)
    })
}

var magNames=["David Copperfield","Doug Henning","Siegfried and Roy","Lance Burton"];
make_great(magNames)
show_magicians(magNames)
