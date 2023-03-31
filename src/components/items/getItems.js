function getItems() {
  const container = document.querySelector("#mw-content-text");
  const items = Array.from(container.querySelectorAll("tbody"));
  var i = 0;

  var srcList = [];

  setInterval(function () {
    const images = items[i].getElementsByTagName("img");
    console.log(images);
    srcList.push(images[1].src);
    var link = document.createElement("a");
    link.id = i;
    link.download = items[i].children[0].innerText;
    link.href = images[1].src;

    link.click();
    i++;
  }, 500);
}

/////////////////////////

function getUrl() {
  const itemsArr = [];
  const container = document.querySelector("#mw-content-text");
  const items = Array.from(container.querySelectorAll("tbody"));
  console.log(items);

  const arr = items.map((item) => {
    const urlElements = Array.from(item.querySelectorAll("a"));
    const urls = urlElements.map((url) => {
      return url.href;
    });

    return urls;
  });
  arr.flat(1).forEach(async (item) => {
    await fetch(item)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();

        var doc = parser.parseFromString(html, "text/html");

        const container = doc.querySelector("#mw-content-text");
        const items = Array.from(container.querySelectorAll("tbody"));

        var i = 0;

        var srcList = [];

        setInterval(function () {
          const images = items[i].getElementsByTagName("img");
          console.log(images);
          srcList.push(images[1].src);
          var link = document.createElement("a");
          link.id = i;
          link.download = items[i].children[0].innerText;
          link.href = images[1].src;

          link.click();
          i++;
        }, 500);

        itemsArr.push(arr);
      });
  });
  console.log(itemsArr);
  return itemsArr;
}

/////////////////////////////

function getItems() {
  const container = document.querySelector("#mw-content-text");
  const items = Array.from(container.querySelectorAll("tbody"));
  const arr = items.map((item) => {
    const objeto = {};
    for (let info of item.children) {
      if (info.innerText.includes(":")) {
        const key = info.innerText.split(":")[0];
        const value = info.innerText.split(":")[1];

        objeto[key] = value;
      } else if (
        objeto.nome &&
        !info.innerText.includes("_") &&
        info.innerText !== ""
      ) {
        objeto.hpAdicional = info.innerText;
      } else if (!info.innerText.includes("_") && info.innerText !== "") {
        objeto.nome = info.innerText;
      }
    }
    return objeto;
  });

  return arr;
}

function getUrl() {
  const itemsArr = [];
  const container = document.querySelector("#mw-content-text");
  const items = Array.from(container.querySelectorAll("tbody"));
  console.log(items);

  const arr = items.map((item) => {
    const urlElements = Array.from(item.querySelectorAll("a"));
    const urls = urlElements.map((url) => {
      return url.href;
    });

    return urls;
  });
  arr.flat(1).forEach(async (item) => {
    await fetch(item)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();

        var doc = parser.parseFromString(html, "text/html");

        const container = doc.querySelector("#mw-content-text");
        const items = Array.from(container.querySelectorAll("tbody"));
        const arr = items.map((item) => {
          const objeto = {};
          for (let info of item.children) {
            if (info.innerText.includes(":")) {
              const key = info.innerText.split(":")[0];
              const value = info.innerText.split(":")[1];

              objeto[key] = value;
            } else if (
              objeto.nome &&
              !info.innerText.includes("_") &&
              info.innerText !== ""
            ) {
              objeto.hpAdicional = info.innerText;
            } else if (!info.innerText.includes("_") && info.innerText !== "") {
              objeto.nome = info.innerText;
            }
          }
          return objeto;
        });

        itemsArr.push(arr);
      });
  });
  console.log(itemsArr);
  return itemsArr;
}
