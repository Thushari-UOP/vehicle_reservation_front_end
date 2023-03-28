// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//     width: '100%',
//     height: '800px'
// };

// const center = {
//     lat: 7.285039899999999,
//     lng: 80.6169968,
// };

// function Map() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'involuted-ratio-374709',
//         googleMapsApiKey: "AIzaSyCAALkJistFQz8Q9Rm5qZro60hvjbcCvmM"
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {

//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback() {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}

//         >
//             {<Marker

//             />/* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

// export default React.memo(Map)




// // import React from "react";
// // import GoogleMapReact from 'google-map-react';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// // export default function Map(){
// //   const defaultProps = {
// //     center: {
// //       lat: 10.99835602,
// //       lng: 77.01502627
// //     },
// //     zoom: 11
// //   };

// //   return (
// //     // Important! Always set the container height explicitly
// //     <div style={{ height: "500px", width: "500px" }}>
// //       <GoogleMapReact
// //         bootstrapURLKeys={{ key: "AIzaSyCAALkJistFQz8Q9Rm5qZro60hvjbcCvmM" }}
// //         defaultCenter={defaultProps.center}
// //         defaultZoom={defaultProps.zoom}
// //       >
// //         <AnyReactComponent
// //           lat={59.955413}
// //           lng={30.337844}
// //           text="My Marker"
// //         />
// //       </GoogleMapReact>
// //     </div>
// //   );
// // }