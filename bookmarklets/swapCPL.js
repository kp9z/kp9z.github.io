(function(){
    let link = window.location.href
    if (link.includes('couponlawn.com/')) {
        new_link = link.replace('couponlawn.com/','cl.local/')
    } else {
        new_link = link.replace('cl.local/','couponlawn.com/')

    }
    window.open(new_link)
 
})()