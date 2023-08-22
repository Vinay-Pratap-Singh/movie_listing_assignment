"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { createList } from "@/redux/listsSlice";

const Lists = () => {
  const dispatch = useAppDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [createListData, setCreateListData] = useState({
    name: "",
    description: "",
    language: "en",
  });

  // function to handle create list
  const handleCreateList = () => {
    if (
      !createListData?.description ||
      !createListData?.language ||
      !createListData?.name
    ) {
      toast.error("All fields are mandatory");
      return;
    }
    toast.error("Logic not complete");
    // dispatch(createList(createListData));
  };

  return (
    <div className="m-5">
      <h1 className="text-center text-2xl font-bold">
        Welcome to the <span className="text-teal-500">Movies List</span> page
      </h1>

      {/* button for adding new list */}
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-fit bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white absolute right-10 top-5"
        >
          Create List
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900 w-full text-center"
                    >
                      Create new list
                    </Dialog.Title>
                    <div className="mt-2 w-full space-y-2">
                      <form className="flex flex-col items-center gap-2 w-full">
                        <div className="w-full flex flex-col gap-1">
                          <label
                            htmlFor="name"
                            className="flex flex-col gap-1 font-semibold"
                          >
                            Name
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="List name"
                              required
                              minLength={3}
                              className="py-1 px-2"
                              onChange={(event) => {
                                const { name, value } = event.target;
                                setCreateListData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }));
                              }}
                            />
                          </label>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                          <label
                            htmlFor="description"
                            className="flex flex-col gap-1 font-semibold"
                          >
                            Description
                            <textarea
                              className="w-full resize-none h-32 py-1 px-2"
                              name="description"
                              id="description"
                              required
                              minLength={20}
                              placeholder="Description"
                              onChange={(event) => {
                                const { name, value } = event.target;
                                setCreateListData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }));
                              }}
                            />
                          </label>
                        </div>

                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
                          onClick={handleCreateList}
                        >
                          Create
                        </button>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Lists;
