/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { MapView, Heading, Text, LocationSearch } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import agencyFetcher from "../services/agenciesFetcher";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { TAgency } from "../src/types/types";
import { useRouter } from "next/router";

Amplify.configure(awsExports);

function MarkerWithPopup({
  latitude,
  longitude,
  name,
  adresse,
  id,
}: {
  latitude: number;
  longitude: number;
  name: String;
  adresse: String;
  id: String;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const handleMarkerClick = ({ originalEvent }: any) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  const handleRoute = () => {
    console.log(id);
    router.push(`/agencies/${id}`);
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
          <Heading onClick={handleRoute} level={5}>
            {name}
          </Heading>
          <Text onClick={handleRoute}>{adresse}</Text>
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
  const [agencies, setAgencies] = useState<TAgency[]>([]);

  useEffect(() => {
    signIn();
    navigator.geolocation.getCurrentPosition((position) => {
      setGeo(position.coords);
    });
  }, []);
  console.log(geo);
  useEffect(() => {
    agencyFetcher.getAgencies().then((data) => {
      if (data) {
        setAgencies(data);
      }
    });
  }, []);
  console.log(agencies);
  return (
    <div className="flex flex-col w-screen h-screen">
      <h1 className="from-neutral-500 font-serif mx-auto mt-5">
        Select your favourite agency
      </h1>
      <div className="relative w-2/3 h-1/2 m-auto mt-5">
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
              zoom: 9,
            }}
          >
            {agencies.map((e) => {
              return (
                <MarkerWithPopup
                  key={e.id as string}
                  latitude={+e.lat}
                  longitude={+e.lng}
                  name={e.name}
                  adresse={e.address}
                  id={e.id}
                />
              );
            })}

            <LocationSearch />
          </MapView>
        )}
      </div>
    </div>
  );
}
