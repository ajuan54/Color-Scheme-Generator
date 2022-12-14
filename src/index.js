const colorSection = document.getElementById("colors");

function getColors() {
  let colorInput = document.getElementById("head").value.substr(-6);
  let mode = document.getElementById("dropDown-content").value;
  console.log(colorInput);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${mode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorSection.innerHTML = "";
      for (const color of data.colors) {
        colorSection.innerHTML += `
            <div class="color-value">
              <img class="color-img" src="${color.image.bare}">
              <h3>${color.hex.value}</h3>
            </div>`;
      }
    });
}

document.getElementById("getColorBtn").addEventListener("click", getColors);
