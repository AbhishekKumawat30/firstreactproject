import { DataApi } from "../api/DataApi";

export const Looping = () => {
  return (
    <>
      <ul>
        {DataApi.map((studentsdata) => {
          return <li key={studentsdata.id}>{studentsdata.stn}</li>;
        })}
      </ul>

      <h1></h1>
    </>
  );
};
