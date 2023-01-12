/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { MapView, Heading, Text, LocationSearch } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";

import { Auth } from "aws-amplify";

import awsExports from "../src/aws-exports";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";

Amplify.configure(awsExports);

function MarkerWithPopup({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = ({ originalEvent }: any) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  return (
    <>
      <Marker
        latitude={latitude}
        longitude={longitude}
        onClick={handleMarkerClick}
      />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
        >
          <Heading level={2}>Marker Information</Heading>
          <Text>Some information about a location.</Text>
        </Popup>
      )}
    </>
  );
}
async function signIn() {
  try {
    const user = await Auth.signIn(
      process.env.NEXT_PUBLIC_COGNITO_URL || "provide an URL",
      process.env.NEXT_PUBLIC_COGNITO_PASSWORD
    );
    console.log(user);
  } catch (error) {
    console.log("error signing in", error);
  }
}

export default function Map() {
  const [geo, setGeo] = useState<any>(null);

  useEffect(() => {
    signIn();
    navigator.geolocation.getCurrentPosition((position) => {
      setGeo(position.coords);
      console.log(position);
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="relative w-2/3 h-2/3 m-auto mt-10">
        {geo && (
          <MapView
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            initialViewState={{
              latitude: geo.latitude,
              longitude: geo.longitude,
            }}
          >
            <MarkerWithPopup
              latitude={geo.latitude}
              longitude={geo.longitude}
            />

            <LocationSearch />
          </MapView>
        )}
      </div>
    </div>
  );
}
