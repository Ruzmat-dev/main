// const text = document.querySelector('#text')
// const change = document.querySelector('#change')
// const input = document.querySelector('#input')
// const musk = document.querySelector('#musk')

// function onChangeClick() {
//     text.textContent = 'Molades!'
// }

// change.onclick = onChangeClick

// let state = 'hello'

// function onChangeClick() {
//     if ( state == 'hello'){
//     state = 'molades'
//     text.textContent = 'Molades uka'
//     }
//     else if (state == 'molades') {
//         state = 'helo'
//         text.textContent = ' helo my bro'
//     }
// }


// change.onclick = onChangeClick

// change.onclick = () => {
//     if ( state == 'hello'){
//     state = 'molades'
//     text.textContent = 'Molades uka'
//     }
//     else if (state == 'molades') {
//         state = 'helo'
//         text.textContent = ' helo my bro'
//     }
// }

// musk.onclick = () => {
//     let tesla = input.value
//     text.textContent = tesla
// }





const text = document.querySelector('#text')
const ism = document.querySelector('#ism')
const familya = document.querySelector('#familya')
const sharf = document.querySelector('#sharf')
const tasdiqlash = document.querySelector('#tasdiqlash')


tasdiqlash.onclick = () => {
    let ali = ism.value
    let vali = familya.value
    let bali = sharf.value
    text.textContent = ali + ' ' + vali + ' ' + bali

}
clear.onclick = () => {
    let ali = ism.value
    let vali = familya.value
    let bali = sharf.value
    text.textContent =  ' Ism Sharingiz! '

}
