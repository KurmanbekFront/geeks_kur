import React from "react";

const List = ({arr}) => {
    return (
        <ul>
            {arr.map(item => (
                <li key={item.id}>
                    {item.id}
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

export default List