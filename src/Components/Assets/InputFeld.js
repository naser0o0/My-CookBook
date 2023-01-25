import React from "react";

export default function InputFeld({
    className,
    type,
    name,
    placeholder,
    onChange,
}) {
    return (
        <>
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            ></input>
        </>
    );
}
