let gender,
  height,
  barReps,
  barSeconds,
  abs,
  runDistance,
  runTime,
  swimDistance,
  swimTime,
  diveTime,
  result;

console.log(runDistance, typeof runDistance);
if (
  gender === "male" &&
    height >= 1.7 &&
    (barReps >= 6 || barSeconds >= 15) &&
    abs >= 41 &&
    ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) &&
    ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30))
) {
  result = true;
} else if (
  gender === "female" &&
    height >= 1.6 &&
    (barReps >= 5 || barSeconds >= 12) &&
    abs >= 41 &&
    ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) &&
    ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30))
) {
  result = true;
}
