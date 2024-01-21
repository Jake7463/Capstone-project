import React from "react";

function ReserveForm() {
    return (
        <form id="form1">
            <h2>Reservation info</h2>
            <label>
                Date <sup>*</sup>
                <input type="date" id="input" name="date" />
            </label>
            <label>
                time <sup>*</sup>
                <input type="time" id="input" name="time" />
            </label>
            <label>
                Sitting options<br/>
                <section id="radio">
                    <label>
                        <input type="radio" name="sittingOptions" value="inside"/>
                        Inside
                    </label>
                    <label>
                        <input type="radio" name="sittingOptions" value="patio"/>
                        Patio (no smoking area)
                    </label>
                    <label>
                        <input type="radio" name="sittingOptions" value="outside"/>
                        Outside (smoking area)
                    </label>
                </section>
            </label>
            <label>
                How many diners <sup>*</sup>
                <input type="text" id="input" name="diners" />
            </label>
            <label>
                Occasion
                <select id="input">
                    <option value="birthday" >Birthday</option>
                    <option value="anniversary" >anniversary</option>
                    <option value="engagement" >Engagement</option>
                </select>
            </label>
            <label>
                Add a comment
                <textarea id="input" name="comment" />
            </label>
            <button type="submit">Reserve your table!</button>
        </form>
    )
}

export default ReserveForm;