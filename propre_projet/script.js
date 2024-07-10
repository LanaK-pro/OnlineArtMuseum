document.addEventListener("DOMContentLoaded", function () {
  fetch(
    `https://www.artic.edu/iiif/2/b272df73-a965-ac37-4172-be4e99483637/full/843,/0/default.jpg
    `,
    {
      method: "GET",
    },
  ).then(function (response) {
    console.log(response);
    document.getElementById("artworkOne").src = response.url;
  });
});
