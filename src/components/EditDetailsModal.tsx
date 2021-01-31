export type EditDetailsModalProps = {
  hideModal: () => void;
};

export const EditDetailsModal = ({ hideModal }: EditDetailsModalProps) => {
  return (
    <div className="fixed z-10 inset-0">
      <div className="block pt-4  px-4 pb-20  min-h-screen text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="inline-block align-middle h-screen"></span>
        <div className="inline-block align-middle max-w-lg w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all" role="dialog">
          <div className="flex justify-center bg-white p-8">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-gray-900  leading-6">Change user details</h2>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-xl" htmlFor="name">
                  Name
                </label>
                <input
                  className="py-2 px-3 w-full border rounded focus:outline-none focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="username"
                  type="text"
                  placeholder="Name"
                ></input>
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-xl font-bold mb-2" htmlFor="lastname">
                  Last name
                </label>
                <input
                  className="py-2 px-3 w-full border rounded focus:outline-none focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="lastname"
                  type="text"
                  placeholder="LastName"
                ></input>
              </div>
              <div className="flex flex-col mb-4 ">
                <label className="text-xl font-bold mb-2" htmlFor="picture">
                  Picture URL
                </label>
                <input
                  className="py-2 px-3 w-full border rounded focus:outline-none focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="picture"
                  type="text"
                  placeholder="Picture URL"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-end px-4 py-4 bg-gray-50">
            <button
              type="button"
              className="px-4 py-2  bg-white  text-gray-700 rounded-lg shadow-md  border border-gray-300    hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300  focus:ring-opacity-75"
              onClick={hideModal}
            >
              Cancel
            </button>
            <button className="ml-8 mr-6 py-2 px-6  bg-pink-400 text-white rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-pink-300 focus:ring-opacity-75">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
