import Image from "next/image"

let Footer = () => {
    return(
        <footer>
            <div className="flex flex-col justify-center text-center bg-neutral-500 p-16 gap-y-3">
                <div className="flex text-center justify-center gap-6 text-lg font-bold text-white cursor-pointer">
                    <span>About</span>
                    <span>|</span>
                    <span>Teams</span>
                    <span>|</span>
                    <span>Pricing</span>
                    <span>|</span>
                    <span>Privacy Policy</span>
                    <span>|</span>
                    <span>Terms</span>
                </div>
                <div className="flex text-center justify-center m-4 gap-5 text-lg font-bold text-white cursor-pointer">
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/facebook.svg" alt="facebook-svg" width={24}/></span>
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/youtube.svg" alt="youtube-svg" width={32}/></span>
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/linkedin.svg" alt="youtube-svg" width={28}/></span>
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/gitub.svg" alt="youtube-svg" width={32}/></span>
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/instagram.svg" alt="youtube-svg" width={28}/></span>
                    <span className="hover:-translate-y-2 hover:transition-all"><img src="/whatsapp.svg" alt="youtube-svg" width={30}/></span>
                </div>
                <div className="text-lg font-bold text-white cursor-pointer">
                    <p>@ 2024 Fahad Air Conditioner Cleaning Inc, All Rights Reserved</p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer