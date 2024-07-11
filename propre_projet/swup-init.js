// swup-init.js
document.addEventListener("DOMContentLoaded", () => {
  const swup = new Swup();

  function reloadScript() {
    // Remove the existing script
    const oldScript = document.querySelector('script[src*="script.js"]');
    if (oldScript) {
      oldScript.remove();
    }

    // Create a new script element
    const newScript = document.createElement("script");
    newScript.src = "script.js"; // Adjust this path if necessary
    newScript.async = true;

    // Add a timestamp to force a reload (prevents caching)
    newScript.src = newScript.src + "?v=" + new Date().getTime();

    // Append the new script to the document
    document.body.appendChild(newScript);
  }

  // Run on initial page load
  reloadScript();

  // Run after every page transition
  swup.on("contentReplaced", reloadScript);
});
