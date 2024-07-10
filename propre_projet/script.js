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

  //DESCRIPTION FUNCTION FETCH
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
  //IMAGE FUNCTION FETCH
  function fetchArtworkImage(artworkImageId, elementId) {
    fetch(
      `https://www.artic.edu/iiif/2/${artworkImageId}/full/843,/0/default.jpg
      `,
      {
        method: "GET",
      },
    )
      .then(function (response) {
        document.getElementById(elementId).src = response.url;
      })
      .catch(function (error) {
        console.error("Error fetching artwork", error);
      });
  }

  //ALT FUNCTION FETCH
  function fetchArtworkAlt(artworkImageId, elementId) {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${artworkImageId}?fields=thumbnail`,
      {
        method: "GET",
      },
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.getElementById(elementId).alt = object.data.thumbnail.alt_text;
      })
      .catch(function (error) {
        console.error("Error fetching artwork", error);
      });
  }

  //TITLE FUNCTION FETCH
  function fetchArtworkTitle(artworkId, elementId) {
    fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}?fields=title`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.getElementById(elementId).innerText = object.data.title;
      });
  }

  //DATE FUNCTION FETCH
  function fetchArtworkDate(artworkId, elementId) {
    fetch(
      `https://api.artic.edu/api/v1/artworks/${artworkId}?fields=date_end`,
      {
        method: "GET",
      },
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.getElementById(elementId).innerText = object.data.date_end;
      });
  }
  //description, image, alt, date for first image
  fetchArtworkDescription(6565, "artworkOneLegend");
  fetchArtworkImage("b272df73-a965-ac37-4172-be4e99483637", "artworkOne");
  fetchArtworkAlt(6565, "artworkOne");
  fetchArtworkTitle(6565, "titleOne");
});
