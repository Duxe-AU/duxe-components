# useHubspot

The `useHubspot` hook is a utility used to embed HubSpot forms in your project.

## Prerequisite

To utilize this component, you need to enclose the root component within the provided wrapper component with the following props:

```jsx
<DuxeComponentsProvider
  hubspot={{
    trackingScript: "//js.hs-scripts.com/xxxxxxx.js",
    formScript: "//js.hsforms.net/forms/embed/v2.js",
  }}
>
  {children}
</DuxeComponentsProvider>
```

#### `hubspot` prop

| Key              | Type     | Required? | Description                                  |
| ---------------- | -------- | --------- | -------------------------------------------- |
| `trackingScript` | `string` | Yes       | Link to the HubSpot tracking script          |
| `formScript`     | `string` | Yes       | Link to the version of form embedding script |

More information can be found [here](https://github.com/Duxe-AU/duxe-components/blob/main/src/providers/README.md)

## Return

This hook returns the Hubspot Forms API object. More information can be found [here](https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options)

## Example styled width TailwindCSS:
```jsx
import { useHubspot } from "duxe-components";
import { useEffect } from "react";

export default function ContactForm() {
  const hubSpot = useHubspot();

  useEffect(() => {
    if (hubSpot) {
      hubSpot.forms.create({
        region: "ap-2",
        portalId: "XXXXXXX",
        formId: "b9e2e00f-1840-44c1-a93e-awdg43g908aw",
        target: '#hubspotForm'
      });
    }
  }, [hubSpot])

  return (
    <section id="contact-us" className="container h-screen">
      <div id="hubspotForm"></div>
    </section>
  )
}
```