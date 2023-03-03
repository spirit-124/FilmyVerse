import { ClassNames } from "@emotion/react";
import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { TailSpin, ThreeDots } from "react-loader-spinner";
// import { Audio } from "react-loader-spinner";s
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setdata((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="row flex gap-8 flex-wrap justify-center items-center align-baseline py-10">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <ThreeDots className="" height={80} color="white" />
          </div>
        ) : (
          data.map((e, i) => {
            return (
              <Link to={`/detail/${e.id}`}>
                <div className="col-md-12" key={i}>
                  <div className="card shadow-lg animate-pulse hover/:animate-none ">
                    <div className="card-body bg-slate-900 px-4 py-2  w-72   flex justify-center items-start flex-col gap-2 rounded-xl">
                      <img
                        className="    h-72 w-72 "
                        src={e.image}
                        alt=" Avengers-Endgame"
                      />
                      <h3 className="card-title text-lg text-gray-500">
                        Name: <span className="text-white"> {e.title}</span>
                      </h3>
                      <p className="card-text text-lg text-gray-500 flex gap-2 items-center">
                        Rating:{" "}
                        <span className="">
                          <ReactStars
                            count={5}
                            value={e.rating / e.rated}
                            edit={false}
                            size={20}
                          />
                        </span>
                      </p>
                      <p className="card-text text-lg text-gray-500">
                        Year: <span className="text-white"> {e.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cards;
