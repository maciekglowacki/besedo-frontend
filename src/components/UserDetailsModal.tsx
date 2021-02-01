import { ChangeEvent, useState } from 'react';
import { User } from '../types';

export type UserDetailsModalProps = {
  hideModal: () => void;
  currentUser: User | null;
  addUser: (user: User) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
};

//could add debounce on inputs and validation on form inputs values
//also create separate modals for adding and updating users
export const UserDetailsModal = ({ hideModal, currentUser, updateUser, addUser }: UserDetailsModalProps) => {
  const [user, setUser] = useState<User | null>(currentUser ?? ({ name: { first: '', last: '' }, picture: '' } as User));


  //could create separate onchanges for different properties
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (value && id) {
      if (user !== null) {
        id === 'picture' ? setUser({ ...user, [id]: value }) : setUser({ ...user, name: { ...user.name, [id]: value } });
      }
    }
  };

  return (
    <div className="fixed z-10 inset-0">
      <div className="block pt-4  px-4 pb-20  min-h-screen text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="inline-block align-middle h-screen"></span>
        <form
          className="inline-block align-middle max-w-lg w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
          role="dialog"
          onSubmit={() => {
            //does not look cool
            if (user !== null) {
              if (currentUser !== null) {
                updateUser(user);
              } else {
                addUser(user);
              }
            }
          }}
        >
          <div className="flex justify-center bg-white p-8">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-gray-900  leading-6">Change user details</h2>
              <div className="flex flex-col mb-6">
                <label className="mb-2 font-bold text-xl" htmlFor="first">
                  Name
                </label>
                <input
                  className="py-2 px-3 w-full border  rounded shadow-md focus:outline-none focus:border-transparent focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="first"
                  type="text"
                  placeholder="Name"
                  defaultValue={currentUser?.name.first}
                  onChange={onChange}
                ></input>
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-xl font-bold mb-2" htmlFor="last">
                  Last name
                </label>
                <input
                  className="py-2 px-3 w-full border rounded shadow-md focus:outline-none focus:border-transparent focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="last"
                  type="text"
                  placeholder="LastName"
                  defaultValue={currentUser?.name.last}
                  onChange={onChange}
                ></input>
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-xl font-bold mb-2" htmlFor="picture">
                  Picture URL
                </label>
                <input
                  className="py-2 px-3 w-full border rounded shadow-md focus:outline-none focus:border-transparent focus:ring-2  focus:ring-pink-300  focus:ring-opacity-75"
                  id="picture"
                  type="text"
                  placeholder="Picture URL"
                  defaultValue={currentUser?.picture}
                  onChange={onChange}
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
        </form>
      </div>
    </div>
  );
};
