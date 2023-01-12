/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { MapView, Heading, Text, LocationSearch } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import Image from "next/image";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../src/aws-exports";
import signIn from "../src/signIn";
// import signIn from "../src/aws/signIn";

Amplify.configure(awsExports);

function MarkerWithPopup({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = ({
    originalEvent,
  }: mapboxgl.MapboxEvent<MouseEvent>) => {
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
      {/* {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
        >
          <Heading level={2}>Marker Information</Heading>
          <Text>Some information about a location.</Text>
          <Image
            src="https://www.presse-citron.net/app/uploads/2020/10/model-3-2020.jpg"
            width={100}
            height={100}
            alt="alt"
          />
        </Popup>
      )} */}
    </>
  );
}

export default function Map() {
  const [geo, setGeo] = useState<any>(null);
  useEffect(() => {
    // signIn();
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setGeo(position.coords);
    //   console.log(position);
    // });
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="relative w-1/2 h-1/2">
        <MapView
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initialViewState={{
            latitude: 11,
            longitude: 11,
            zoom: 14,
          }}
        >
          {/* <MarkerWithPopup latitude={1} longitude={1} /> */}
          <LocationSearch />
        </MapView>
      </div>
    </div>
  );
}
