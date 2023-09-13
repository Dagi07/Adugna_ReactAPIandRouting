import React from "react";
import Ipadpro from "./components/Ipadpro";
import Macbookair from "./components/Macbookair";
import Iphone11pro from "./components/Iphone11pro";
import Iphoneelevensec from "./components/Iphoneelevensec";
import Tvandwatch from "./components/Tvandwatch";
import Arcadesec from "./components/Arcadesec";
import Alertsec from "./components/Alertsec";
import YouTube from "./components/YouTube";

function Home() {
  return (
    <div>
      <Alertsec />
      <Ipadpro />
      <Macbookair />
      <Iphone11pro />
      <Iphoneelevensec />
      <Tvandwatch />
      <Arcadesec />
      {/* <YouTube /> */}
    </div>
  );
}

export default Home;
