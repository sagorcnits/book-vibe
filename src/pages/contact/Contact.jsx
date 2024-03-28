

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center md:w-[80%] mx-auto my-10'>
        <div className='flex-1'>
            <img  src='https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1711601496~exp=1711602096~hmac=5829b499a715bd5c41fd6dd3d72a521aa064ed0d4060e1e75894cca129a70a07' alt="" />
        </div>
      <form className='flex-1 w-full '>
        <h1 className='text-[30px] font-bold py-4'>Contact Us</h1>
        <label className="input input-bordered flex items-center gap-2 mt-4">
          Name
          <input type="text" className="grow" placeholder="name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-4">
          Email
          <input type="text" className="grow" placeholder="example@email.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-4">
            Phone
          <input type="number" className="grow" placeholder="number" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-4">
            Address
          <input type="text" className="grow" placeholder="address" />
        </label>
        <button className=' mt-4 w-full px-7 py-3 text-white font-bold rounded-lg bg-[#23BE0A]'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
