import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementDashboardDesktop } from "./screens/ElementDashboardDesktop/ElementDashboardDesktop";
import { ElementNyPatient } from "./screens/ElementNyPatient";
import { ElementNyPminnelse } from "./screens/ElementNyPminnelse";
import { ElementPatientdetalj } from "./screens/ElementPatientdetalj/ElementPatientdetalj";
import { ElementPatientdetaljScreen } from "./screens/ElementPatientdetaljScreen/ElementPatientdetaljScreen";
import { ElementPatientdetaljWrapper } from "./screens/ElementPatientdetaljWrapper/ElementPatientdetaljWrapper";
import { ElementPminnelser } from "./screens/ElementPminnelser";
import { ElementPotentiell } from "./screens/ElementPotentiell/ElementPotentiell";
import { ElementVntelistaAktiva } from "./screens/ElementVntelistaAktiva/ElementVntelistaAktiva";
import { ElementVntelistaDesktop } from "./screens/ElementVntelistaDesktop/ElementVntelistaDesktop";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementDashboardDesktop />,
  },
  {
    path: "/x01-dashboard-u47-desktop",
    element: <ElementDashboardDesktop />,
  },
  {
    path: "/x10-ny-paminnelse-u47-dialog",
    element: <ElementNyPminnelse />,
  },
  {
    path: "/x07-ny-patient-u47-desktop",
    element: <ElementNyPatient />,
  },
  {
    path: "/x06-patientdetalj-u47-notes-conflict",
    element: <ElementPatientdetalj />,
  },
  {
    path: "/x03-vantelista-u47-aktiva-filter",
    element: <ElementVntelistaAktiva />,
  },
  {
    path: "/x08-potentiell-dubblett-u47-desktop",
    element: <ElementPotentiell />,
  },
  {
    path: "/x09-paminnelser-u47-desktop",
    element: <ElementPminnelser />,
  },
  {
    path: "/x05-patientdetalj-u47-flera-reminders",
    element: <ElementPatientdetaljScreen />,
  },
  {
    path: "/x02-vantelista-u47-desktop",
    element: <ElementVntelistaDesktop />,
  },
  {
    path: "/x04-patientdetalj-u47-desktop",
    element: <ElementPatientdetaljWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
