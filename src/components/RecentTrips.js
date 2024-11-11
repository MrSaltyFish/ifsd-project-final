import "../components/RecentTripsStyles.css";
import img1 from "../asserts/5.jpg";
import img2 from "../asserts/6.jpg";
import img3 from "../asserts/8.jpg";

import React from "react";
import RecentTripsData from "./RecentTripsData";

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Find out your recent trips here!</p>

      <div className="trip-card">
        <RecentTripsData
          tImg={img1}
          heading="Bangkok, Thailand"
          text="Bangkok has a rich history dating back to the 15th century, with the city being founded as a small trading post. Over time, it grew to become the capital of Siam (Thailand’s former name) in 1782. The city is home to numerous iconic temples, palaces, and museums, showcasing a blend of Thai, Chinese, and European architectural styles. Notable landmarks include the Grand Palace, Wat Phra Kaew, Wat Pho, and Wat Arun."
        />
        <RecentTripsData
          tImg={img2}
          heading="Rome, Italy"
          text="Rome, the Eternal City, is the capital of Italy and a treasure trove of ancient history, art, architecture, and culture. Located in the central part of the Italian peninsula, on the Tiber River, Rome is home to approximately 2.8 million residents.

"
        />
        <RecentTripsData
          tImg={img3}
          heading="Andaman and Nicobar Islands"
          text="The Andaman and Nicobar Islands are a union territory of India, comprising 836 islands, of which only 31 are inhabited. The islands are grouped into two main clusters: the northern Andaman Islands and the southern Nicobar Islands, separated by a 150 km wide channel."
        />
      </div>
    </div>
  );
};

export default RecentTrips;
