import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

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

export default async function Home() {
  const apiCall = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await apiCall.json();
  return (
    <>
    <section className="bg-gradient-to-t bg-slate-100 min-h-3xl flex flex-col justify-center items-center my-3 p-4">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif"> Welcome to <span className="text-slate-500 mx-2">API</span><span className="text-slate-400">Fetching</span></h1>
      <p className="font-serif my-2">Fetching data from API How to Dynamically Route to rendering each User separatly</p>

    </section>
      <section>
        <div className="flex flex-col justify-center items-center my-6">
          <div className="max-h-screen max-w-80%">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {res.map((res: ApiRes) => (
                <Link
                  href={`/user/${res.id}`}
                  key={res.id}
                  className=" hover:text-white"
                >
                  <div className="border border-t-1 border-b-4 border-black rounded-r-lg  text-black p-4 font-mono hover:text-white hover:translate-x-2 hover:bg-slate-700 hover:ease-in-out flex justify-between items-center">
                    <div>
                      <h1 className="font-semibold text-xl overflow-hidden">{res.name}</h1>
                      <h2 className="text-base font-normal ">
                        {" "}
                        {res.username}
                      </h2>
                    </div>
                    <IoArrowForwardOutline className="size-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}