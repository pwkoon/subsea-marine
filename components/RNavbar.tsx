import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Mail, Phone } from "lucide";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const navigation = [
  { name: "HOME", href: "#", current: true },
  { name: "ABOUT", href: "about", current: false },
  { name: "SERVICES", href: "services", current: false },
  { name: "PROJECTS", href: "projects", current: false },
  { name: "CONTACTS", href: "contacts", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RNavbar() {
  return (
    <>
      <Disclosure as="nav" className="relative bg-darkGrey text-yellow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <p className="text-2xl font-bold">SUBSEA MARINE</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-yellow"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 font-medium",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div
        className="
    @container
    bg-yellow
    p-4 @[900px]:p-10
    text-center
  "
      >
        <div className="grid grid-cols-1 @[900px]:grid-cols-4 gap-5">
          <div className="">
            <h1 className="text-3xl font-bold">SUBSEA MARINE</h1>
          </div>

          <div className="mx-auto pb-10">
            <h2 className="text-xl font-bold">Contact Us</h2>

            <div className="flex items-center gap-2 pt-5">
              <IoMdMail />
              <p>subseamarine@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>+60 12345678</p>
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <p>+60 12345678</p>
            </div>
          </div>

          <div className="mx-auto text-balance pb-10">
            <h2 className="text-xl font-bold">Business Operations</h2>
            <p className="pt-5 w-3/4 mx-auto">
              8.30am - 5.30pm (Open Daily except Saturday, Sunday & Public
              Holiday)
            </p>
          </div>

          <div className="mx-auto text-balance pb-10">
            <h2 className="text-xl font-bold">Office Address</h2>
            <p className="pt-5 w-3/4 mx-auto">
              somewhere somewhere somewhere somewhere somewhere somewhere
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
