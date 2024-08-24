const modal = document.getElementsByClassName('modal')[0]
const btnform = document.getElementById('modal_button')
const btnModal = document.getElementById('modal')
modal.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) {
        modal.style.display = 'none';
    }
})
const open = document.getElementsByClassName('open')[0]
const aside = document.getElementsByTagName('aside')[0]
const close = document.getElementsByClassName('close')[0]
function modalNew(element, container, data) {
    element.addEventListener('click', () => container.style.display = data)
}
modalNew(open, aside, 'block')
modalNew(close, aside, 'none')
modalNew(btnModal, modal, 'block')
modalNew(btnform, modal, 'none')
let ul = document.getElementById('nav')
state.aside.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item.title
    li.classList.add('menu')
    ul.appendChild(li)
})
const menu = Array.from(document.getElementsByClassName('menu'))
const scroll = Array.from(document.getElementsByClassName('scroll'))
console.log(scroll)
menu.forEach((item, index) =>
    scroll[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    }))
const section3 = document.getElementById('section3');
state.section3.forEach(item => {
    section3.insertAdjacentHTML('beforeend', `
        <div class="block">
                    <img src="./img/content/section4/1.svg"
                    ${item.url}alt="">
                    <div class="column">
                    <h5>${item.title}</h5>
                    <p>${item.text}</p>
                </div>
    </div>`)
})

const footer = document.getElementById('footer');
state.footer.bud.forEach(item => {
    footer.insertAdjacentHTML('beforeend', ` 
        <li><a href="${item.link}"> ${item.text}</a></li>`)
})

const header = document.getElementById('header');
state.header.forEach(item => {
    header.insertAdjacentHTML('beforeend', `
        <div class="block">
                    <button class="header_btn"><img src="./img/icon/viber.svg" alt="">Viber</button>
                    <button class="header_btn"><img src="./img/icon/telegram.svg" alt="">Telegram</button>
                </div>`)
})
const aside = document.getElementById('aside');
state.aside.forEach(item => {
    aside.insertAdjacentHTML('beforeend', `
        <div class="block">
            <div class="column">
            <h5>${item.title}</h5>
            <h3>${item.text}</h3>
        </div>`)
})
const section1 = document.getElementById('section1');
state.section1.forEach(item => {
    section1.insertAdjacentHTML('beforeend', `
        <div class="block">
         <img src="./img/content/section1/1.svg"
                    ${item.url}alt="">
                    <div class="column">
                    <h5>${item.title}</h5>
                    <p>${item.text}</p>
                </div>
    </div>`)
})
const section4 = document.getElementById('section4');
state.section4.forEach(item => {
    section4.insertAdjacentHTML('beforeend', `
        <div class="block">
        <img src="./img/content/section4/1.svg" alt="">
                    <div class="column">
                        <h5${item.title}</h5>
                        <p>${item.text}</p>
                    </div>`)
})
const section6 = document.getElementById('section6');
state.section6.forEach(item => {
    section6.insertAdjacentHTML('beforeend', `
        <div class="block">
        <img src="./img/content/person.png" alt="">
                    <div class="colum">
                        <span>${item.title}</span>
                        <span>${item.title}</span>
                        <span>${item.title}</span>
                    </div>`)
})
const contact = document.getElementById('contact');
state.contact.forEach(item => {
    contact.insertAdjacentHTML('beforeend', `
        <div class="block">
        <a href="${item.link}" ${item.text}></a>
                        <a href="${item.link}"${item.text}></a>
                        <a href="${item.link}"${item.text}></a>
                    </div>`)
})
const slider = document.getElementById('slider');
state.slider.forEach(item => {
    slider.insertAdjacentHTML('beforeend', `
        <div class="block">
        <img src="./img/content/slider-section/sl1.png" alt="">
                        <img src="./img/content/slider-section/sl2.png" alt="">
                        <img src="./img/content/slider-section/sl3.png" alt="">
                        <img src="./img/content/slider-section/sl4.png" alt="">
                    </div>`)
})
const ul = document.getElementById('ul');
state.ul.forEach(item => {
    ul.insertAdjacentHTML('beforeend', `
       <ul>
        <li>${item.text}</li>
                    <li>${item.text}</li>
                    <li>${item.text}</li>
                    <li>${item.text}</li>
                    <li>${item.text}</li>
                    <li>${item.text}</li>
                </ul>`)
})
const bud = document.getElementById('bud');
state.bud.forEach(item => {
    bud.insertAdjacentHTML('beforeend', `
        <div>
        <a href="${item.link}"${item.text}></a>
        <a href="${item.link}"${item.text}></a>
        <a href="${item.link}"${item.text}></a>
        <a href="${item.link}"${item.text}></a>
        <a href="${item.link}"${item.text}></a>
        <a href="${item.link}"${item.text}></a>
        </div>`)
})

const sliderObject = {
    left: document.getElementsByClassName('left')[0],
    right: document.getElementsByClassName('right')[0],
    container: document.getElementsByClassName('container')[0],
    create() {
        this.container.innerHTML = '';
        state.slider.forEach(item =>
            this.container.insertAdjacentHTML('beforeend', `
                <img src="./img/content/slider-section/${item.url}"
                alt="" class="slids">
                `)
        )
    },
    render() {
        this.create();
        this.left.addEventListener('click', () => {
            let e = state.slider.shift()
            state.slider.push(e)
            this.create()
        })
        this.right.addEventListener('click', () => {
            let e = state.slider.pop()
            state.slider.unshift(e)
            this.create()
        })
    }
}
sliderObject.render()