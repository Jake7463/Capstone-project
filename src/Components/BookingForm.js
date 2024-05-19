import React, { useState } from "react";
import { Route, Router } from "react-router-dom";

function BookingForm({availableTimes, change, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [sitting, setSitting] = useState("");
    const [diners, setDiners] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");

    const clearForm = () => {
        setDate("");
        setTime("");
        setSitting("");
        setDiners("");
        setOccasion("");
        setComment("");
    }

    const disab = date && time && diners ? true : false;

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        submitForm([date,time,sitting,diners,occasion,comment])
    };

    return (
        <form id="form1" onSubmit={handleSubmit}>
            <h2>Reservation info</h2>
            <label>
                Date <sup>*</sup>
                <input type="date" id="input" name="date" value={date} onChange={(e)=>{
                    setDate(e.target.value);
                    change(e.target.value);}}
                    required/>
            </label>
            <label>
                time <sup>*</sup>
                <select id="input" name="time" value={time} onChange={(e)=>{setTime(e.target.value)}} required>
                    {availableTimes}
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
                <select id="input" value={diners} onChange={(e)=>{setDiners(e.target.value)}} required placeholder="Choose:">
                    <option value="choose">Choose</option>
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
                    <option value="choose" >Choose</option>
                    <option value="birthday" >Birthday</option>
                    <option value="anniversary" >anniversary</option>
                    <option value="engagement" >Engagement</option>
                </select>
            </label>
            <label>
                Add a comment
                <textarea id="input" name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
            </label>
            <button type="submit" className="submitBtn" disabled={!disab}> Reserve your table!</button>
        </form>
    )
}

export default BookingForm;