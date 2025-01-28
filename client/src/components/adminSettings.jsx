import React from "react";

const AdminSettings = () => {
  return (
    <form className="p-4 w-full">
         <p className="text-xl tracking-wide font-semibold border-b-2 w-full py-2">Settings</p>
      <div className="flex flex-col gap-1 pt-2 mt-6">
        <span className="text-neutral-900">Site Name</span>
        <input
          type="text"
          className="w-[320px] h-[40px]  pl-2 rounded-lg border outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 pt-2">
        <span className="text-neutral-900">Support Email</span>
        <input
          type="text"
          className="w-[320px] h-[40px]  pl-2 rounded-lg border outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 pt-2">
        <span className="text-neutral-900">Monthly Order Goal</span>
        <input
          type="text"
          className="w-[320px] h-[40px]  pl-2 rounded-lg border outline-none"
        />
      </div>
      <button className="block mt-10 text-start w-[140px] bg-black text-white px-6 py-3 rounded-lg text-sm">
        Save Product
      </button>
    </form>
  );
};

export default AdminSettings;
