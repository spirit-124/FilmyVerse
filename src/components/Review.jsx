import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef } from "../firebase/firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  const sendReview = async () => {
    try {
      await addDoc(reviewsRef, {});
      swal({
        title: "review sent",
        icon: "success",
        button: false,
        timer: 3000,
      });
    } catch (err) {
      swal({
        title: err.message,
        icon: "error",
        button: false,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <div className=" mt-4 border-t-2 border-gray-600 w-full">
        <ReactStars
          className="mt-1"
          count={5}
          size={20}
          onChange={(rate) => setRating(rate)}
        />
        <input
          type="text"
          placeholder="Share your thoughts...."
          className="w-full header outline-none p-2 bg-slate-900 rounded-lg"
        />
        <button className="w-full p-2 bg-green-700 mt-2 flex justify-center ">
          {loading ? <TailSpin height={25} color="white" /> : "Share"}
        </button>
      </div>
    </>
  );
};

export default Review;
