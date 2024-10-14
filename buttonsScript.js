$(document).ready(() => {
    const whatsapp = $('#whatsApp')
    const callMe = $('#callMe')
    const facebook = $('#facebook')
    const instagram = $('#instagram')
    const gmail = $('#gmail')

    const buttons = [whatsapp, callMe, facebook, instagram, gmail]


    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseover', () => {
            $(buttons[btn]).css('width', '60px')
            $(buttons[btn]).css('height', '60px')
        })
    }
    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseout', () => {
            $(buttons[btn]).css('width', '50px')
            $(buttons[btn]).css('height', '50px')
        })
    }
    whatsapp.on('click', () => {
        console.log('whatsappp')

    })

    // triggering buttons:

    // links:
    const faceB = 'https://www.facebook.com/meravsixso'
    const insta = 'https://www.instagram.com/meravsixou'
    const mail = 'meravsixou22@gmail.com'

    function call() {
        // Replace with your phone number
        window.location.href = "tel:+972548188376";
    }

    callMe.on('click', () => {
        call()
    })
    // Function to open WhatsApp chat
    function whatsAppMe() {
        // Replace with your phone number in the WhatsApp link
        const phoneNumber = "972548188376";
        const message = encodeURIComponent("היי אני מעוניינת לשמוע פרטים,");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }


    whatsapp.on('click', () => {
        whatsAppMe()
    })

    facebook.on('click', () => {
        window.open(faceB, '_blank')
    })

    instagram.on('click', () => {
        window.open(insta, '_blank')
    })
    
})
