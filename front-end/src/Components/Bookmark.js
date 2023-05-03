import { Link } from "react-router-dom";
<<<<<<< HEAD
// import React from "react";

function Bookmark({ bookmark }) {  //doesn't need useState
=======

function Bookmark({ bookmark }) {
>>>>>>> e7f9f8bd536b143623d84fa3c2da5c1109d824cd
  return (
    <tr>
      <td>
        {bookmark.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.name}
        </a>
      </td>
      <td>
        <Link to={`/bookmarks/${bookmark.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Bookmark;
