const state = {
    navigation: {
        anchors: [
            {
                id: "navLink1",
                content: "Полина Дизайн логотип",
                sectionId: "card-design",
                type: "image",
                icoPath: "icons/plndsg-logo.svg"
            },
            {
                id: "navLink2",
                content: "преимущества",
                sectionId: "advantages",
                type: "anchor",
                icoPath: ""
            },
            {
                id: "navLink3",
                content: "портфолио",
                sectionId: "portfolio",
                type: "anchor",
                icoPath: ""
            },
            {
                id: "navLink4",
                content: "стоимость",
                sectionId: "prices",
                type: "anchor",
                icoPath: ""
            }
        ]
    },
    socials: [
        {
            id: "social1",
            name: 'vkontakte',
            link: 'https://vk.com/plndsg',
            iconPath: "icons/socials-vk-ico.svg"
        },
        {
            id: "social2",
            name: 'instagram',
            link: 'https://www.instagram.com/',
            iconPath: "icons/socials-instagram-ico.svg"
        },
        {
            id: "social3",
            name: 'telegram',
            link: 'https://web.telegram.org/',
            iconPath: "icons/socials-telegram-ico.svg"
        },
    ],
    header: {
        sectionHeading: {
            id: "heroHead1",
            content: "карточки товаров",
            type: ""
        },
        cards: {
            plain: {
                id: "heroCard1",
                info: "Карточка до обработки",
                path: "images/plain-card-1.png",
                type: "plain",
                cardDesc: "до"
            },
            designed: {
                id: "heroCard2",
                info: "Карточка после обработки",
                path: "images/designed-card-1.png",
                type: "designed",
                cardDesc: "после"
            }
        },
        description: {
            id: "heroDesc1",
            heading: "кликабельная",
            description: "обложка - это 60% успеха!",
            descType: "large"
        }
    },
    advantagesSection: {
        //информация, прописанная в блоке с преимуществами
        //для кастомного переноса строки в description следует использовать \n - символ переноса строки
        sectionHeading: {
            id: "advHead1",
            content:"мы лучше",
            type: "1"
        },
        advantages: [
            {
                id: "adv1",
                heading: "портфолио",
                description: "с работами в разных стилях, ведь мы ориентируемся на ваших клиентов",
                descType: "small"
            },
            {
                id: "adv2",
                heading: "современный",
                description: "концепт не оставит\nникого равнодушным",
                descType: "small"
            },
            {
                id: "adv3",
                heading: "никаких проблем",
                description: "с лицензиями на\n материалы",
                descType: "small"
            },
            {
                id: "adv4",
                heading: "гарантия",
                description: "возврата средств, если\nне сможем завершить заказ",
                descType: "small"
            },
        ]
    },
    pricesSection: {
        sectionHeading: {
            id: "priceHead1",
            content:"стоимость",
            type: "2"
        },
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
        ],
        buttons: [
            {
                id: "priceBtn1",
                content: "полный список цен",
                type: "",
                to: "/all-prices"
            },
        ]
    },
    portfolioSection: {
        sectionHeading: {
            id: "portHead1",
            content:"наши работы",
            type: "2"
        },
        portfolioCards: [
            {
                id: "port1",
                info: 'Креатин мохито',
                path: 'images/portfolioImages/1.png'
            },
            {
                id: "port2",
                info: 'Сублимированная малина',
                path: 'images/portfolioImages/5.png'
            },
            {
                id: "port3",
                info: 'Гель для стирки',
                path: 'images/portfolioImages/9.png'
            },
            {
                id: "port4",
                info: 'Л-карнитин концентрат',
                path: 'images/portfolioImages/13.png'
            },
            {
                id: "port5",
                info: 'Игра тренажер',
                path: 'images/portfolioImages/2.png'
            },
            {
                id: "port6",
                info: 'Бесщеточный шуруповерт',
                path: 'images/portfolioImages/6.png'
            },
            {
                id: "port7",
                info: 'Защитные уголки',
                path: 'images/portfolioImages/10.png'
            },
            {
                id: "port8",
                info: 'Вешалка-трансформер',
                path: 'images/portfolioImages/14.png'
            },
            {
                id: "port9",
                info: 'Корзина для белья',
                path: 'images/portfolioImages/3.png'
            },
            {
                id: "port10",
                info: 'Православный крестик',
                path: 'images/portfolioImages/7.png'
            },
            {
                id: "port11",
                info: 'Амбиентная подсветка',
                path: 'images/portfolioImages/11.png'
            },
            {
                id: "port12",
                info: '3D EVA коврики',
                path: 'images/portfolioImages/15.png'
            },
            {
                id: "port13",
                info: 'Стимулятор для клитора',
                path: 'images/portfolioImages/4.png'
            },
            {
                id: "port14",
                info: 'Настольная лампа',
                path: 'images/portfolioImages/8.png'
            },
            {
                id: "port15",
                info: 'Глюкозамин-хондроитин',
                path: 'images/portfolioImages/12.png'
            },
            {
                id: "port16",
                info: 'Ретон-форте',
                path: 'images/portfolioImages/16.png'
            },
        ],
        buttons: [
            {
                id: "portBtn1",
                content: "полный список цен",
                type: "",
                to: "/all-prices"
            },
            {
                id: "portBtn2",
                content: "сделать заказ",
                type: "colored",
                to: "/order"
            }
        ],
    },
    atmosphereSection: {
        sectionHeading: {
            id: "atmosHead1",
            content:"не просто картинка",
            type: "2"
        },
        vibeBlock: {
            description: {
                id: "vibeDesc1",
                heading: "атмосфера",
                description: "первое, что мы стараемся сделать - это передать настроение товара через дизайн карточки",
                descType: "small"
            },
            cards: [
                {
                    id: "vibeCard1",
                    info: 'Глюкозамин-хондроитин',
                    path: 'images/portfolioImages/12.png'
                },
                {
                    id: "vibeCard2",
                    info: 'Глюкозамин-хондроитин: состав',
                    path: 'images/atmosphere-sample-lg-2.png'
                },
                {
                    id: "vibeCard3",
                    info: 'Глюкозамин-хондроитин',
                    path: 'images/portfolioImages/12.png'
                },
            ]

        },
        outstandBlock: {
            cards: {
                upperBlock: [
                    {
                        id: "outCard1",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-1.png'
                    },
                    {
                        id: "outCard2",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-2.png'
                    },
                    {
                        id: "outCard3",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-3.png'
                    },
                    {
                        id: "outCard4",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-4.png'
                    },
                ],
                lowerBlock: [
                    {
                        id: "outCard5",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-5.png'
                    },
                    {
                        id: "outCard6",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-6.png'
                    },
                    {
                        id: "outCard7",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-7.png'
                    },
                    {
                        id: "outCard8",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-8.png'
                    },
                    {
                        id: "outCard9",
                        info: 'пример обычной, неприметной карточки',
                        path: 'images/atmosphere-plain-sm-9.png'
                    },
                ]
            },
            description: {
                id: "vibeDesc1",
                heading: "выделяющийся",
                description: "контент очень важен, ведь если ваша карточка будет сливаться с другими = ее просто не заметят",
                descType: "small"
            }
        },
        lgExampleBlock: [
            {
                id: "lgEx1",
                info: "Аппарат для маникюра и педикюра: необработанная карточка",
                path: 'images/atmosphere-plain-lg-1.png',
                type: "plain"
            },
            {
                id: "lgEx2",
                info: "Аппарат для маникюра и педикюра: обработанная карточка",
                path: 'images/atmosphere-designed-lg-1.png',
                type: "designed"
            },
        ]
    },
    footer : {
        contacts: [
            {id: "footer1", content: "@plndsg", type: "mailto:"},
            {id: "footer2", content: "8 922 747 18 06", type: "tel:"}
        ]
    }

};

export {state};