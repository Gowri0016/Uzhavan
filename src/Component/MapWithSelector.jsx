import React, { useEffect, useRef } from "react";

export default function MapWithSelector() {
  const mapRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const existingScript = document.getElementById("google-maps-script");

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`; // Replace with your API key
        script.async = true;
        script.defer = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          initMap();
        };
        document.head.appendChild(script);
      } else {
        existingScript.onload = () => {
          scriptLoadedRef.current = true;
          initMap();
        };
      }
    } else {
      initMap();
    }

    function initMap() {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 }, // Bangalore
        zoom: 18,
        mapTypeId: "satellite",
        tilt: 45,
        heading: 90,
      });

      map.setTilt(45);
    }
  }, []);

  return (
    <div>
      <label className="block text-green-700 font-semibold mb-2">Your Location</label>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "300px", borderRadius: "8px" }}
        className="shadow-lg"
      />
    </div>
  );
}