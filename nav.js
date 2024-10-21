$(document).ready(() => {

    $('.services').hide()
    $('.navServices').toggle()

    $('.blog').hide()
    $('.navBlog').toggle()
    

    $('.mainServices').click((event) => {
        $('.blog').addClass('active')
        $('.services').removeClass('active')
        $('.navServices').toggle()
        $('.services').toggle()
    })

    $('.mainBlog').click((event) => {
        $('.services').addClass('active')
        $('.blog').removeClass('active')
        $('.navBlog').toggle()
        $('.blog').toggle()
    })
    $('.active').hide()

})