let text = "";
const seconds = ["00"]



for (let i = 0; i < 60; i++) {
    secstring = toString(i).padStart(2,"0")
    text += i + "seconds <br>";
    seconds.push(secstring);
}
console.log(text);
document.getElementById("demo");

for (let i = 0; i < 60; i++) {
    text += i + "seconds <br>";
  }
  console.log(text);
  document.getElementById("demo");