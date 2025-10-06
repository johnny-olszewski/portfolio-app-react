import React from "react";

const ContactComponent = () => {
  return (
    <div className="flex flex-col w-full min-h-[20vh] bg-lime-600/20 items-center justify-center">
      <div className="flex flex-col w-1/2 gap-4">
        <h2 className="flex text-5xl font-semibold border-gray-50 border-b-4 pb-1 w-fit">
          reach out
        </h2>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-row w-full gap-4">
            <input
              className="flex-1 bg-gray-50 rounded-md p-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="flex-1 bg-gray-50 rounded-md p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-row w-full">
            <textarea
              className="flex-1 resize-none bg-gray-50 rounded-md p-2"
              placeholder="Message"
              rows={4}
            />
          </div>
          <button className="bg-lime-600 text-white self-end rounded-md py-2 px-4 w-fit">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
