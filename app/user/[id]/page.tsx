import React from "react";

interface ApiResCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface ApiResLocation {
  lat: string;
  lng: string;
}

interface ApiRes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ApiResLocation;
  };
  phone: string;
  website: string;
  company: ApiResCompany;
}

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  const api = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: ApiRes = await api.json();
  return (
    <>
      <section className="max-h-3xl flex flex-col justify-center items-center bg-gradient-to-r from-slate-400 to-gray-600 text-white ">
        <h1 className="text-6xl p-4 font-black font-serif">{data.name}</h1>
      </section>
      <div className="flex justify-between">
        <section className="flex flex-col items-start justify-start w-[40%] mx-auto my-6 border rounded-md shadow-md p-4">
          <h3 className="text-3xl font-semibold">Personal Info:</h3>
          <ul className="my-3 ml-3">
            <li className="text-[16px] hover:translate-x-1">
              Name :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.name}
              </span>{" "}
            </li>
            <li className="text-[16px] hover:translate-x-1">
              User Name :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.username}
              </span>
            </li>
            <li className="text-[16px] hover:translate-x-1">
              Email :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.email}
              </span>
            </li>
            <li className="text-[16px] hover:translate-x-1">
              Phone #:{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.phone}
              </span>
            </li>
            <li className="text-[16px] hover:translate-x-1">
              Website :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.website}
              </span>
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-start justify-start w-[40%] mx-auto my-6 border rounded-md shadow-md p-4">
          <h3 className="text-3xl font-semibold">Employer Info:</h3>
          <ul className="my-3 ml-3">
            <li className="text-[16px] hover:translate-x-1">
              Company Name :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.company.name}
              </span>{" "}
            </li>
            <li className="text-[16px] hover:translate-x-1">
              Business :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.company.bs}
              </span>
            </li>
            <li className="text-[16px] hover:translate-x-1">
              {" "}
              CatchPhrases :{" "}
              <span className="font-semibold hover:text-gray-600">
                {data.company.catchPhrase}
              </span>
            </li>
          </ul>
        </section>
      </div>
      <section className="flex flex-col items-start justify-start w-[40%] mx-auto my-6 border rounded-md shadow-md p-4">
        <h3 className="text-3xl font-semibold">Address:</h3>
        <p className="gap-2 my-1">
          {data.address.suite}, {data.address.street}, {data.address.city}-
           {""}{data.address.zipcode}
        </p>
      </section>
    </>
  );
};

export default page;