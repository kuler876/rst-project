document.addEventListener('DOMContentLoaded', () => {

    let mySwiper = new Swiper('.slider-block', {
        slidesPerView: 1,
    });

    const maxItems = 4
    const sliderNavItems = document.querySelectorAll('.slider-nav__item')
    const sliderNav = document.querySelector('.slider-nav')


    sliderNavItems.forEach((el, index) => {
        el.setAttribute('data-index', index)

        el.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index)

            mySwiper.slideTo(index)
        })
    })

    const showMore = () => {
        let childenLength = sliderNav.children.length
        if (childenLength > maxItems) {
            sliderNav.insertAdjacentHTML('beforeend', `
        <button class="modal-open">Еще ${childenLength - maxItems}</button>
        `)
            document.querySelectorAll(`.slider-nav__item:nth-child(n + ${maxItems + 1})`).forEach(el => { el.style.display = 'none'; })
        }
    }
    showMore()

})