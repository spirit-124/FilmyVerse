import React from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
// import { moviesRef } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { Bars } from "react-loader-spinner";
import Review from "./Review";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    year: "",
    rating: 0,
    rated: 0,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      // setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      // setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 mt-4 w-full justify-center">
      {loading ? (
        <div className=" w-full flex h-screen justify-center items-center">
          <Bars height={35} color="white" />
        </div>
      ) : (
        <>
          <img
            className="h-96 block top-24 md:sticky"
            src={data.image}
            alt=" image"
          />
          <div className=" ml-0 w-full md:ml-4 md:w-1/2">
            <h1 className="text-gray-400  text-4xl font-bold ">
              {data.title} <span className="text-xl  ">{`(${data.year})`}</span>
            </h1>
            <ReactStars
              className="mt-1"
              count={5}
              value={data.rating / data.rated}
              edit={false}
              size={20}
            />
            <p className="mt-3  ">{data.description}</p>

            <Review id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
