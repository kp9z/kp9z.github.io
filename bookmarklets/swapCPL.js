(function(){
    let link = window.location.href
    if (link.includes('couponlawn.com/')) {
        const new_link = link.replace('couponlawn.com/','cl.local/')
        window.open(new_link)
    } else {
        const new_link = link.replace('cl.local/','couponlawn.com/')
        window.open(new_link)

    }
    
 
})()