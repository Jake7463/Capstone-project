import React, { useState } from "react";

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [sitting, setSitting] = useState("");
    const [diners, setDiners] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");
    const availableTimes = ["17:30", "18:00", "18:30", "19:00", "20:00", "20:30"];


    const timeList = (e) =>{
        return availableTimes.map(e => {
            return <option value={e} key={e}>{e}</option>
        });
    };
    const clearForm = () => {
        setDate("");
        setTime("");
        setSitting("");
        setDiners("");
        setOccasion("");
        setComment("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you fro booking a table at Little Lemon!");
        clearForm();
    };

    return (
        <form id="form1" onSubmit={handleSubmit}>
            <h2>Reservation info</h2>
            <label>
                Date <sup>*</sup>
                <input type="date" id="input" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} />
            </label>
            <label>
                time <sup>*</sup>
                <select id="input" name="time" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                    {timeList()}
                </select>
            </label>
            <label>
                Sitting options<br/>
                <section id="radio">
                    <label>
                        <input type="radio" name="sittingOptions" value={sitting} onChange={(e)=>{setSitting(e.target.value)}}/>
                        Inside
                    </label>
                    <label>
                        <input type="radio" name="sittingOptions" value={sitting} onChange={(e)=>{setSitting(e.target.value)}}/>
                        Patio (no smoking area)
                    </label>
                    <label>
                        <input type="radio" name="sittingOptions" value={sitting} onChange={(e)=>{setSitting(e.target.value)}}/>
                        Outside (smoking area)
                    </label>
                </section>
            </label>
            <label>
                Diners <sup>*</sup>
                <select id="input" value={diners} onChange={(e)=>{setDiners(e.target.value)}} >
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    <option value="6" >6</option>
                    <option value="7" >7</option>
                    <option value="8" >8</option>
                    <option value="9" >9</option>
                    <option value="10" >10</option>
                    <option value="11" >11</option>
                    <option value="12" >12</option>
                </select>
            </label>
            <label>
                Occasion
                <select id="input" value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}>
                    <option value="birthday" >Birthday</option>
                    <option value="anniversary" >anniversary</option>
                    <option value="engagement" >Engagement</option>
                </select>
            </label>
            <label>
                Add a comment
                <textarea id="input" name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
            </label>
            <button type="submit">Reserve your table!</button>
        </form>
    )
}

export default BookingForm;