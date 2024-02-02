import React from "react";

export default function Footer({
  name,
  email,
  website,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center ">
          <li>
            <span className="font-bold">your Name: </span>
            {name}
          </li>

          <li>
            <span className="font-bold">your Enamil:</span> {email}
          </li>

          <li>
            <span className="font-bold">your Enamil:</span> {phone}
          </li>

          <li>
            <span> className="font-bold"Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder :</span> {name}
          </li>

          <li>
            <span className="font-bold">Account Number:</span> {bankAccount}
          </li>

          <li>
            <span className="font-bold">website :</span> {""}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
