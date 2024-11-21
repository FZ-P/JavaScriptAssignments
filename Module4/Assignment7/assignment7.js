document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  const map = L.map("map").setView([60.223, 24.758], 13); // Karaportti 2

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Handle form submission
  document.getElementById("routeForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const address = document.getElementById("address").value.trim();
    if (!address) {
      alert("Please enter a valid address.");
      return;
    }

    try {
      const apiKey = "849ee7a105bc4f3591df8592c46ce466";
      const geocodeResponse = await fetch(
        `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
          },
        }
      );

      if (!geocodeResponse.ok) {
        throw new Error(`HTTP Error! Status: ${geocodeResponse.status}`);
      }

      const geocodeData = await geocodeResponse.json();
      if (!geocodeData.features || geocodeData.features.length === 0) {
        alert("Could not find the address. Please try again.");
        return;
      }

      const [startLon, startLat] = geocodeData.features[0].geometry.coordinates;

      // Clear existing routes
      map.eachLayer((layer) => {
        if (layer._router) map.removeLayer(layer);
      });

      // Add a routing layer
      L.Routing.control({
        waypoints: [
          L.latLng(startLat, startLon), // Start point (user input)
          L.latLng(60.223, 24.758), // End point (Karaportti 2)
        ],
        router: L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
        }),
        geocoder: L.Control.Geocoder.nominatim(),
        routeWhileDragging: true,
      }).addTo(map);
    } catch (error) {
      console.error("Error fetching route:", error);
      alert("Could not find a route. Please check the address and try again.");
    }
  });
});
