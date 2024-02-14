const state = {
    socials: [
        {name: 'vkontakte', link: 'https://vk.com/plndsg'},
        {name: 'instagram', link: 'https://www.instagram.com/'},
        {name: 'telegram', link: 'https://web.telegram.org/'},
    ],
    portfolioCards: [
        {id: 1, info: 'Креатин мохито', path: 'images/portfolioImages/1.png'},
        {id: 2, info: 'Игра тренажер', path: 'images/portfolioImages/2.png'},
        {id: 3, info: 'Корзина для белья', path: 'images/portfolioImages/3.png'},
        {id: 4, info: 'Стимулятор для клитора', path: 'images/portfolioImages/4.png'},
        {id: 5, info: 'Сублимированная малина', path: 'images/portfolioImages/5.png'},
        {id: 6, info: 'Бесщеточный шуруповерт', path: 'images/portfolioImages/6.png'},
        {id: 7, info: 'Православный крестик', path: 'images/portfolioImages/7.png'},
        {id: 8, info: 'Настольная лампа', path: 'images/portfolioImages/8.png'},
        {id: 9, info: 'Гель для стирки', path: 'images/portfolioImages/9.png'},
        {id: 10, info: 'Защитные уголки', path: 'images/portfolioImages/10.png'},
        {id: 11, info: 'Амбиентная подсветка', path: 'images/portfolioImages/11.png'},
        {id: 12, info: 'Глюкозамин-хондроитин', path: 'images/portfolioImages/12.png'},
        {id: 13, info: 'Л-карнитин концентрат', path: 'images/portfolioImages/13.png'},
        {id: 14, info: 'Вешалка-трансформер', path: 'images/portfolioImages/14.png'},
        {id: 15, info: '3D EVA коврики', path: 'images/portfolioImages/15.png'},
        {id: 16, info: 'Ретон-форте', path: 'images/portfolioImages/16.png'},
    ],
    introCards: {
        plain: {
            id: 17, info: "Карточка до обработки", path: "images/plain-card-1.png"
        },
        designed: {
            id: 18, info: "Карточка после обработки", path: "images/designed-card-1.png"
        }
    },
    advantagesSection: {
        //информация, прописанная в блоке с преимуществами
        //для кастомного переноса строки в description следует использовать \n - символ переноса строки
        sectionHeading: {content:"мы лучше", type: "1"},
        advantages: [
            {id: "adv1", heading: "портфолио", description: "с работами в разных стилях, ведь мы ориентируемся на ваших клиентов", descType: "small"},
            {id: "adv2", heading: "современный", description: "концепт не оставитникого равнодушным", descType: "small"},
            {id: "adv3", heading: "никаких проблем", description: "с лицензиями на\n материалы", descType: "small"},
            {id: "adv4", heading: "гарантия", description: "возврата средств, если не сможем завершить заказ", descType: "small"},
            
        ]
    },
    pricesSection: {
        sectionHeading: {content:"стоимость", type: "2"},
        plans: [
            {
                id: "plan1",
                planName: "start",
                perks: [
                    "1 слайд (обложка)",
                    "составление текста инфографики",
                    "дизайн под вашу аудиторию",
                    "сроки: 1-2 рабочих дня"
                ],
                price: '599',
                prevPrice: "",
                discount: "",
                type: "dark"
            },
            {
                id: "plan2",
                planName: "pro",
                perks: [
                    "обложка",
                    "4 информационных слайда",
                    "дизайн под вашу аудиторию",
                    "сроки: 2-3 рабочих дня"
                ],
                price: '2499',
                prevPrice: "3000",
                discount: "20",
                type: "light"
            },
            {
                id: "plan3",
                planName: "premium",
                perks: [
                    "обложка",
                    "6 информационных слайдов",
                    "логотип",
                    "шапка магазина",
                    "дизайн под вашу аудиторию",
                    "сроки: 5 рабочих дней"
                ],
                price: '6990',
                prevPrice: "9200",
                discount: "30",
                type: "dark, glowing"
            },
        ]
    }

};

export {state};