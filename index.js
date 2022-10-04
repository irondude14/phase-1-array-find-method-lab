// code your solution here

function superbowlWin(record) {
    // for (const obj of record) {
    //     if (obj.result === "W") {
    //         return obj.year;
    //     }; 
    // };
    let winningRecord = record.find(obj => obj.result === "W")
    return !!winningRecord ? winningRecord.year : undefined;
};
 




