document.addEventListener("DOMContentLoaded", function () {
  //first painting
  fetch(
    `https://www.artic.edu/iiif/2/b272df73-a965-ac37-4172-be4e99483637/full/843,/0/default.jpg
    `,
    {
      method: "GET",
    },
  ).then(function (response) {
    document.getElementById("artworkOne").src = response.url;
  });
  //Description
  fetch("https://api.artic.edu/api/v1/artworks/6565?fields=description", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.getElementById("artworkOneLegend").innerHTML =
        object.data.description;
    });

  //Alt description

  fetch("https://api.artic.edu/api/v1/artworks/6565?fields=thumbnail", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.getElementById("artworkOne").alt =
        object.data.thumbnail.alt_text;
    });

  //Title
  fetch("https://api.artic.edu/api/v1/artworks/6565?fields=title", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.getElementById("titleOne").innerText = object.data.title;
    });

  //Date
  fetch("https://api.artic.edu/api/v1/artworks/6565?fields=date_end", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.getElementById("date").innerText = object.data.date_end;
    });

  //Make it for 3 artwork per page
});
