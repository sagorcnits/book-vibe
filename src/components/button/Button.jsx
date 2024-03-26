

const Button = ({title,bgColor}) => {
    return (
        <button style={{backgroundColor:bgColor}} className="px-7 py-3  text-white font-bold rounded-lg ">
            {title}
        </button>
    );
};

export default Button;