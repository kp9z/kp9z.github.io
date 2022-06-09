(function(){
    navigator.clipboard.readText().then( data =>{
        navigator.clipboard.writeText('https://'+data)
    } )
    
})()