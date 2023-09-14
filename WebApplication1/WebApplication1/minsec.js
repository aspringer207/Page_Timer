let text = "";
const seconds = ["00"]


for (let i = 0; i < 60; i++) {
  text += i + "seconds <br>";
  seconds.push(i).padStart(2, '0')
}
console.log(text);
document.write("demo.html");

for (let i = 0; i < 60; i++) {
    text += i + "seconds <br>";
  }
  console.log(text);
  document.write("demo.html");