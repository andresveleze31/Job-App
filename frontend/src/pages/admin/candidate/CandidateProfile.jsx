import React, { useEffect, useState } from "react";
import Map from "../../../components/Map";
import axios from "axios";
import useJobtex from "../../../hooks/useJobtex";

function CandidateProfile() {
  const [networksNumber, setNetworksNumber] = useState(0);

  const {
    genders,
    salaryTypes,
    qualifications,
    categories,
    languages,
    locations,
    charging,
    socials
  } = useJobtex();

  return (
    <main className="mb-[5rem] ">
      <h2 className="font-bold text-[2.5rem] ">
        <span className="text-primary font-black pr-[1rem] ">|</span>Profile
      </h2>

      <div className="bg-white p-[3rem]">
        <h3 className="font-bold">General</h3>

        <form>
          <div className="border-b pb-[4rem] mb-[2rem] border-b-gray-300 ">
            <p
              className="font-semibold mb-[2rem] text-[1.4rem] "
              htmlFor="image"
            >
              Featured Image
            </p>
            <label
              className="py-[1rem]  px-[2rem] border bg-primary text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-primary rounded-xl cursor-pointer"
              htmlFor="image"
            >
              Browse
            </label>
            <input className="hidden" type="file" id="image" />
          </div>

          <h3 className="font-bold">Information</h3>

          <div className="grid grid-cols-2 gap-[3rem] border-b pb-[4rem] border-b-gray-300">
            <div className="flex flex-col ">
              <label
                className="font-semibold m-0 mb-[1rem] text-[1.4rem]"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                placeholder="Your Full Name"
                id="fullname"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="text"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="date"
              >
                Date of Birth
              </label>
              <input
                placeholder="Your Full Name"
                id="date"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="date"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                id="number"
                placeholder="Enter Your Phone Number"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="number"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                id="email"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="email"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="gender"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Your Gender--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Your Gender--
                    </option>
                    {genders.map((gender) => (
                      <option key={gender._id} value={gender.gender}>
                        {gender.gender}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="age"
              >
                Age
              </label>
              <input
                id="age"
                placeholder="Enter Your Age"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="number"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="salary"
              >
                Salary
              </label>
              <input
                id="salary"
                placeholder="Enter Your Salary"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="number"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="salarytype"
              >
                Salary Type
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="salarytype"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Salary Type--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Salary Type--
                    </option>
                    {salaryTypes.map((salary) => (
                      <option key={salary._id} value={salary.salaryType}>
                        {salary.salaryType}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="qualification"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Qualification--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Qualification--
                    </option>
                    {qualifications.map((qua) => (
                      <option key={qua._id} value={qua.qualification}>
                        {qua.qualification}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="experience"
              >
                Experience Time
              </label>
              <input
                id="experience"
                placeholder="Enter Your Years Of Experience"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="number"
              />
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="categorie"
              >
                Categorie
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="categorie"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Categorie--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Categorie--
                    </option>
                    {categories.map((cate) => (
                      <option key={cate._id} value={cate.categorie}>
                        {cate.categorie}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="language"
              >
                Language
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="language"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Language--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Language--
                    </option>
                    {languages.map((lang) => (
                      <option key={lang._id} value={lang.language}>
                        {lang.language}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col ">
              <label
                className="font-semibold m-0 mb-[1rem] text-[1.4rem]"
                htmlFor="jobtitle"
              >
                Job Title
              </label>
              <input
                placeholder="Your Job Title"
                id="jobtitle"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="text"
              />
            </div>
          </div>

          <div className="mt-[2rem] border-b pb-[4rem] border-b-gray-300">
            <h3 className="font-bold">About Me</h3>
            <textarea
              placeholder="Give a resume about you"
              className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="mt-[2rem] border-b pb-[4rem] border-b-gray-300">
            <h3 className="font-bold">Social Network</h3>

            {Array.from({ length: networksNumber }, (_, index) => (
              <div key={index}>
                <details className="bg-gray-100 mt-[2rem] w-full py-[1.3rem] px-[2rem]  rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white">
                  <summary>Network {index + 1} </summary>
                  <div>
                    <div className="flex gap-[5rem] mt-[2rem] items-center">
                      <label
                        className="font-semibold m-0 text-[1.4rem]"
                        htmlFor="network"
                      >
                        Network
                      </label>
                      <select
                        className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                        id="language"
                      >
                        {charging ? (
                          <option disabled selected value="">
                            --Select Location--
                          </option>
                        ) : (
                          <>
                            <option disabled selected value="">
                              --Select Location--
                            </option>
                            {socials.map((social) => (
                              <option
                                key={social._id}
                                value={social.social_name}
                              >
                                {social.social_name}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </details>
              </div>
            ))}

            <button
              onClick={(e) => {
                e.preventDefault();
                setNetworksNumber(networksNumber + 1);
              }}
              className="py-[1rem] mt-[2rem]  px-[2rem] border bg-primary text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-primary rounded-xl cursor-pointer"
            >
              Add Network
            </button>
          </div>

          <div className="mt-[2rem] border-b pb-[4rem] border-b-gray-300">
            <h3 className="font-bold">Contact Information</h3>

            <div className="flex flex-col ">
              <label
                className="font-semibold m-0 mb-[1rem] text-[1.4rem]"
                htmlFor="address"
              >
                Friendly Address
              </label>
              <input
                placeholder="Give An Address"
                id="address"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="text"
              />
            </div>

            <div className="flex flex-col mt-[2rem] ">
              <label
                className="font-semibold m-0 mb-[1rem] text-[1.4rem]"
                htmlFor="video"
              >
                Introduction Video URL
              </label>
              <input
                placeholder="Youtube Link"
                id="video"
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                type="text"
              />
            </div>

            <div className="flex flex-col mt-[2rem] ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="location"
              >
                Location
              </label>
              <select
                className="bg-gray-100 w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                id="location"
              >
                {charging ? (
                  <option disabled selected value="">
                    --Select Location--
                  </option>
                ) : (
                  <>
                    <option disabled selected value="">
                      --Select Location--
                    </option>
                    {locations.map((loca) => (
                      <option key={loca._id} value={loca.location}>
                        {loca.location}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col mt-[2rem] ">
              <label
                className="font-semibold mb-[1rem] text-[1.4rem]"
                htmlFor="map"
              >
                Map
              </label>

              <Map lat={4.6097} long={-74.0817} />
            </div>

            <div className="grid grid-cols-2 mt-[2rem] gap-[3rem] ">
              <div>
                <label
                  className="font-semibold mb-[1rem] text-[1.4rem]"
                  htmlFor="latitude"
                >
                  Latitude
                </label>

                <input
                  placeholder="Latitude"
                  id="latitude"
                  className="bg-gray-100 mt-[1rem] w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                  type="number"
                />
              </div>
              <div>
                <label
                  className="font-semibold mb-[1rem] text-[1.4rem]"
                  htmlFor="longitude"
                >
                  Longitude
                </label>

                <input
                  placeholder="Longitude"
                  id="longitude"
                  className="bg-gray-100 mt-[1rem] w-full py-[1.3rem] px-[2rem] border rounded-lg focus:outline-primary  transition-all duration-300 focus:bg-white"
                  type="number"
                />
              </div>
            </div>
          </div>

          <input
            className="py-[1rem] mt-[2rem]  px-[2rem] border bg-primary text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-primary rounded-xl cursor-pointer"
            type="submit"
            value={"Save Profile"}
          />
        </form>
      </div>
    </main>
  );
}

export default CandidateProfile;
