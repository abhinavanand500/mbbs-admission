// "use client";
// import React, { useState } from "react";
// import { Tabs, Tab } from "./components/TabComponent";

// interface LocationData {
//   address: string;
//   phone: string;
//   map: string;
// }

// const Page: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState({
//     map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28779.035631531722!2d85.07328389189236!3d25.625528851324482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20floor%2C%20Sumitra%20arcade%2C%20Ashiyana%20digha%20road%20%2CPatna%20800014!5e0!3m2!1sen!2sin!4v1603818175433!5m2!1sen!2sin",
//     address: "Unter den Klippen 5 32676 Lügde",
//     phone: "+91 8050575767",
//   });

//   const locations: { [key: string]: LocationData } = {
//     Germany: {
//       map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28779.035631531722!2d85.07328389189236!3d25.625528851324482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20floor%2C%20Sumitra%20arcade%2C%20Ashiyana%20digha%20road%20%2CPatna%20800014!5e0!3m2!1sen!2sin!4v1603818175433!5m2!1sen!2sin",
//       address: "Unter den Klippen 5 32676 Lügde",
//       phone: "+91 8050575767",
//     },
//     Bangalore: {
//       map: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=New%20York&ie=UTF8&t=&z=14&iwloc=B&output=embed",
//       address: "456 MG Road, Bangalore, India",
//       phone: "+91 8050575767",
//     },
//     Mumbai: {
//       map: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Manila&ie=UTF8&t=&z=14&iwloc=B&output=embed",
//       address: "789 Marine Drive, Mumbai, India",
//       phone: "+91 8050575767",
//     },
//     Bhopal: {
//       map: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Mumbai&ie=UTF8&t=&z=14&iwloc=B&output=embed",
//       address: "321 Lake Road, Bhopal, India",
//       phone: "+91 8050575767",
//     },
//     Patna: {
//       map: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Mumbai&ie=UTF8&t=&z=14&iwloc=B&output=embed",
//       address: "321 Lake Road, Bhopal, India",
//       phone: "+91 8050575767",
//     },
//     Kanpur: {
//       map: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Mumbai&ie=UTF8&t=&z=14&iwloc=B&output=embed",
//       address: "321 Lake Road, Bhopal, India",
//       phone: "+91 8050575767",
//     },
//   };

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
//           {/* Left Column */}
//           <div className="md:w-2/3 w-full flex flex-col">
//             {/* Tabs Section */}
//             <Tabs>
//               {Object.keys(locations).map((label) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   onClick={() => setCurrentLocation(locations[label])}
//                 >
//                   {/* Content inside tabs can be optional */}
//                 </Tab>
//               ))}
//             </Tabs>
//             {/* Map Section */}
//             <div className=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px]">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0 w-full h-full"
//                 title="map"
//                 src={currentLocation.map}
//                 style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//               ></iframe>
//               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div className="lg:w-1/2 px-6">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p className="mt-1">{currentLocation.address}</p>
//                 </div>
//                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     PHONE
//                   </h2>
//                   <p className="leading-relaxed">{currentLocation.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>
//             <p className="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Tabs, Tab } from "./components/TabComponent";

// interface LocationData {
//   address: string;
//   phone: string;
//   mapUrl: string;
// }

// const Page: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<LocationData>({
//     address: "Loading...",
//     phone: "Loading...",
//     mapUrl: "",
//   });
//   const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
//     {}
//   );
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     // Replace this URL with your API endpoint
//     const apiHost = process.env.NEXT_PUBLIC_API_HOST;
//     const query = encodeURIComponent(`*[ _type == "contactPage"]`);

//     fetch(apiHost + query)
//       .then((res) => res.json())
//       .then((data) => {
//         const fetchedLocations = data.result.reduce((acc: any, item: any) => {
//           acc[item.branchName] = {
//             address: item.branchAddress,
//             phone: item.branchMobNo[0]?.mobNum || "N/A",
//             mapUrl: item.branchLocation,
//           };
//           return acc;
//         }, {});
//         setLocations(fetchedLocations);

//         // Set default location if available
//         if (Object.keys(fetchedLocations).length > 0) {
//           const firstLocation = Object.keys(fetchedLocations)[0];
//           setCurrentLocation(fetchedLocations[firstLocation]);
//         }
//       })
//       .finally(() => setIsFetching(false));
//   }, []);

//   const handleLocationChange = (location: string) => {
//     const selectedLocation = locations[location];
//     if (selectedLocation) {
//       setCurrentLocation(selectedLocation);
//     }
//   };

