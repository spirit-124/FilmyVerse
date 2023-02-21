import { async } from "@firebase/util";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { moviesRef } from "../firebase/firebase";
import swal from "sweetalert";

const AddMovie = () => {
  const [form, setform] = useState({
    name: "",
    year: "",
    director: "",
    genre: "",
    rating: "",
    Image: "",
  });

  const [loading, setLoading] = useState(false);
  const addMovie = async () => {
    setLoading(true);
    await addDoc(moviesRef, form);
    swal({
      title: "Success!",
      icon: "success",
      buttons: "false",
      timer: 3000,
    });
  };
  setLoading(false);
  return (
    <div class="flex items-center justify-center p-12 ">
      <div class="mx-auto w-full max-w-[550px] bg-black">
        <form
          class="py-6 px-9"
          action="https://formbold.com/s/FORM_ID"
          method="POST"
        >
          <div class="mb-5">
            <label for="name" class="mb-3 block  font-bold text-3xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={(e) => setform({ ...form, name: e.target.value })}
              placeholder="Movie Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="name" class="mb-3 block  font-bold text-3xl">
              Description
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.year}
              onChange={(e) => setform({ ...form, year: e.target.value })}
              placeholder="Movie Description"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="name" class="mb-3 block  font-bold text-3xl">
              Year
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.year}
              onChange={(e) => setform({ ...form, year: e.target.value })}
              placeholder="Released year"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-6 pt-4">
            <label class="mb-3 block  font-bold text-3xl">Upload Image</label>

            <div class="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                value={form.Image}
                onChange={(e) => setform({ ...form, Image: e.target.value })}
                class="sr-only"
              />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold ">
                    Drop Image here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium ">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <button
              onClick={addMovie}
              class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none justify-center
             flex"
            >
              {loading ? <TailSpin /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
