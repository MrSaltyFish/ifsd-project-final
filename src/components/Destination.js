import "../components/DestinationStyles.css";
import img1 from "../asserts/1.jpg";
import img2 from "../asserts/8.jpg";
import img3 from "../asserts/3.jpg";
import img4 from "../asserts/4.jpg";

import React from "react";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destinations</h1>
      <p>Wondering what the Earth has to offer? We've got you</p>
      <DestinationData
        cName="first-des"
        heading="Unwind and Explore: Your Journey to Nature's Hidden Gems Awaits!"
        desciption="Welcome to your next adventure! Discover the beauty of nature as you explore stunning destinations filled with tranquility and charm. Imagine yourself by a vast lake, where the gentle ripples reflect the sky, and a solitary boat invites you to drift into the peaceful surroundings. Just a short distance away, find yourself at the edge of a serene beach, where the soft sand meets the cool waves in a perfect fusion of relaxation and wonder. Whether you're looking for a quiet escape or thrilling exploration, our travel packages offer something for everyone, tailored to make each journey memorable."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des revese"
        heading="Wander Beyond Boundaries: From Iconic Landmarks to Tranquil Escapes"
        desciption="From the grandeur of the Eiffel Tower to the calm embrace of a quiet lakeside, let us take you on a journey that blends iconic landmarks with serene getaways. Picture yourself standing in Paris, marveling at the timeless charm of the Eiffel Tower, then drifting away to a peaceful lake, where a lone boat rests upon tranquil waters, inviting you to escape the everyday. Our travel packages combine the vibrance of cityscapes with the calm of nature, creating the perfect balance for every traveler's dream adventure."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