//   if (isFetching) {
//     return <div>Loading...</div>; // You can use a loading spinner or anything else here
//   }

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
//           {/* Left Column */}
//           <div className="md:w-2/3 w-full flex flex-col">
//             {/* Tabs Section */}
//             <Tabs>
//               {Object.keys(locations).map((label) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   onClick={() => handleLocationChange(label)}
//                 >
//                   {/* Content inside tabs can be optional */}
//                 </Tab>
//               ))}
//             </Tabs>
//             {/* Map Section */}
//             <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px]">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0 w-full h-full"
//                 title="map"
//                 src={currentLocation.mapUrl}
//                 style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//               ></iframe>
//               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div className="lg:w-1/2 px-6">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p className="mt-1">{currentLocation.address}</p>
//                 </div>
//                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     PHONE
//                   </h2>
//                   <p className="leading-relaxed">{currentLocation.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>
//             <p className="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Tabs, Tab } from "./components/TabComponent";

// interface LocationData {
//   address: string;
//   phone: string;
//   mapUrl: string;
// }

// const Page: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<LocationData>({
//     address: "Loading...",
//     phone: "Loading...",
//     mapUrl: "",
//   });
//   const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
//     {}
//   );
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     // Replace this URL with your API endpoint
//     const apiHost = process.env.NEXT_PUBLIC_API_HOST;
//     const query = encodeURIComponent(`*[ _type == "contactPage"]`);

//     fetch(apiHost + query)
//       .then((res) => res.json())
//       .then((data) => {
//         const fetchedLocations = data.result.reduce((acc: any, item: any) => {
//           acc[item.branchName] = {
//             address: item.branchAddress,
//             phone: item.branchMobNo[0]?.mobNum || "N/A",
//             mapUrl: item.branchLocation,
//           };
//           return acc;
//         }, {});
//         setLocations(fetchedLocations);

//         // Set default location if available
//         if (Object.keys(fetchedLocations).length > 0) {
//           const firstLocation = Object.keys(fetchedLocations)[0];
//           setCurrentLocation(fetchedLocations[firstLocation]);
//         }
//       })
//       .finally(() => setIsFetching(false));
//   }, []);

//   const handleLocationChange = (location: string) => {
//     const selectedLocation = locations[location];
//     if (selectedLocation) {
//       setCurrentLocation(selectedLocation);
//     }
//   };

//   if (isFetching) {
//     return <div>Loading...</div>; // You can use a loading spinner or anything else here
//   }

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
//           {/* Left Column */}
//           <div className="md:w-2/3 w-full flex flex-col">
//             {/* Tabs Section */}
//             <Tabs>
//               {Object.keys(locations).map((label) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   onClick={() => handleLocationChange(label)}
//                 >
//                   {/* Content inside tabs can be optional */}
//                 </Tab>
//               ))}
//             </Tabs>
//             {/* Map Section */}
//             <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px]">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0 w-full h-full"
//                 title="map"
//                 src={currentLocation.mapUrl}
//                 style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//               ></iframe>
//               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div className="lg:w-1/2 px-6">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p className="mt-1">{currentLocation.address}</p>
//                 </div>
//                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     PHONE
//                   </h2>
//                   <p className="leading-relaxed">{currentLocation.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column with Contact Form */}
//           <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Contact
//             </h2>

//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name*
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="phone"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Phone (+91)*
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 placeholder="Please Enter Valid Phone Number"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email*
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="course-job"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Course / Job Interested*
//               </label>
//               <input
//                 type="text"
//                 id="course-job"
//                 name="course-job"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="study-country"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Study / Job Country*
//               </label>
//               <input
//                 type="text"
//                 id="study-country"
//                 name="study-country"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="resident-country"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Resident Country*
//               </label>
//               <input
//                 type="text"
//                 id="resident-country"
//                 name="resident-country"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <div className="relative mb-4">
//               <label
//                 htmlFor="state-province"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 State / Province*
//               </label>
//               <input
//                 type="text"
//                 id="state-province"
//                 name="state-province"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 required
//               />
//             </div>

//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>

//             <p className="text-xs text-gray-500 mt-3">
//               Please fill in the contact form to get in touch.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Tabs, Tab } from "./components/TabComponent";

// interface LocationData {
//   address: string;
//   phone: string;
//   mapUrl: string;
// }

// const Page: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<LocationData>({
//     address: "Loading...",
//     phone: "Loading...",
//     mapUrl: "",
//   });
//   const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
//     {}
//   );
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const apiHost = process.env.NEXT_PUBLIC_API_HOST;
//     const query = encodeURIComponent('*[ _type == "contactPage"]');

//     fetch(apiHost + query)
//       .then((res) => res.json())
//       .then((data) => {
//         const fetchedLocations = data.result.reduce((acc: any, item: any) => {
//           acc[item.branchName] = {
//             address: item.branchAddress,
//             phone: item.branchMobNo[0]?.mobNum || "N/A",
//             mapUrl: item.branchLocation,
//           };
//           return acc;
//         }, {});
//         setLocations(fetchedLocations);

