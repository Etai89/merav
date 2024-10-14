$(document).ready(() => {
    const whatsapp = $('#whatsApp')
    const callMe = $('#callMe')
    const facebook = $('#facebook')
    const instagram = $('#instagram')
    const gmail = $('#gmail')

    const buttons = [whatsapp, callMe, facebook, instagram, gmail]


    for (let btn = 0; btn<buttons.length; btn++) {
        $(buttons[btn]).on('mouseover', ()=>{
            $(buttons[btn]).css('width', '60px')
            $(buttons[btn]).css('height', '60px')
        })
    }
    for (let btn = 0; btn<buttons.length; btn++) {
        $(buttons[btn]).on('mouseout', ()=>{
            $(buttons[btn]).css('width', '50px')
            $(buttons[btn]).css('height', '50px')
        })
    }
    whatsapp.on('click', () => {
        console.log('whatsappp')

    })



})