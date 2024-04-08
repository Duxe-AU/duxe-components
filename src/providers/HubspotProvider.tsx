"use client"

import { ReactNode, createContext, useEffect, useState } from "react";

export type HubspotProviderProps = {
  children: ReactNode;
  trackingScript?: string;
  formScript?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HubspotContextType = any;

export const HubspotContext = createContext<HubspotContextType>({});

export function HubspotProvider({ children, trackingScript, formScript }: HubspotProviderProps) {
  const [hubspot, setHubspot] = useState<HubspotContextType>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      const hubSpotScript = document.getElementById("hs-cf");

      if (hubSpotScript) {
        hubSpotScript.addEventListener("load", () => {
          setHubspot(window.hbspt);
        });
      }

      return hubSpotScript?.removeEventListener("load", () => {
        setHubspot(undefined);
      });
    }

    setLoaded(true);
  }, [loaded])

  return (
    <>
      {(loaded && trackingScript && formScript) && <>
        <script
          id="hs-script-loader"
          type="text/javascript"
          src={trackingScript}
          async
          defer
        />
        <script
          id="hs-cf"
          type="text/javascript"
          src={formScript}
          async
          defer
        />
      </>}
      <HubspotContext.Provider value={hubspot}>
        {children}
      </HubspotContext.Provider>
    </>
  )
}