let description = document.getElementById("main");
async function read() {
  let name = document.getElementById("title");

  let response = await fetch("./data.json");
  let data = await response.json();
  data.forEach((e) => {
    console.log(e);
    main.innerHTML += `<p><b>${e.title}:</b><span>${e.description}</span></p>`;
  });
}

read();
