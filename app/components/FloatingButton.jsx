"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const FloatingButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        id="presentation-button"
        className="button-container flex items-center justify-center p-8  bg-transparent fixed bottom-0 z-[1000]"
      >
        <button
          onClick={openModal}
          className="button flex items-center justify-center p-8 bg-black text-white text-xl rounded-full hover:bg-white hover:text-black transition-all"
        >
          WATCH PRESENTATION
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full p-6 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl max-w-fit rounded-2xl">
                  <iframe
                    src="https://www.loom.com/embed/79712c3f77734dd2ae7f617c379663fb?sid=f566370d-d2b0-4436-868f-e173a386f4b4"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    className="responsive-iframe"
                  ></iframe>

                  <style jsx>{`
                    .responsive-iframe {
                      width: 100%;
                      height: 200px; /* Default height */
                    }

                    @media (min-width: 768px) {
                      /* For tablets and above */
                      .responsive-iframe {
                        width: 600px;
                        height: 400px; /* Default height */
                      }
                    }

                    @media (min-width: 1024px) {
                      /* For desktops and above */
                      .responsive-iframe {
                        width: 600px;
                        height: 400px; /* Default height */
                      }
                    }
                  `}</style>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FloatingButton;
