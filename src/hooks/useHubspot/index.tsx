"use client"

import { useContext } from "react";
import { HubspotContext } from "../../providers/HubspotProvider";

export const useHubspot = () => useContext(HubspotContext);