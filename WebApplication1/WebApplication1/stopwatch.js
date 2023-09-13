


function beginStopwatch() {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    const ms = d.getMilliseconds().toString().toPrecision(2);
    const stopwatchdata = `${h}:${m}:${s}:${ms}`;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("milliseconds").innerHTML = ms;
    console.log(stopwatchdata);
}
    
