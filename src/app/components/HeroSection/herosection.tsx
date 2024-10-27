import Image from "next/image"

let Section = () => {
    return(
        <section>
            <div className="flex flex-row justify-between bg-sky-800 text-white mt-16">
                <div className="p-14 mt-24">
                    <h4 className="text-3xl mb-8 font-medium">#1 Best HVAC Services</h4>
                    <h1 className="text-5xl mb-8 font-bold">Air duct cleaning, AC cleaning & Home Maintainance</h1>
                    <div className="flex flex-row gap-4">
                        <span className="flex flex-row gap-2"><img src="/checkbox.svg" alt="checkbox" width={20}/>Servicing</span>
                        <span className="flex flex-row gap-2"><img src="/checkbox.svg" alt="checkbox" width={20}/>Repairs</span>
                        <span className="flex flex-row gap-2"><img src="/checkbox.svg" alt="checkbox" width={20}/>Installation</span>
                    </div>
                    <button className="border-2 bg-emerald-600 p-3 mt-6 font-bold mt-6" type="button">Book Appiontment</button>
                </div>
                <div>
                  <img src="/img1.jpg" alt="img-1" width={1000}/>
                </div>
            </div>
            <div className="flex flex-row text-center justify-center mt-10 p-32">
                <div>
                    <img src="/img2.jpg" alt="image-2" width={1400} />
                </div>
                <div className="flex align-center flex-col text-left p-12 justify-center items-start gap-6">
                    <h1 className="text-2xl">| About Us</h1>
                    <h1 className="text-6xl font-bold">We are HVAC Service Professional</h1>
                    <p>Welcome to our HVAC Agency, where comfort meets efficiency! We take pride in being a leading provider of heating, ventilation, and air conditioning (HVAC) solutions for residential, commercial, and industrial clients. Our team of dedicated professionals is committed to delivering top-notch services, indoor environment remains comfortable.</p>
                    <h1 className="text-2xl font-semibold">Our Mission</h1>
                    <p>At our HVAC Agency, our mission is to create comfortable, healthy, and energy-efficient spaces for our valued customers. We strive to enhance your quality of life by delivering reliable HVAC services tailored to your specific needs. Whether it's installing cutting-edge HVAC systems, conducting routine maintenance, or providing swift repairs, we are your trusted partner.</p>
                    <button className="border-2 bg-emerald-600 p-3 mt-6 font-bold mt-6 text-white
                    " type="button">Book Appiontment</button>
                </div>
            </div>
            <div className="bg-black text-white mb-32">
                <div className="flex flex-col p-12">
                    <h1 className="text-2xl font-semibold">| Testimonials</h1>
                    <h1 className="text-6xl font-bold">Our Happy Customers</h1>
                </div>
                <div className="flex flex-row justify-around p-12">
                    <div className="border-2 border-white w-72 p-8 rounded-3xl">
                        <h1 className="text-xl font-semibold">James Rodrigo</h1>
                        <div className="flex flew-row gap-1 gap-y-5 mt-1 mb-4">
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                        </div>
                        <p>“We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.”</p>
                    </div>
                    <div className="border-2 border-white w-72 p-8 rounded-3xl">
                        <h1 className="text-xl font-semibold">Ajay Bangha</h1>
                        <div className="flex flew-row gap-1 mt-1 mb-4">
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                        </div>
                        <p>“We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.”</p>
                    </div>
                    <div className="border-2 border-white w-72 p-8 rounded-3xl">
                        <h1 className="text-xl font-semibold">Jamal Ahmed</h1>
                        <div className="flex flew-row gap-1 mt-1 mb-4">
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                          <span><img src="/star.svg" alt="star" width={25}/></span>
                        </div>
                        <p>“We provide students with timely and tailored support & services. We offer culturally sensitive and engaged teach learning and assessment needs.”</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section