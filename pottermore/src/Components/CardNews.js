class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymus");

        const link = document.createElement('a');
        link.textContent = this.getAttribute('title');
        link.href = this.getAttribute('urlLink');

        const newsTitle = document.createElement('p');
        newsTitle.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsTitle);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');

        const newsImg = document.createElement('img');
        newsImg.src = this.getAttribute('urlImg');

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
                        .card {
                width: 80%;
                box-shadow: 1px 2px 13px -5px rgba(0,0,0,0.76);
                -webkit-box-shadow: 1px 2px 13px -5px rgba(0,0,0,0.76);
                -moz-box-shadow: 1px 2px 13px -5px rgba(0,0,0,0.76);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: white;
                margin: 10px;
                border-radius: 5px;
                overflow: hidden;
            }
            .card__right {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
            }
            .card__right img {
                max-width: 100%;
                height: auto;
            }
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
                width: 65%;
            }
            .card__left > span {
                font-weight: 400;
                color: rgb(36, 36, 36);
            }
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card__left > p {
                color: rgb(36, 36, 36);
                font-size: 18px;
                margin-top: 10px;
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);