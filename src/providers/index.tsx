import { ReactNode } from "react";
import { ModalProvider } from "./ModalsProvider";
import { HubspotProvider, HubspotProviderProps } from "./HubspotProvider";

type DuxeComponentsProviderProps = {
  children: ReactNode;
  hubspot?: Omit<HubspotProviderProps, "children">;
}

export function DuxeComponentsProvider({
  children,
  hubspot,
}: DuxeComponentsProviderProps) {
  return (
    <HubspotProvider
      formScript={hubspot?.formScript}
      trackingScript={hubspot?.trackingScript}
    >
      <ModalProvider>
        {children}
      </ModalProvider>
    </HubspotProvider>
  )
}
