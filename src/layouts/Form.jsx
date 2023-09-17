import React from "react";
import { Outlet } from "react-router";

const Form = () => {
  return (
    <div className="flex justify-center min-h-screen w-full py-5 px-5 bg-slate-200">
      <div className="w-3/6 border-2 border-solid border-yellow-300 border-t-8 rounded-xl shadow-xl bg-white p-7">
        <h3 className="text-3xl font-semibold mb-10">
          HAZARD INFORMATION AND SUGGESTION (HIAS) (Saran dan Informasi Bahaya)
        </h3>
        <Outlet />
      </div>
    </div>
  );
};

export default Form;
