import React from "react";

const PerksListItem = (props)=> {
    const {content} = props;
    return <li key={props.index}>{content}</li>;
}

export {PerksListItem}