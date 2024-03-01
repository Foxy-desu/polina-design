import React, {useEffect, useState} from "react";
import style from "./order-form.module.scss";
import {Button} from "../UI/button/button";

const ItemPicker = ({options, setSelectText, selectText})=> {
    const [select, setSelect] = useState(()=> {
        if(selectText !== "") return selectText;
        return options[0].id;
    });
    useEffect(()=> {
        setSelectText(select);
    }, [select])

    function renderOptions(options){
        return options.map((option)=>{
            return (
                <option
                    className={style["options-list__option"]}
                    key={option.id}
                    value={option.id}
                >
                    {option.planName}
                </option>
            )
        })
    }

    return (
        <label className={style["options-list__label"]}>
            Выберите пакет услуг:<br/>
            <select
                className={style["options-list"]}
                value={select} onChange={(event) => {
                setSelect(event.target.value);
            }}>
                {renderOptions(options)}
            </select>
        </label>
    )
};
const PhoneInput = ({fieldText, setFieldText})=> {

    return (
        <label className={style["phone-input__label"]}>
            Введите номер телефона <br/>
            <input className={style["phone-input__input"]}
                  required
                  type="tel"
                  value={fieldText}
                  onChange={(event) => {
                      setFieldText(event.target.value)
                  }}
            />
        </label>
    )
}
const ItemDesc = ({selectText, options}) => {
    function renderDescription(selectText, options) {
        if (selectText) {
            const data = options.filter((option)=> {
                return option.id === selectText;
            })[0];

            function renderPerks(perks) {
                return perks.map((perk)=> {
                    return <li className={style["perks__list-item"]} key={perk.id}>{perk}</li>
                })
            }

            return (
                <>
                    <h3 className={style["description__heading"] + ' ' + style["heading"]}>Вы выбрали пакет "{data.planName}"</h3>
                    <p className={style["description__price"]}>cтоимостью <span className={style["accent"]}>{data.price}</span> рублей.</p>
                    <div className={style["description__perks"]}>
                        <h3 className={style["perks-heading"] + ' ' + style["heading"]}>Включенные услуги:</h3>
                        <ul className={style["perks-list"]}>
                            {renderPerks(data.perks)}
                        </ul>
                    </div>
                </>
            )
        }
        else return "";
    }

    return (
        <div className={style["plan-desc"]}>
            {renderDescription(selectText, options)}
        </div>
    )
};
const ItemPrice = ({selectText, options}) => {

    if(selectText) {
        function getPrice(selectText, options) {
            return options.find((option)=> {
                return option.id === selectText;
            }).price;
        }

        return (
            <div>
                <span>{getPrice(selectText, options)}</span> <span>Руб</span>
            </div>
        )
    }
    else return "";


}

const Comment = ({commentText, setCommentText}) => {

    return (
        <textarea className={style["comment__textarea"]}
            rows="5"
            cols="33"
            value={commentText}
            placeholder={"Вы можете оставить комментарий к заказу"}
            onChange={(event)=> {
            setCommentText(event.target.value)}}
        />
    )
}

export const OrderForm = ({data}) => {
    //TODO: add local storage
    const options = data;

    const [blockType, setBlockType] = useState("form");
    const [fieldText, setFieldText] = useState("");
    const [selectText, setSelectText] = useState(()=> {
        if(localStorage.getItem('plan')) {
            return (localStorage.getItem('plan'))
        }
        else return ""
    });
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        console.log(`selected plan is ${selectText}`);
    }, [selectText]);

    useEffect(()=> {
        return ()=> localStorage.removeItem("plan");
    }, []);

    function makeOrder(options, fieldText, selectText, commentText) {
        function prepareObject() {
            const data = options.filter((option)=> {
                return option.id === selectText;
            })[0];

            return {
                itemData: JSON.parse(JSON.stringify(data)),
                userContact: fieldText,
                userComment: commentText,
            };
        }
        if(fieldText) {
            console.log(prepareObject());
            setBlockType("alert");
            localStorage.removeItem("plan");
        }
        else window.alert("Пожалуйста, введите номер телефона")

    };

    return (
        <>
            {blockType === "alert"
                ? <div className={style["message"]}>
                    <p className={style["message__text"]}>Спасибо за предоставленную информацию. Временно она помещена в логи. Позднее будет
                        имплементирован функционал отправки данных дизайнеру</p>
                    <div className={style["message__button"]}>
                        <Button content={"на главную"} path={"/"}></Button>
                    </div>
                </div>
                : (
                    <form className={style["form"]}>
                        <div className={style["form__item-picker"]}>
                        <ItemPicker options={options} setSelectText={setSelectText} selectText={selectText}/>
                            </div>
                            <div className={style["form__phone-input"]}>
                                <PhoneInput fieldText={fieldText} setFieldText={setFieldText}/>
                            </div>
                            <div className={style["form__description"]}>
                                <ItemDesc selectText={selectText} options={options}/>
                            </div>
                            <div className={style["form__comment"]}>
                                <Comment commentText={commentText} setCommentText={setCommentText}/>
                            </div>
                            <div className={style["form__buttons"]}>
                                <div
                                    className={style["form__button"]}
                                    onClick={() => {
                                        makeOrder(options, fieldText, selectText, commentText)
                                    }}>
                                    <Button content={"отправить данные"} type={"colored"}/>
                                </div>
                                <div className={style["form__button"]}>
                                    <Button content={"отмена"} path={"/"}></Button>
                                </div>
                            </div>
                    </form>
                )
            }
        </>

    )
}