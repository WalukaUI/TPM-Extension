let newData = "Lukas Extension";

const pTag = document.getElementsByTagName("p");
for (let i = 0; i < pTag.length; i++) {
  pTag[i].innerHTML = newData;
}
