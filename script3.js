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

  //image, alt, date for SEVEN image
  fetchArtworkImage("b3974542-b9b4-7568-fc4b-966738f61d78", "artworkSeven");
  fetchArtworkAlt(24645, "artworkSeven");
  fetchArtworkTitle(24645, "titleSeven");
  fetchArtworkDate(24645, "dateSeven");

  //image, alt, date for EIGHT image
  fetchArtworkImage("779e2fe5-8df7-3128-1053-308ce977b688", "artworkEight");
  fetchArtworkAlt(25006, "artworkEight");
  fetchArtworkTitle(25006, "titleEight");
  fetchArtworkDate(25006, "dateEight");

  //description, image, alt, date for NINE image
  fetchArtworkDescription(102077, "artworkNineLegend");
  fetchArtworkImage("c2e3c773-f443-810c-598f-d9d64481203b", "artworkNine");
  fetchArtworkAlt(102077, "artworkNine");
  fetchArtworkTitle(102077, "titleNine");
  fetchArtworkDate(102077, "dateNine");

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
