(function(){
    let link = window.location.href
    const pattern = /(store-coupons).+\/(\d+)/
    let coupon = link.match(pattern)[2]
    // console.log(coupon)
    // alert(coupon)
    window.open("https://couponlawn.com/wp-admin/post.php?post="+coupon+"&action=edit")
 
})()

