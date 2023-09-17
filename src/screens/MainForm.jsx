import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MainForm = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [division, setDivision] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [category2, setCategory2] = useState("");

  const updateDateTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
    setCurrentDate(now.toLocaleDateString());
  };

  const navigate = useNavigate();

  useEffect(() => {
    updateDateTime();
  });

  const handleOptionChange = (e) => {
    setCategory(e.target.value);
  };
  const handleOptionChange2 = (e) => {
    setCategory2(e.target.value);
  };

  const onNext = () => {
    if (
      (category === "saran" && category2 === "kesehatan") ||
      (category === "saran" && category2 === "keselamatan") ||
      (category === "saran" && category2 === "lingkungan") ||
      (category === "saran" && category2 === "eksternal") ||
      (category === "saran" && category2 === "kapatuhan")
    ) {
      navigate("/form/saran");
    } else if (
      (category === "ketidaksesuaian" && category2 === "kesehatan") ||
      (category === "ketidaksesuaian" && category2 === "keselamatan") ||
      (category === "ketidaksesuaian" && category2 === "lingkungan")
    ) {
      navigate("/form/ketidaksesuaian");
    } else if (
      (category === "ketidaksesuaian" && category2 === "eksternal") ||
      (category === "ketidaksesuaian" && category2 === "kapatuhan")
    ) {
      navigate("/form/saran");
    }
  };

  console.log("category :", category);
  console.log("category2 :", category2);

  return (
    <div>
      <p className="text-yellow-400 font-bold">Tanggal : {currentDate}</p>
      <p className="text-yellow-400 font-bold">Waktu : {currentTime}</p>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-7">
          <div className="col-span-2">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="John"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nomor Induk Karyawan
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lokasi
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            >
              <option disabled hidden>
                Pilih Kantor
              </option>
              <option value="kantor">Kantor</option>
              <option value="kantin">Kantin</option>
              <option value="laundry">Laundry</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Jabatan
            </label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            >
              <option disabled hidden>
                Pilih Jabatan
              </option>
              <option value="ktt">KTT/CFO</option>
              <option value="manager">Manager/Superintendent</option>
              <option value="sepervisor">
                Supervisor/Foreman/Officer/Operator (Staff)
              </option>
              <option value="US">Foreman/Crew/Operator (Non Staff)</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Divisi
            </label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            >
              <option disabled hidden>
                Pilih Divisi
              </option>
              <option value="direksi">Direksi</option>
              <option value="ktt">KTT - GM - CFO</option>
              <option value="geo">GEO</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Perusahaan
            </label>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            >
              <option disabled hidden>
                Pilih Perusahaan
              </option>
              <option value="a">PT CPM</option>
              <option value="b">PT AKM</option>
              <option value="c">PT SSS</option>
            </select>
          </div>

          <div
            className={`flex items-center pl-4 border border-${
              category === "saran" ? "yellow" : "gray"
            }-400 rounded dark:border-gray-700`}
          >
            <input
              type="radio"
              value={"saran"}
              checked={setCategory === "saran"}
              onChange={handleOptionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Saran
            </label>
          </div>
          <div
            className={`flex items-center pl-4 border border-${
              category === "ketidaksesuaian" ? "yellow" : "gray"
            }-400 rounded dark:border-gray-700`}
          >
            <input
              type="radio"
              value={"ketidaksesuaian"}
              checked={setCategory === "ketidaksesuaian"}
              onChange={handleOptionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ketidaksesuaian
            </label>
          </div>
        </div>
        {category !== "" ? (
          <div className="flex flex-col gap-2 mb-5">
            <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Pilih Kategori informasi
            </label>
            <di
              className={`flex items-center pl-4 border border-${
                category2 === "kesehatan" ? "yellow" : "gray"
              }-400 rounded dark:border-gray-700`}
            >
              {" "}
              <input
                type="radio"
                value={"kesehatan"}
                checked={setCategory2 === "kesehatan"}
                onChange={handleOptionChange2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kesehatan
              </label>
            </di>
            <div
              className={`flex items-center pl-4 border border-${
                category2 === "keselamatan" ? "yellow" : "gray"
              }-400 rounded dark:border-gray-700`}
            >
              {" "}
              <input
                type="radio"
                value={"keselamatan"}
                checked={setCategory2 === "keselamatan"}
                onChange={handleOptionChange2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kesalamatan Kerja
              </label>
            </div>
            <div
              className={`flex items-center pl-4 border border-${
                category2 === "lingkungan" ? "yellow" : "gray"
              }-400 rounded dark:border-gray-700`}
            >
              {" "}
              <input
                type="radio"
                value={"lingkungan"}
                checked={setCategory2 === "lingkungan"}
                onChange={handleOptionChange2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lingkungan
              </label>
            </div>
            <div
              className={`flex items-center pl-4 border border-${
                category2 === "eksternal" ? "yellow" : "gray"
              }-400 rounded dark:border-gray-700`}
            >
              {" "}
              <input
                type="radio"
                value={"eksternal"}
                checked={setCategory2 === "eksternal"}
                onChange={handleOptionChange2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Eksternal
              </label>
            </div>
            <div
              className={`flex items-center pl-4 border border-${
                category2 === "kapatuhan" ? "yellow" : "gray"
              }-400 rounded dark:border-gray-700`}
            >
              {" "}
              <input
                type="radio"
                value={"kapatuhan"}
                checked={setCategory2 === "kapatuhan"}
                onChange={handleOptionChange2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kepatuhan
              </label>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <button
          type="submit"
          onClick={onNext}
          className="text-white font-semibold bg-yellow-300  hover:bg-yellow-400 w-full rounded-lg py-2"
        >
          Lanjut
        </button>
      </form>
    </div>
  );
};

export default MainForm;
