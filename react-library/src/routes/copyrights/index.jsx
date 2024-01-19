import React from "react";
import { Link } from "react-router-dom";

const Copyrights = () => {
  return (
    <div>
      <Link to={"/"}>BAck</Link>
      <h1>Copyright Terms</h1>
      <ul>
        <li>
          <h3>Ownership:</h3>
          <p>
            All content present on this website, including but not limited to
            text, graphics, logos, images, digital downloads, data compilations,
            and software, is the property of Edgemony or its content suppliers
            and is protected by international copyright laws.
          </p>
        </li>
        <li>
          <h3>Use of Content:</h3>
          <p>
            The materials on Edgemony are provided for lawful purposes only.
            Reproduction, duplication, distribution, derivative works, and any
            form of data extraction or data mining, are strictly prohibited
            without prior written consent from Edgemony.
          </p>
        </li>
        <li>
          <h3>Trademark:</h3>
          <p>
            The trademarks, logos, and service marks displayed on the website
            are registered and unregistered Trademarks of [Fictional Bookstore
            Website] and others. Nothing contained on the website should be
            construed as granting any license or right to use any trademark
            without the prior written permission of [Fictional Bookstore
            Website] or the third-party owner of such a trademark.
          </p>
        </li>
        <li>
          <h3>User-Generated Content:</h3>
          <p>
            Users may post reviews, comments, and other content; send other
            communications; and submit suggestions, ideas, comments, questions,
            or other information, as long as the content is not illegal,
            obscene, threatening, defamatory, invasive of privacy, infringing of
            intellectual property rights, or otherwise injurious to third
            parties or objectionable.
          </p>
        </li>
        <li>
          <h3>Copyright Complaints: </h3>
          <p>
            Edgemony respects the intellectual property of others. If you
            believe that your work has been copied in a way that constitutes
            copyright infringement, please provide us with the written
            information specified in our Copyright Policy.
          </p>
        </li>
        <li>
          <h3>Revision of Terms:</h3>
          <p>
            Edgemony reserves the right to make changes to our site, policies,
            and these Terms of Use at any time without notice.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Copyrights;
