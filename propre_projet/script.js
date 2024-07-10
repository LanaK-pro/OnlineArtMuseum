document.addEventListener("DOMContentLoaded", function () {
  /* const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", loadContent);
  });
  // Function to load content
  function loadContent(e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    const contentMain = document.getElementsByTagName("main");

    // You can replace this switch statement with AJAX calls to load actual content
    switch (page) {
      case "option1":
        contentDiv.innerHTML =
          "<h1>Welcome to the Home Page</h1><p>This is the home content.</p>";
        break;
      case "about":
        contentDiv.innerHTML =
          "<h1>About Us</h1><p>Learn more about our company.</p>";
        break;
      case "contact":
        contentDiv.innerHTML =
          "<h1>Contact Us</h1><p>Get in touch with us.</p>";
        break;
      default:
        contentDiv.innerHTML = "<h1>404</h1><p>Page not found.</p>";
    }
  }

  // Load default content (e.g., Home page)
  document.querySelector('nav a[data-page="home"]').click();
  */

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
  /* fetch("https://api.artic.edu/api/v1/artworks/6565?fields=description", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.getElementById("artworkOneLegend").innerHTML =
        object.data.description;
    }); */

  //Alt description

  fetch("https://api.artic.edu/api/v1/artworks/6565?fields=thumbnail", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
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
      document.getElementById("dateOne").innerText = object.data.date_end;
    });

  //Function that fetches the good description for the given id and the html element and returns an error in console when needed
  function fetchArtworkDescription(artworkId, elementId) {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${artworkId}?fields=description`,
      {
        method: "GET",
      },
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.getElementById(elementId).innerHTML = object.data.description;
      })
      .catch(function (error) {
        console.error("Error fetching artwork description:", error);
      });
  }
  //description for first image
  console.log(fetchArtworkDescription(6565, "artworkOneLegend"));
});
