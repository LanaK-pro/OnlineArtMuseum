document.addEventListener("DOMContentLoaded", function () {
  const FIRST_LINK = document.getElementById("option1");
  const SECOND_LINK = document.getElementById("option2");
  const THIRD_LINK = document.getElementById("option3");
  const SVG = document.getElementById("mysvg");

  options = {
    hoverEffect: "circle-move",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  };
  magicMouse(options);

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
        console.error("Error fetching alt", error);
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
      })
      .catch(function (error) {
        console.error("Error fetching title", error);
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
      })
      .catch(function (error) {
        console.error("Error fetching date", error);
      });
  }

  //description, image, alt, date for FOUR image
  fetchArtworkDescription(27992, "artworkFourLegend");
  fetchArtworkImage("2d484387-2509-5e8e-2c43-22f9981972eb", "artworkFour");
  fetchArtworkAlt(27992, "artworkFour");
  fetchArtworkTitle(27992, "titleFour");
  fetchArtworkDate(27992, "dateFour");

  //description, image, alt, date for FIVE image
  fetchArtworkDescription(4783, "artworkFiveLegend");
  fetchArtworkImage("db94c894-a24c-c2e0-9db9-0506567a0152", "artworkFive");
  fetchArtworkAlt(4783, "artworkFive");
  fetchArtworkTitle(4783, "titleFive");
  fetchArtworkDate(4783, "dateFive");

  //description, image, alt, date for SIX image
  fetchArtworkDescription(14655, "artworkSixLegend");
  fetchArtworkImage("3a608f55-d76e-fa96-d0b1-0789fbc48f1e", "artworkSix");
  fetchArtworkAlt(14655, "artworkSix");
  fetchArtworkTitle(14655, "titleSix");
  fetchArtworkDate(14655, "dateSix");

  const ZOOMABLE_IMAGES = document.querySelectorAll(".zoomable");

  ZOOMABLE_IMAGES.forEach((img) => {
    img.addEventListener("click", function () {
      const zoomedContainer = document.createElement("div");
      zoomedContainer.classList.add("zoomed");

      const zoomedImg = document.createElement("img");
      zoomedImg.src = this.src;
      zoomedImg.alt = this.alt;

      zoomedContainer.appendChild(zoomedImg);
      document.body.appendChild(zoomedContainer);

      // Trigger reflow to ensure the transition works
      zoomedContainer.offsetHeight;

      // Add active class to start the transition
      zoomedContainer.classList.add("active");

      zoomedContainer.addEventListener("click", function () {
        // Remove active class to start the out transition
        this.classList.remove("active");

        // Wait for the transition to complete before removing the element
        setTimeout(() => {
          document.body.removeChild(this);
        }, 300); // This should match the transition duration in CSS
      });
    });
  });

  // Function to rotate SVG
  function rotateSVG() {
    // Get scroll position
    const SCROLL_POSITION = window.scrollY;

    // Calculate rotation
    const ROTATION = SCROLL_POSITION * 0.1;

    // Apply rotation to SVG
    SVG.style.transform = `rotate(${ROTATION}deg)`;
  }

  // Add scroll event listener
  window.addEventListener("scroll", rotateSVG);
});
