function Footer({ backgroundColor = "bg-white", textColor = "text-black", borderColor = "border-gray-200" }) {
    return (
      <div className={`fixed bottom-0 left-0 right-0 p-4 ${backgroundColor} ${borderColor} border-t shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-red-400">logo</h1>
          <ul className={`flex gap-5 ${textColor}`}>
            <li>log-in</li>
            <li>sign-in</li>
            <li>contact us</li>
            <li>about</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;