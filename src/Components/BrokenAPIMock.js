function BrokenAPIMock (){
    const dates = [
        ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
        ["17:30", "18:00", "18:30", "19:00", "20:00", "21:00"],
        ["17:30", "19:00", "19:30", "20:00", "21:00"],
        ["17:30", ,"19:00",  "20:30", "21:00"],
        ["18:00", "18:30", "19:00", "19:30", "20:00"],
        ["17:30",  "18:30", "19:00", "19:30"],
        ["18:00", "18:30", "19:00"],
        ["17:30", "18:00","19:30", "20:00",  "21:00"],
        ["17:30", "18:00", "18:30", "19:00", "19:30", "21:00"],
        ["18:30", "20:30", "21:00"]
    ];

    function fetchAPI (date) {
            const randNum = Math.floor(Math.random()*10);
            const mockTimes = dates[randNum];
            return mockTimes;
    };
    function submitAPI (data) {
        return true;
    };

    return{
        fetchAPI,
        submitAPI
    }
    };

    export default BrokenAPIMock;