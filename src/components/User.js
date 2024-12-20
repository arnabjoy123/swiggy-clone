const User = (props) => {
  const { name, role } = props;
  return (
    <>
      <div className="user-card">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>Has a lot of Experience</p>
      </div>
    </>
  );
};

export default User;
