// Import necessary libraries
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapDataPoint {
  latitude: number;
  longitude: number; // Changed from 'longitude;' to 'longitude: number;'
  address: string;
}

// Updated props interface for MapComponent
interface MapComponentProps {
  mapPoints: MapDataPoint[]; // Simplified prop name and structure
  accessToken: string; // Added accessToken prop
}

function MapComponent({ mapPoints, accessToken }: MapComponentProps) {
  // Reference to the map container
  const mapContainer = useRef<HTMLDivElement | null>(null);

  // Effect hook to initialize the map
  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Check if map container exists and the map has not been initialized
        if (
          !mapContainer.current ||
          (mapContainer.current as any)._leaflet_id
        ) {
          return;
        }

        // Create a Leaflet map instance
        const map = L.map(mapContainer.current).setView([6.5244, 3.3792], 10); // Centered on Lagos, adjusted zoom

        // Add Mapbox tile layer with street names
        L.tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, // Moved accessToken into the URL
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
              '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
              'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11", // Change the map style ID as per your requirement
            tileSize: 512,
            zoomOffset: -1,
          }
        ).addTo(map);

        // Create a layer group for markers
        const markers = L.featureGroup();

        // Add markers to the feature group
        mapPoints.forEach((data: MapDataPoint) => {
          const ovalIcon = L.divIcon({
            html: `<div style="width: 20px; height: 12px; background-color: rgba(255, 120, 0, 0.8); border: 1px solid #000; border-radius: 50%;"></div>`,
            className: '', // Prevents default divIcon styling
            iconSize: [20, 12], // Size of the oval icon
            iconAnchor: [10, 6], // Anchor point (center of the oval)
            popupAnchor: [0, -6] // Popup anchor relative to iconAnchor
          });

          const marker = L.marker([data.latitude, data.longitude], { icon: ovalIcon })
            .bindPopup(data.address);
          
          markers.addLayer(marker);
        });

        // Add the feature group to the map
        if (mapPoints.length > 0) {
          markers.addTo(map);
          // Fit the map to the bounds of all markers
          map.fitBounds(markers.getBounds());
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        // Handle the error gracefully, e.g., show a message to the user
      }
    };

    initializeMap();
  }, [mapPoints, accessToken]); // Updated dependency array

  // Render the map container
  return <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />;
}

// Main component to render the map component
// Updated props interface for NigeriaMap
interface NigeriaMapProps {
  mapData: MapDataPoint[]; // Simplified prop
}

function NigeriaMap({ mapData }: NigeriaMapProps) {
  // TODO: Replace with your actual Mapbox access token, possibly from environment variables
  const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYWRlZ2JveWVnYSIsImEiOiJjbHc5a201YWMwNTJsMm1vZWdjOHZ1bzlnIn0.VEfuKecOrNmcpQ87S72DAw";

  if (!MAPBOX_ACCESS_TOKEN) {
    console.warn("Mapbox access token is not set. Map may not load correctly.");
    return <div>Map requires a Mapbox access token.</div>;
  }
  return <MapComponent mapPoints={mapData} accessToken={MAPBOX_ACCESS_TOKEN} />;
}

// Export the main component
export default NigeriaMap;
