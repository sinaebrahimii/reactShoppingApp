const Navbar = (props) => {
  return (
    <header className="navbar">
      <h2>Shopping App</h2>
      <span>{props.totalItems.length}</span>
    </header>
  );
};
export default Navbar;
