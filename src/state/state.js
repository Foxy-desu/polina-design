const state = {
    socials: [
        {name: 'vkontakte', link: 'https://vk.com/plndsg'},
        {name: 'instagram', link: 'https://www.instagram.com/'},
        {name: 'telegram', link: 'https://web.telegram.org/'},
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
    },
    portfolioSection: {
        sectionHeading: {content:"наши работы", type: "2"},
        portfolioCards: [
            {id: "port1", info: 'Креатин мохито', path: 'images/portfolioImages/1.png'},
            {id: "port2", info: 'Сублимированная малина', path: 'images/portfolioImages/5.png'},
            {id: "port3", info: 'Гель для стирки', path: 'images/portfolioImages/9.png'},
            {id: "port4", info: 'Л-карнитин концентрат', path: 'images/portfolioImages/13.png'},
            {id: "port5", info: 'Игра тренажер', path: 'images/portfolioImages/2.png'},
            {id: "port6", info: 'Бесщеточный шуруповерт', path: 'images/portfolioImages/6.png'},
            {id: "port7", info: 'Защитные уголки', path: 'images/portfolioImages/10.png'},
            {id: "port8", info: 'Вешалка-трансформер', path: 'images/portfolioImages/14.png'},
            {id: "port9", info: 'Корзина для белья', path: 'images/portfolioImages/3.png'},
            {id: "port10", info: 'Православный крестик', path: 'images/portfolioImages/7.png'},
            {id: "port11", info: 'Амбиентная подсветка', path: 'images/portfolioImages/11.png'},
            {id: "port12", info: '3D EVA коврики', path: 'images/portfolioImages/15.png'},
            {id: "port13", info: 'Стимулятор для клитора', path: 'images/portfolioImages/4.png'},
            {id: "port14", info: 'Настольная лампа', path: 'images/portfolioImages/8.png'},
            {id: "port15", info: 'Глюкозамин-хондроитин', path: 'images/portfolioImages/12.png'},
            {id: "port16", info: 'Ретон-форте', path: 'images/portfolioImages/16.png'},
        ],
        buttons: [
            {id: "portBtn1", content: "полный список цен", type: "", action: ""},
            {id: "portBtn2", content: "сделать заказ", type: "colored", action: ""}
        ],
    }

};

export {state};