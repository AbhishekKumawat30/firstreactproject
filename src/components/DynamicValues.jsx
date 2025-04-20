const DynamicsValues = () => {
  const myName = "Abhishek kumawat";
  const myClass = `${12}th`;
  const myRollNo = 1201;
  const count = 1;
  const familyDetails = () => {
    const fatherName = "Bajrang Lal kumawat";
    const motherName = "Suman Devi";
    const sisterName = "Payal Kumawat";
    return { fatherName, motherName, sisterName };
  };
  const details = familyDetails();
  return (
    <>
      <div>
        {/* Variable based data  */}
        <h1>{myName}</h1>
        <h3>{myClass}</h3>
        <h3>{myRollNo}</h3>
        {/* Expression base data  */}
        <h3>{count + 1 + 2 + 4 + 5 * 12}</h3>
        {/* Function base data   */}
        <h3>{details.fatherName}</h3>
        <h3>{details.motherName}</h3>
        <h3>{details.sisterName}</h3>
      </div>
    </>
  );
};
export default DynamicsValues;
