document.addEventListener("DOMContentLoaded", function () {
  const FIRST_LINK = document.getElementById("option1");
  const SECOND_LINK = document.getElementById("option2");
  const THIRD_LINK = document.getElementById("option3");

  /* barba.init({
      transitions: [
        {
          name: "opacity-transition",
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
            });
          },
        },
      ],
    });*/

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
  fetchArtworkDescription(111628, "artworkFourLegend");
  fetchArtworkImage("831a05de-d3f6-f4fa-a460-23008dd58dda", "artworkFour");
  fetchArtworkAlt(111628, "artworkFour");
  fetchArtworkTitle(111628, "titleFour");
  fetchArtworkDate(111628, "dateFour");

  //description, image, alt, date for FIVE image
  fetchArtworkDescription(111628, "artworkFiveLegend");
  fetchArtworkImage("831a05de-d3f6-f4fa-a460-23008dd58dda", "artworkFive");
  fetchArtworkAlt(111628, "artworkFive");
  fetchArtworkTitle(111628, "titleFive");
  fetchArtworkDate(111628, "dateFive");
  
  //description, image, alt, date for SIX image
  fetchArtworkDescription(111628, "artworkSixLegend");
  fetchArtworkImage("831a05de-d3f6-f4fa-a460-23008dd58dda", "artworkSix");
  fetchArtworkAlt(111628, "artworkSix");
  fetchArtworkTitle(111628, "titleSix");
  fetchArtworkDate(111628, "dateSix");
});
