import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid  sm:grid-cols-4 gap-y-10 gap-2 md:gap-10">
          {/* Navigation Links */}
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Pages</h5>
            <div className="flex flex-col space-y-7 text-sm">
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
              <Link to="/menu" className="hover:text-red-500">
                Menu
              </Link>
              <Link to="/about" className="hover:text-red-500">
                About
              </Link>
              <Link to="/gallery" className="hover:text-red-500">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Contact Us</h5>
            <div className="space-y-7 text-sm">
              <p>123 Main Street, Los Angeles, CA</p>
              <p>(+92) 307-4031207</p>
              <p>sami@restaurant.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-2 md:space-x-4 text-sm">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <svg
                  fill="white"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                </svg>
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <svg
                  fill="white"
                  width="25px"
                  height="20px"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                </svg>
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <svg
                  fill="white"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 97.75 97.75"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		 M78.43,35.841c0.023,0.577,0.035,1.155,0.035,1.736c0,20.878-15.887,42.473-42.473,42.473c-8.127,0-16.04-2.319-22.883-6.708
		c-0.143-0.091-0.202-0.268-0.145-0.427c0.057-0.158,0.218-0.256,0.383-0.237c1.148,0.137,2.322,0.205,3.487,0.205
		c6.323,0,12.309-1.955,17.372-5.664c-6.069-0.512-11.285-4.619-13.161-10.478c-0.039-0.122-0.011-0.255,0.073-0.351
		c0.085-0.096,0.215-0.138,0.339-0.115c1.682,0.319,3.392,0.34,5.04,0.072c-6.259-1.945-10.658-7.808-10.658-14.483l0.002-0.194
		c0.003-0.127,0.072-0.243,0.182-0.306c0.109-0.064,0.245-0.065,0.355-0.003c1.632,0.906,3.438,1.488,5.291,1.711
		c-3.597-2.867-5.709-7.213-5.709-11.862c0-2.682,0.71-5.318,2.054-7.623c0.06-0.103,0.166-0.169,0.284-0.178
		c0.119-0.012,0.234,0.04,0.309,0.132c7.362,9.03,18.191,14.59,29.771,15.305c-0.193-0.972-0.291-1.974-0.291-2.985
		c0-8.361,6.802-15.162,15.162-15.162c4.11,0,8.082,1.689,10.929,4.641c3.209-0.654,6.266-1.834,9.09-3.508
		c0.129-0.077,0.291-0.065,0.41,0.028c0.116,0.094,0.164,0.25,0.118,0.394c-0.957,2.993-2.823,5.604-5.33,7.489
		c2.361-0.411,4.652-1.105,6.831-2.072c0.146-0.067,0.319-0.025,0.424,0.098c0.104,0.124,0.113,0.301,0.023,0.435
		C83.759,31.175,81.299,33.744,78.43,35.841z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Opening Hours</h5>
            <div className="space-y-7 text-sm">
              <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p>Saturday: 10:00 AM - 11:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10 text-center">
          <h5 className="text-white text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h5>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded w-full md:w-1/3 bg-gray-800 text-gray-300"
            />
            <button
              type="submit"
              className="bg-red-700 text-white p-2 rounded mt-2 md:mt-0 md:ml-2"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Legal Information */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>&copy; 2024 Restaurant. All rights reserved.</p>
          <p>
            <Link to="/" className="hover:text-red-700">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/" className="hover:text-red-700">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
