const Button = ({ name }) => {
    const displayName = name.length > 20 ? name.slice(0, 20) + "..." : name;
  
    return (
      <button 
        className="m-2 px-4 py-2 bg-[#F2F2F2] hover:bg-[#E5E5E5] rounded-full text-sm font-medium whitespace-nowrap"
        title={name} 
      >
        {displayName}
      </button>
    );
  };
  
  export default Button;
  