import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/dashboard.tsx"),
    route("devices", "routes/devices.tsx"),
     route("device/:id", "routes/device.tsx"),
    route("crud", "routes/crude.tsx",[
        route("create", "routes/newdevice.tsx"),
        route("edit/:id", "routes/editdevice.tsx"),
    ]),
   
   

] satisfies RouteConfig;
