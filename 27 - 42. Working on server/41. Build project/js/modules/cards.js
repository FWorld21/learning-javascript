function cards () {
    class MenuCard {
        constructor(imageSrc, alt, title, description, price, parentSelector) {
            this.imageSrc = imageSrc;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = 
            `
                <div class="menu__item">
                    <img data-menu-img src=${this.imageSrc} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span class="span-price">${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parentSelector.append(element);
        }
    }

    axios.get('http://localhost:3000/menu').then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
}

export default cards;