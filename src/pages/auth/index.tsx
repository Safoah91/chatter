import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface PropsType {
  children: JSX.Element;
}

export default class AuthLayout extends Component<PropsType, {}> {
  render() {
    return (
      <>
        <main className="h-screen w-full flex relative">
          <section id="authLayout" className="sm:hidden md:block md:w-2/6">
            <div
              id="overlay"
              className="px-9 h-screen flex flex-col justify-center"
            >
              <h1 className="text-5xl text-white text-center font-bold">
                CHATTER
              </h1>
              <p className="text-lg text-white mt-6">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </p>
            </div>
          </section>
          <section className="md:w-4/6 md:pl-48 md:pr-28 pt-8 overflow-x-hidden">
            {/* <div className="-ml-36 flex gap-3 justify-center items-center"> */}
            <div className="w-0 -ml-36">
              <Link to="/">
                <BsArrowLeft
                  size={40}
                  className="rounded-full border bg-[#D6D1F833] p-3 flex gap-1 justify-center items-center hover:cursor-pointer hover:bg-[#D6D1F866] transition-all duration-300"
                />
              </Link>
              {/* <span className="text-xs">Back</span> */}
            </div>
            <div className="">{this.props.children}</div>
          </section>
        </main>
      </>
    );
  }
}
