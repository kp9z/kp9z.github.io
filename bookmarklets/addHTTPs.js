(function(){
    navigator.clipboard.readText().then( data => {
        newData = 'https://'+data
        console.log(newData)
        navigator.clipboard.writeText(newData)})
    
})()