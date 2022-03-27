import React from "react";
import MERN from "../Images/mern.jpg";
import ReactNative from "../Images/react-native.jpg";
import MongoDB from "../Images/mongoDB.jpg";
import Node from "../Images/node.jpg";
import JavaScript from "../Images/javascript.jpg";
import Git from "../Images/git.jpg";
import VsCode from "../Images/vs-code.png";
import BootStrap from "../Images/bootstrap.png";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div
          className="flex flex-col text-center w-full mb-20"
          style={{ paddingTop: 80 }}
        >
          <h1
            className="text-2xl font-medium title-font mb-4 text-gray-900"
            style={{
              fontWeight: "bold",
              fontSize: 50,
              fontFamily: '"Times New Roman"',
            }}
          >
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="mern-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={MERN}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  MERN Stack Developer
                </h2>
                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="react-native-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={ReactNative}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  React Native Developer
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="mongoDB-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={MongoDB}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  MongoDB
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="node-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={Node}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Node.Js
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
        </div>
        {/*blocks division */}
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="javascript-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={JavaScript}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Javascript
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="git-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={Git}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Git
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="vscode-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={VsCode}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  VS Code
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="bootstrap-logo"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={BootStrap}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Bootstrap 4
                </h2>

                <span className="inline-flex"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
