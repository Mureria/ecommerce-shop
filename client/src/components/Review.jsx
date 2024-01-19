import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reviews`);
        setReviews(response.data); // Assuming the API response is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {/* Review */}
      <div className="bg-slate-100 mt-4 p-2 rounded">
        <h1 id="Reviews" className="font-bold text-lg pb-6">
          Customer Reviews
        </h1>
        <div className="flex flex-col md:flex-row items-start bg-white px-4 py-2 gap-5 md:gap-20">
          <div className=" px-20 py-8 border border-r">
            <p className="text-5xl text-orange-400 mb-3">
              {reviews.length === 0 ? (
                <div>
                  0<span className="text-black/50 text-5xl">/5</span>
                </div>
              ) : (
                <div>
                  {reviews.length}
                  <span className="text-black/50 text-5xl">/5</span>
                </div>
              )}
            </p>
            <p className="tracking-widest flex justify-center md:justify-start text-orange-500">
              <FaStar />
              <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center flex-1">
                <div className="text-xl font-medium">5</div>
                <div className=" text-orange-500">
                  <FaStar />
                </div>
                <div className="text-lg font-normal font-mono text-[#75757a]">
                  234
                </div>
              </div>
              <div>-------</div>
            </div>
          </div>
        </div>

        <div className=" bg-white mt-4 px-6 md:px-14 py-2 text-lg">
          <div className=" border-b py-4 ">
            {reviews.length === 0 ? (
              <p className="flex justify-center items-center text-xl text-slate-300">
                No reviews yet
              </p>
            ) : (
              <ul>
                {reviews.map((review) => (
                  <li key={review._id}>
                    <p className="md:text-xl text-base">
                      {review.user.firstName}
                    </p>
                    <p className="flex items-center py-1 text-orange-400">
                      {" "}
                      <span className="mr-1">{review.rating}</span> <FaStar />
                    </p>
                    <p className="py-2 text-base text-slate-700">
                      {review.comment}
                    </p>
                    <p className="text-sm text-slate-400">{review.createdAt}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
