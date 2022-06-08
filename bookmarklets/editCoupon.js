(function(){
    let link = window.location.href
    const pattern = /(\d+)/g
    let coupon = link.match(pattern)
    alert(coupon)
    window.open("https://couponlawn.com/wp-admin/post.php?post="+coupon+"&action=edit")
 
})()