//         // Set default location if available
//         if (Object.keys(fetchedLocations).length > 0) {
//           const firstLocation = Object.keys(fetchedLocations)[0];
//           setCurrentLocation(fetchedLocations[firstLocation]);
//         }
//       })
//       .finally(() => setIsFetching(false));
//   }, []);

//   const handleLocationChange = (location: string) => {
//     const selectedLocation = locations[location];
//     if (selectedLocation) {
//       setCurrentLocation(selectedLocation);
//     }
//   };

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
//           {/* Left Column */}
//           <div className="md:w-2/3 w-full flex flex-col">
//             {/* Tabs Section */}
//             <Tabs>
//               {Object.keys(locations).map((label) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   onClick={() => handleLocationChange(label)}
//                 >
//                   {/* Content inside tabs can be optional */}
//                 </Tab>
//               ))}
//             </Tabs>

//             {/* Map Section */}
//             <div
//               className={`bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px] ${
//                 isFetching ? "shimmer" : ""
//               }`}
//             >
//               {!isFetching ? (
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   className="absolute inset-0 w-full h-full"
//                   title="map"
//                   src={currentLocation.mapUrl}
//                   style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//                 ></iframe>
//               ) : (
//                 <div className="h-full w-full bg-gray-300"></div>
//               )}
//               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div className="lg:w-1/2 px-6">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p className="mt-1">{currentLocation.address}</p>
//                 </div>
//                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     PHONE
//                   </h2>
//                   <p className="leading-relaxed">{currentLocation.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>
//             <p className="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "./components/TabComponent";

interface LocationData {
  address: string;
  phone: string;
  mapUrl: string;
}

const Page: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationData>({
    address: "Loading...",
    phone: "Loading...",
    mapUrl: "",
  });
  const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
    {}
  );
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const apiHost = process.env.NEXT_PUBLIC_API_HOST;
    const query = encodeURIComponent('*[ _type == "contactPage"]');

    fetch(apiHost + query)
      .then((res) => res.json())
      .then((data) => {
        const fetchedLocations = data.result.reduce((acc: any, item: any) => {
          acc[item.branchName] = {
            address: item.branchAddress,
            phone: item.branchMobNo[0]?.mobNum || "N/A",
            mapUrl: item.branchLocation,
          };
          return acc;
        }, {});
        setLocations(fetchedLocations);

        if (Object.keys(fetchedLocations).length > 0) {
          const firstLocation = Object.keys(fetchedLocations)[0];
          setCurrentLocation(fetchedLocations[firstLocation]);
        }
      })
      .finally(() => setIsFetching(false));
  }, []);

  const handleLocationChange = (location: string) => {
    const selectedLocation = locations[location];
    if (selectedLocation) {
      setCurrentLocation(selectedLocation);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
          {/* Left Column */}
          <div className="md:w-2/3 w-full flex flex-col">
            {/* Tabs Section */}
            <Tabs>
              {Object.keys(locations).map((label) => (
                <Tab
                  key={label}
                  label={label}
                  onClick={() => handleLocationChange(label)}
                >
                  {/* Content inside tabs can be optional */}
                </Tab>
              ))}
            </Tabs>

            {/* Map Section */}
            <div
              className={`bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px] ${
                isFetching ? "shimmer" : ""
              }`}
            >
              {!isFetching ? (
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  title="map"
                  src={currentLocation.mapUrl}
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                ></iframe>
              ) : (
                <div className="h-full w-full bg-gray-300"></div>
              )}
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">{currentLocation.address}</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">{currentLocation.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <h2 className="text-blue-800 font-semibold text-4xl mb-1 title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please provide your details below:
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-full">
                <label
                  htmlFor="course"
                  className="leading-7 text-sm text-gray-600"
                >
                  Course / Job Interested
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                  <option value="course4">Course 4</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="residentCountry"
                  className="leading-7 text-sm text-gray-600"
                >
                  Resident Country
                </label>
                <select
                  id="residentCountry"
                  name="residentCountry"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                </select>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-full">
                <label
                  htmlFor="studyCountry"
                  className="leading-7 text-sm text-gray-600"
                >
                  Study / Job Country
                </label>
                <select
                  id="studyCountry"
                  name="studyCountry"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="state"
                  className="leading-7 text-sm text-gray-600"
                >
                  State / Province
                </label>
                <select
                  id="state"
                  name="state"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                  <option value="state4">State 4</option>
                </select>
              </div>
            </div>
            <button className="text-white bg-blue-800 border-0 py-2 mt-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
