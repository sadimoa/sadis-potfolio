const Contact = () => {
  return (
    <div className="min-h-screen ml-20 bg-[#1d1d1d] text-white flex flex-col gap-5  justify-center px-6 md:px-12">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-5">
          <h4 className="text-3xl md:text-6xl font-extrabold text-[#00ffff]">
            Contact Me
          </h4>
          <p className="md:max-w-170 max-w-fit ">
            I'm interested in freelance work, particularly ambitious or
            large-scale projects. Please use the provided form for any inquiries
            or requests. Thank you.
          </p>
          <form className="mt-6 space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 p-3 bg-gray-800 rounded-md text-white outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2 p-3 bg-gray-800 rounded-md text-white outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Enter your Subject"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-800 rounded-md text-white outline-none h-32"
            ></textarea>
            <button className="w-full p-3 bg-cyan-400 text-black font-semibold rounded-md hover:bg-cyan-500">
              Submit
            </button>
          </form>
        </div>
        {/* Right Section (Map) */}
        <div className="lg:w-1/2 p-6">
          <iframe
            className="w-full h-96 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58214.431752914515!2d90.34440619791667!3d23.78077775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bc46a2b6d3%3A0x68b54b0d98e56fd7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1644013663453!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
