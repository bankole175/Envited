import {useNavigate} from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    const goToCreate = () => {
        navigate('/create')
    }
    return (
        <div className="min-h-[90vh] inline-grid md:flex items-center justify-between max-w-[1400px]">
            <div className="md:w-[50%] text-center order-2 md:order-first">
                <img src="/src/assets/images/home.svg" className="w-100 h-100" style={{filter: 'drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))'}} alt=""/>
                <button onClick={goToCreate} className="btn-primary md:hidden">🎉 Create my event</button>
            </div>
            <div className="md:w-[50%] order-1 md:order-last mb-3">
                <div className="md:w-[500px] text-center md:text-right">
                    <h3 className="font-[700] text-[36px] leading-[36px] md:text-[64px] md:leading-[64px] mb-2.5">
                        <span className="block text-primary">Imagine if</span>
                        <span className="block md:leading-[73.59px] envited-gradient">Snapchat</span>
                        <span className="block text-primary">had events.</span>
                    </h3>
                    <p className="text-center md:text-right font-[300] text-[16px] md:text-[24px] text-darkGray md:mb-10">Easily host and share events with your friends across any social media.</p>
                    <button onClick={goToCreate} className="btn-primary hidden md:inline-flex">🎉 Create my event</button>
                </div>
            </div>
        </div>
    )
}
