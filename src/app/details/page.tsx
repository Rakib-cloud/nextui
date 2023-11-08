import { Button, Card, Divider, Image, Progress } from "@nextui-org/react";
import React from "react";
import { BsCurrencyDollar, BsShieldCheck } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar, AiOutlineFilePdf, AiFillStar } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { FcInvite } from "react-icons/fc";
import { LiaTelegram } from "react-icons/lia";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

export default function page() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-8 py-8">
        <div className="lg:col-span-8 col-span-12">
          <Card>
            <Image
              isZoomed
              height={50}
              width={1200}
              alt="NextUI Fruit Image with Zoom"
              src="https://civi.uxper.co/wp-content/uploads/2022/10/company-13-770x250.webp"
            />

            <div className="p-[32px]">
              <div className="gird grid-cols-12">
                <div className="col-span-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ">
                  <Image
                    src="https://civi.uxper.co/wp-content/uploads/2022/10/peter-parker-1.webp"
                    alt="Profile Image"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                </div>
                
                <div className="col-span-6">
                  <h1 className="font-bold text-2xl">Peter Packer</h1>
                  <div className="grid lg:grid-cols-4 grid-cols-2 ">
                    <span className="text-teal-400">Fullstack Developer</span>
                    <span className="flex items-center  gap-1">
                      <CiLocationOn size={19} />
                      chicago
                    </span>
                    <span className="flex items-center gap-1">
                      <BsCurrencyDollar size={19} />
                      1200/month
                    </span>
                    <span className="flex items-center  gap-1">
                      <AiOutlineStar size={19} className="text-teal-400 " />
                      4.5(2 Reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-wrap lg:flex items-center lg:gap-2 mt-5">
                <Button
                  size="lg"
                  className="border border-teal-300 bg-white hover:bg-teal-300 mb-2 lg:mb-0 lg:mr-2 "
                >
                  <RiUserFollowLine size={19} /> Follow
                </Button>
                <Button
                  size="lg"
                  className="border border-teal-300 bg-white hover:bg-teal-300 mb-2 lg:mb-0 lg:mr-2 ml-1"
                >
                  <AiOutlineFilePdf size={19} /> Save to PDF
                </Button>
                <Button
                  size="lg"
                  className="border border-teal-300 bg-white hover-bg-teal-300 mb-2 lg:mb-0 lg:mr-2"
                >
                  <FcInvite size={19} /> Invite
                </Button>
                <Button
                  size="lg"
                  className="border border-teal-300 bg-white hover:bg-teal-300 ml-1 lg:ml-0"
                >
                  <LiaTelegram size={19} /> Message
                </Button>
              </div>

              <Divider className="my-4" />
              <div className="mt-5">
                <h1 className="font-bold text-2xl">About me</h1>
                <p className="mt-3 text-base text-gray-500">
                  I am an experienced Filemaker Pro Developer based in the Los
                  Angeles metropolitan area. I have worked with Filemaker since
                  version 3.5. Through out the years, I have created many
                  solutions using the Filemaker Pro platform for my employers. I
                  can create your Filemaker Pro solution from scratch or by
                  modifying an existing template. I can create the front-end UI,
                  as well as the tables, table relationships, and scripts in the
                  back-end. If you need your solution to be hosted on a
                  Filemaker Server or accessed via Filemaker Go, I can assist
                  you with that as well. I have many satisfied customers here
                  that I have helped in creating their unique Filemaker Pro
                  solutions. Please take a look at my feedback. I am confident I
                  will be able to assist you with your Filemaker Pro needs. I am
                  flexible to work with and I will work within your budget.
                  Thank you in advance for your consideration.
                </p>
              </div>
              <Divider className="my-4" />

              <div className="mt-5">
                <h1 className="font-bold text-2xl">Photos</h1>
                <div className="mt-3 flex items-center gap-2">
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Skills</h1>
              <div className="flex gap-4 items-center mt-3">
                <Button size="sm" className="bg-gray-200">
                  React js
                </Button>
                <Button size="sm" className="bg-gray-200">
                  Typescript
                </Button>
                <Button size="sm" className="bg-gray-200">
                  Node js
                </Button>
              </div>
            </div>
          </Card>
          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Work Experience</h1>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-gray-400 my-2"></div>
                <div>
                  <h4>Web Designer</h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">Alpabe Corporation</span>
                    <span>2020-04-01 -- 2023-12-31</span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-gray-400 my-2"></div>
                <div>
                  <h4>Web Designer</h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">Alpabe Corporation</span>
                    <span>2020-04-01 -- 2023-12-31</span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Education</h1>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-yellow-500 my-2"></div>
                <div>
                  <h4>New York University</h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">Master's</span>
                    <span>2020-04-01 -- 2023-12-31</span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-yellow-500 my-2"></div>
                <div>
                  <h4>New York University</h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">Master's</span>
                    <span>2020-04-01 -- 2023-12-31</span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Projects</h1>

              <div className="flex-wrap lg:flex gap-3">
                <div className="relative group mt-3">
                  <div className="w-[330px] cursor-pointer h-64 rounded-lg overflow-hidden transition-transform transform-gpu hover:scale-105">
                    <Image
                      src="https://civi.uxper.co/wp-content/uploads/2022/10/project-01.webp"
                      alt="User"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-0  w-full  rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <div className="p-4">
                      <p className="font-bold">Travel website from a to z</p>
                      <p className="font-bold">backend deploy</p>
                    </div>
                  </div>
                </div>
                <div className="relative group mt-3">
                  <div className="w-[330px] cursor-pointer h-64 rounded-lg overflow-hidden transition-transform transform-gpu hover:scale-105">
                    <Image
                      src="https://civi.uxper.co/wp-content/uploads/2022/12/project-02-1.webp"
                      alt="User"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-0  w-full  rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <div className="p-4">
                      <p className="font-bold">Travel website from a to z</p>
                      <p className="font-bold">backend deploy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Honors & awards</h1>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-yellow-500 my-2"></div>
                <div>
                  <h4>First Prize Winner </h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">of the U.S</span>
                    <span>2020-04-01 </span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="h-28 w-2 border-r border-dotted border-yellow-500 my-2"></div>
                <div>
                  <h4>First Prize Winner </h4>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-teal-400">of the U.S</span>
                    <span>2020-04-01 </span>
                  </div>
                  <p className="mt-3 text-base text-gray-400">
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                    erat, blandit at pretium et, accumsan ac est. Integer
                    vehicula rhoncus molestie.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mt-5">
            <div className="p-[32px]">
              <h1 className="font-bold text-2xl">Review</h1>
              <div className="flex items-center gap-2 mt-5">
                <Button color="primary">
                  4.5 <AiOutlineStar size={19} />
                </Button>
                <p className="text-gray-400">Base on 2 reviewes</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Progress
                  label="Working attitude"
                  size="sm"
                  value={5}
                  maxValue={5}
                  color="warning"
                  // formatOptions={{style: "star", currency: "star"}}
                  showValueLabel={true}
                  className="max-w-md"
                />

                <Progress
                  label="Team work"
                  size="sm"
                  value={3}
                  maxValue={5}
                  color="warning"
                  // formatOptions={{style: "star", currency: "star"}}
                  showValueLabel={true}
                  className="max-w-md"
                />
                <Progress
                  label="Skill & Experience"
                  size="sm"
                  value={4}
                  maxValue={5}
                  color="warning"
                  // formatOptions={{style: "star", currency: "star"}}
                  showValueLabel={true}
                  className="max-w-md"
                />
                <Progress
                  label="Offered salary"
                  size="sm"
                  value={2.5}
                  maxValue={5}
                  color="warning"
                  // formatOptions={{style: "star", currency: "star"}}
                  showValueLabel={true}
                  className="max-w-md"
                />
              </div>
              <Divider className="my-4" />

              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="h-20 w-20 rounded-full overflow-hidden">
                        <Image
                          src={`https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p>Employer</p>
                        <p>1 month ago</p>
                      </div>
                    </div>

                    <div>
                      <span className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => {
                          if (i <= 4) {
                            return (
                              <AiFillStar key={i} className="text-yellow-500" />
                            );
                          }
                          return (
                            <AiFillStar key={i} className="text-yellow-500" />
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4" />
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="h-20 w-20 rounded-full overflow-hidden">
                        <Image
                          src={`https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p>Employer</p>
                        <p>1 month ago</p>
                      </div>
                    </div>

                    <div>
                      <span className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => {
                          if (i <= 4) {
                            return (
                              <AiFillStar key={i} className="text-yellow-500" />
                            );
                          }
                          return (
                            <AiFillStar key={i} className="text-yellow-500" />
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Card className="">
            <div className="p-[32px]">
              <h1 className="text-2xl font-bold">Information</h1>

              <div className="mt-5">
                <p className="font-bold">Offered Salary</p>
                <p className="text-teal-400">$1200/month</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Experience time</p>
                <p>6-8 years</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Languages</p>
                <p>English</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Gender</p>
                <p>Male</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Qualification</p>
                <p>Bechelor Degree</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Age</p>
                <p>25years</p>
              </div>
              <div className="mt-5">
                <p className="font-bold">Phone</p>
                <p>+8801768726911</p>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <FiFacebook size={19} />
                <TiSocialLinkedin size={19} />
                <FaWhatsapp size={19} />
                <PiTelegramLogoBold size={19} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
