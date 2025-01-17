//!У JavaScript події містять корисні властивості, що дозволяють отримати інформацію про елемент, який викликав подію. 
//!Дві з цих властивостей - target та currentTarget - мають важливе значення для розуміння того, як працює обробка подій. 

let btnHeader = document.getElementsByClassName('shadow_button')[0]
btnHeader.addEventListener('click', (e) => {
    //alert('Вашу заявку відправлено')
    console.log(e.target)
    console.log(e.currentTarget)
})
window.addEventListener('click', (e) => {
    //alert('Вашу заявку відправлено')
    console.log(e.target)
    console.log(e.currentTarget)
})
//?event.target вказує на елемент, який фактично викликав подію. Це може бути дочірній елемент того елемента, на який ви повісили обробник події.

//parent.addEventListener('click', (e)=> {
//    console.log( event.target); // Елемент, який фактично викликав подію
//});

//*У цьому прикладі, якщо ви клікаєте на кнопку, event.target буде посилатися на саму кнопку 
//(<button id="child">Нажми на мене</button>), навіть якщо обробник події прив'язаний до <div id="parent">.



//?event.currentTarget вказує на елемент, до якого прикріплений обробник події. Це завжди буде елемент, 
//?до якого прив'язаний обробник, незалежно від того, на який дочірній елемент було фактично клацнуто.



//*Ці властивості важливі для роботи з подіями в DOM, особливо коли обробники подій прив'язані до батьківських елементів,
//*а події генеруються дочірніми елементами. Вони дозволяють точніше контролювати та реагувати на події в залежності від того, 
//*який елемент викликав подію і до якого елемента прив'язаний обробник події.



//*Найбільш поширений спосіб відстеження події кліку – це використання методу addEventListener.
//!Ти можеш прикріпити обробник подій до будь-якого елемента на сторінці.
//!Координати події

//?Коли відбувається подія кліку, об'єкт події (event) містить кілька корисних властивостей, які можна використовувати для отримання координат:

//?event.clientX і event.clientY: Повертають координати X та Y події відносно області перегляду (вікна браузера).
//?event.pageX і event.pageY: Повертають координати X та Y події відносно всієї сторінки, враховуючи прокрутку.
//?event.screenX і event.screenY: Повертають координати X та Y події відносно екрану користувача.



//! Завдання
//?Розробіть модальне вікно

let mainBtn = document.querySelector('.main-btn');
let mainForm = document.querySelector('.main-form');
let formBtn = document.querySelector('.form-btn');

mainBtn.addEventListener('click', () => {
    mainForm.classList.add('active');
});
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mainForm.classList.remove('active');
});