let index = 2;
setInterval(function () {
    document.getElementById('radio' + index).checked = true;
    index++;
    if (index > 3) {
        index = 1
    }
}, 2500);

const letsStart = document.querySelector('.letsStart');
const wrapper1 = document.getElementById('wrapper1');
const wrapper2 = document.getElementById('wrapper2');
letsStart.addEventListener('click', () => {
    wrapper1.style.display = 'none';
    wrapper2.style.display = 'flex';
});


const hide = document.querySelector('.hide');
const show = document.querySelector('.show');
const hideShow = document.querySelector('.hideShow');
const password = document.getElementById('password');
hideShow.addEventListener('click', () => {
    console.log('adga');
    
    if (password.type === 'password') {
        password.type = 'text';
        hide.style.display = 'none'
        show.style.display = 'block'

    } else if (password.type === 'text') {
        password.type = 'password';
        show.style.display = 'none'
        hide.style.display = 'block'
    }

})