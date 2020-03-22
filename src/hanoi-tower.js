module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let res = {};
    let turns = 2 ** disksNumber - 1;
    let seconds = turns * turnsSpeed;
    res.turns = turns;
    res.seconds = seconds;
    return res;
}