import React, { useEffect, useRef, useState } from "react";

import PanZoom, { Element, PanZoomWithCover } from "@sasza/react-panzoom";

function App() {
  const timeRef = useRef();
  const [connected, setConnected] = useState(false);
  const [puzzleExists, setPuzzleExists] = useState(true);

  const url =
    "https://2.bp.blogspot.com/yhJig3p6a12vdTLbyGKvb--tWZ0OFmQJvINeWIxHxLi6jrkGWYWv50vVuvYJyH9gURw82IdXKiumOROOUv349q3gB4O2Qzgaxvvq9ZvjSnQ_kwMU_l9aMSPu1e6YDnwHv4RNs_1O=s0?rhlupa=OTMuNDcuNDQuMjAx&rnvuka=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDYuMDsgTmV4dXMgNSBCdWlsZC9NUkE1OE4pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTQuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY=";
  return (
    <div>
      <PanZoomWithCover cover={url}>
        <div className="w-2 h-2 bg-red-500"></div>
      </PanZoomWithCover>
    </div>
  );
}
export default App;
