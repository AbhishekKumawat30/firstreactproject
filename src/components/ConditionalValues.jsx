const ConditionalValues = () => {
  const myName = "Abhishek kumawat";
  const myClass = `${12}th`;
  const myRollNo = () => {
    const rollno = 1201;
    if (rollno === 1201) return "He/She in 12th class.";
    return "He/She in not 12th class.";
  };

  return (
    <>
      {/* Variable based data  */}
      <h1>{myName}</h1>
      <h3>
        {myClass === "12th"? `${myClass} Board Class` : `${myClass} Simple Class`}
      </h3>
      <h3>{myRollNo()}</h3>
    </>
  );
};
export default ConditionalValues;
