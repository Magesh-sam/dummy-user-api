"use client";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import jsx from "highlight.js/lib/languages/javascript";
import Link from "next/link";
hljs.registerLanguage("jsx", jsx);

export default function Page() {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const Button = ({ url }: { url: string }) => (
    <Link
      className="border-2 hover:bg-[#FFFFFF] hover:text-[#121212] text-white p-1 rounded ml-[10%]  transition-all duration-250 ease-in"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      view output
    </Link>
  );

  return (
    <main className="min-h-screen mb-[75px]">
      <h1 className="text-[#FFFFFF75] hover:text-[#FFFFFF] transition-all duration-300 ease-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center p-[50px] bg-gradient-to-r from-purple-600 to-pink-500">
        Welcome to the Docs!
      </h1>
      <br />
      <h2 className="ml-5 font-bold text-white mb-5 underline underline-offset-4 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] ">
        About
      </h2>

      <ul className="flex ml-8 text-md flex-col gap-5 mr-2 md:text-lg lg:text-xl xl:text-2xl xl:max-w-[80%] xl:ml-[8%] mb-5 ">
        <li>
          <span className="text-white">C</span>reate dynamic user profiles on
          the fly with realistic personal details such as names, email
          addresses, usernames, and profile pictures, etc.., with Dummy User
          API.
        </li>
        <li>
          <span className="text-white">B</span>y leveraging the Dummy User API,
          you can streamline your development process, enhance user testing, and
          create more realistic and engaging experiences within your
          applications.
        </li>

        <li>
          <span className="text-white">E</span>mpower your team to iterate
          quickly and efficiently, all while delivering exceptional user
          experiences that reflect real-world scenarios.
        </li>
        <li>
          <Link className="font-bold" href="https://dummyuser.vercel.app/">
            <span className="bg-clip-text  text-transparent bg-gradient-to-r from-purple-600  to-pink-500 ">
              Base URL:{" "}
            </span>
            https://dummyuser.vercel.app/
          </Link>
        </li>
      </ul>
      <h3 className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] ">
        Data types for Typescript
      </h3>

      <pre lang="jsx" className="w-[80%] max-w-[80%] mx-auto overflow-scroll ">
        <code lang="jsx">
          {`
{
  id: number,
  first_name: string,
  last_name: string,
  avatar: string,
  date_of_birth: string,
  age: number,
  gender: string,
  email: string
  Phone: string,
  location: {
    country: string,
    city: string,
    postal_code: number
  },
  user: {
    username: string,
    password: string,
    userid: string
  },
}
                  `}
        </code>
      </pre>
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        All Users
      </p>
      <pre lang="jsx" className="w-[80%] max-w-[80%] mx-auto overflow-scroll ">
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users')
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>
      </pre>
      <Button url="https://dummyuser.vercel.app/users" />
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Single User
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/1')
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>
      </pre>
      <Button url="https://dummyuser.vercel.app/users/1" />
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Filter Users with single prop
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/q?first_name=Vanni')
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>
      </pre>
      <Button url="https://dummyuser.vercel.app/users/q?first_name=Vanni" />
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Filter Users with multiple props
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/q?ageGT=30&ageLT=40')
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>
      </pre>
      <Button url="https://dummyuser.vercel.app/users/q?ageGT=30&ageLT=40" />
      <h4 className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-4 ">
        Available Filters
      </h4>
      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`Query Endpoint : 'https://dummyuser.vercel.app/users/q'`}
        </code>
        <ul className="text-md md:text-lg lg:text-xl text-white gap-2">
          <li>first_name, last_name = q?first_name=name&last_name=name</li>
          <li>first_name = q?first_name=name</li>
          <li>last_name = q?last_name=name</li>
          <li>ageGT, ageLT = q?ageGT=age&ageLT=age</li>
          <li>ageGT = q?ageGT=age</li>
          <li>ageLT = q?ageLT=age</li>
          <li>country, city = q?country=name&city=name</li>
          <li>country = q?country=name</li>
          <li>city = q?city=name</li>
        </ul>
      </pre>
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Add user POST Method
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users', {
  method: 'POST',
  body: JSON.stringify({
    first_name: 'sam',
    last_name: 'leo',
    avatar:'avatar url',
    data_of_birth: '01/01/2000',
    age: 23,
    gender: 'male',
    email: 'samleo@me.com',
    phone: '123456789',
    location:{
      country: 'india',
      city: 'chennai',
      postal_code: 123456
    }
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>
      </pre>
        <p className="ml-[10%]">Note: The resource will appear to be changed on the server but it won&apos;t be changed.</p>
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Update user PUT Method
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/1', {
  method: 'PUT',
  body: JSON.stringify({
    first_name: 'sam',
    last_name: 'leo',
    avatar:'avatar url',
    data_of_birth: '01/01/2000',
    age: 23,
    gender: 'male',
    email: 'samleo@me.com',
    phone: '123456789',
    location:{
      country: 'india',
      city: 'chennai',
      postal_code: 123456
    }
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>

      </pre>
        <p className="ml-[10%]">Note: The resource will appear to be changed on the server but it won&apos;t be changed.</p>
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Modify user PATCH Method
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/1', {
  method: 'PATCH',
  body: JSON.stringify({
    data_of_birth: '01/01/1999',
    age: 25,
    phone: '1234512345'
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));`}
        </code>

      </pre>
        <p className="ml-[10%]">Note: The resource will appear to be changed on the server but it won&apos;t be changed.</p>
      <p className="ml-5  text-white mb-5  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:ml-[6%] mt-3 ">
        Delete user DELETE Method
      </p>

      <pre
        lang="jsx"
        className="w-[80%] max-w-[80%] mx-auto overflow-scroll mb-3"
      >
        <code lang="jsx">
          {`fetch('https://dummyuser.vercel.app/users/1', {
  method: 'DELETE',
});`}
        </code>

      </pre>
        <p className="ml-[10%]">Note: The resource will appear to be changed on the server but it won&apos;t be changed.</p>
    </main>
  );
}
