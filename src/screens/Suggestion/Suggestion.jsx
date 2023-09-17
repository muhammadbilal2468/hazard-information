import React, { useState } from "react";
import { targetImg } from "../../img";

const Suggestion = () => {
  const [observation, setObservation] = useState("");
  const [corrective, setCorrective] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const onBack = () => {
    window.history.back();
  };

  const onSubmit = () => {
    alert("Berhasil");
  };

  console.log(observation);
  console.log(corrective);
  console.log(recommendation);

  return (
    <div>
      <form>
        <button
          type="button"
          onClick={onBack}
          class="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Kembali
        </button>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-7">
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Hasil Pengamatan
            </label>
            <input
              type="text"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="John"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tindakan Perbaikan Langsung (isi jika telah dilakukan)
            </label>
            <input
              type="text"
              value={corrective}
              onChange={(e) => setCorrective(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="John"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rekomendasi/Masukan Perbaikan
            </label>
            <input
              type="text"
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="John"
              required
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center ">
            <p>Safety Yes! Accident No!! PT CPM is the Best !!!</p>
            <img src={targetImg} alt="" />
          </div>
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="text-white font-semibold bg-yellow-300  hover:bg-yellow-400 w-full rounded-lg py-2"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
