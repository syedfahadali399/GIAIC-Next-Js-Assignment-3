let Header = () => {
    return(
        <header>
           <div className="flex flex-row justify-between p-10 bg-sky-600 text-red-50 font-bold cursor-help">
              <div className="text-4xl">
                  <h1>Fahad Air Cleaner Service</h1>
              </div>
              <div className="flex gap-6 font-semibold items-center cursor-pointer">
                  <span className="hover:bg-red-500 hover:p-4 hover:border-2 hover:border-red-900 hover:rounded-3xl hover:transition-all">Home</span>
                  <span className="hover:bg-red-500 hover:p-4 hover:border-2 hover:border-red-900 hover:rounded-3xl hover:transition-all">Monthly Plans</span>
                  <span className="hover:bg-red-500 hover:p-4 hover:border-2 hover:border-red-900 hover:rounded-3xl hover:transition-all">Services</span>
                  <span className="hover:bg-red-500 hover:p-4 hover:border-2 hover:border-red-900 hover:rounded-3xl hover:transition-all">Contact Us</span>
              </div>
          </div>
        </header>
    )
}

export default Header