import React, { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = React.useState(new Date());
    useEffect(() => {
        console.log("setting up interval");
        const ID = setInterval(() => {
            setDate(new Date())
            console.log("date updated")
        }, 1000);
        return () => {
            console.log("clearing interval");
            clearInterval(ID);
        }
    }, [])
return (
    <div>
        <p>{date.toString()}</p>
    </div>
)
};

export default Clock;