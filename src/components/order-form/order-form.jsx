import React, {useEffect, useState} from "react";
import style from "./order-form.module.scss";
import {Link} from "react-router-dom";
import {Button} from "../UI/button/button";

const ItemPicker = ({options, setSelectText})=> {

    const [select, setSelect] = useState(()=> {
        return options[0].id;
    });

    useEffect(()=> {
        setSelectText(select);
    }, [select])

    function renderOptions(options){
        return options.map((option, i)=>{
            return <option key={option.id} value={option.id}>{option.planName} ({option.price} руб.)</option>
        })
    }

    return (
        <label>
            Выберите товар:
            <select style={{background: "blue"}} value={select} onChange={(event)=> {
                setSelect(event.target.value);
            }} required={true}>
                {renderOptions(options)}
            </select>
        </label>
    )
};
const PhoneInput = ({fieldText, setFieldText})=> {

    return (
        <input
            required
            style={{background: "blue"}}
            type="tel"
            value={fieldText}
            onChange={(event) => {
            setFieldText(event.target.value)
        }}/>
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
                    return <li key={perk.id}>{perk}</li>
                })
            }

            return (
                <>
                    <p>Вы выбрали план "{data.planName}"</p>
                    <p>Стоимость: {data.price} рублей.</p>
                    <p>Включенные услуги:</p>
                    <ul>
                        {renderPerks(data.perks)}
                    </ul>
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
        <textarea
            rows="5"
            cols="33"
            value={commentText}
            placeholder={"Вы можете оставить комментарий к заказу"}
            onChange={(event)=> {
            setCommentText(event.target.value)}}
            style={{color: "black"}}
        />
    )
}

export const OrderForm = ({data}) => {
    //TODO: add local storage
    const options = data;

    const [blockType, setBlockType] = useState("form");
    const [fieldText, setFieldText] = useState("");
    const [selectText, setSelectText] = useState("");
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        console.log(`selected plan is ${selectText}`)
    }, [selectText]);

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
        }
        else window.alert("Пожалуйста, введите номер телефона")

    };

    return (
        <>
            {blockType === "alert"
                ? <div>Information was sent. We will contact you shortly</div>
                : (
                    <form>
                        <ItemPicker options={options} setSelectText={setSelectText}/>
                        <PhoneInput fieldText={fieldText} setFieldText={setFieldText}/>
                        <ItemPrice selectText={selectText} options={options} />
                        <ItemDesc selectText={selectText} options={options}/>
                        <Comment commentText={commentText} setCommentText={setCommentText}/>
                        <div onClick={() => {
                            makeOrder(options, fieldText, selectText, commentText)
                        }}>
                            <Button content={"отправить данные"} type={"colored"}/>
                        </div>
                        <Button content={"Отмена"} to={"/"}></Button>
                    </form>
                )
            }
        </>

    )
}