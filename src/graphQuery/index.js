// import React from "react";

// import { useLazyQuery } from "@apollo/client";
// const GET_DOG_PHOTO = gql` query Dog($breed:$String!) {dog(breed:$breed) {id displayImage}}`;

// function DogPhoto() {
//   const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

//   if (loading) return <p>Loading ...</p>;
//   if (error) return `Error! ${error}`;

//   return (
//     <div>
//       {data?.dog && <img src={data.dog.displayImage} />}

//       <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
//         Click me!
//       </button>
//     </div>
//   );
// }
