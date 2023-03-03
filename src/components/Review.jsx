import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db, moviesRef } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Review = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        mvoieid: id,
        name: "Bajrang",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });

      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });

      setForm("");
      setRating(0);
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
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setReviewLoading(true);
      let quer = query(moviesRef, where("moviesId", "==", id));
      const querysnapShot = await getDocs(quer);

      querysnapShot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <div className=" mt-4 border-t-2 border-gray-600 w-full">
        <ReactStars
          className="mt-1"
          count={5}
          value={rating}
          size={20}
          onChange={(rate) => setRating(rate)}
        />
        <input
          value={form}
          onChange={(e) => {
            setForm(e.target.value);
          }}
          type="text"
          placeholder="Share your thoughts...."
          className="w-full header outline-none p-2 bg-slate-900 rounded-lg"
        />
        <button
          onClick={sendReview}
          className="w-full p-2 bg-green-700 mt-2 flex justify-center "
        >
          {loading ? <TailSpin height={25} color="white" /> : "Share"}
        </button>
        {reviewLoading ? (
          <div className="mt-6 flex justify-center">
            <TailSpin height={25} color="white" />
          </div>
        ) : (
          <div className="">
            {data.map((e, i) => {
              return (
                <div className="" key={i}>
                  {e.thought}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
