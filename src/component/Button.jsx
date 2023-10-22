const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    link
  }) => {
    return (
      <button
        className={`flex justify-center flex-row  items-center gap-4 px-12 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-black"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        <a href={link} className="flex flex-row gap-6">
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className=' rounded-full bg-white w-5 h-5'
          />
        )}
        </a>
      </button>
    );
  };
  
  export default Button;
  