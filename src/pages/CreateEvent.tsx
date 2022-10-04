import {TextField} from "../components/inputs";
import {useNavigate} from "react-router-dom";

export function CreateEvent() {
    const navigate = useNavigate();
    const goToEventPage = () => {
        navigate('/event')
    }

    return (
        <div className="min-h-[90vh] inline-grid md:flex items-center justify-center max-w-[1400px]">
            <div className="card flex justify-between p-0">
                <div className="md:w-[40%] text-center flex items-center justify-center bg-gradient rounded-tl-[10px] rounded-bl-[10px]">
                    <img src="/src/assets/images/home.svg" className="w-100 h-100" style={{filter: 'drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))'}} alt=""/>
                    <button className="btn-primary md:hidden">🎉 Create my event</button>
                </div>
                <div className="md:w-[60%] md:order-last mb-3 py-2 px-10">
                    <div className="">
                        <h3 className="font-[700] text-center text-[36px] leading-[36px] md:text-[50px] md:leading-[64px] mb-2.5 text-primary">
                            Create your event
                        </h3>
                        <p className="text-center font-[300] text-[16px] md:text-[24px] text-darkGray md:mb-10">Easily host and share events with your friends across any social media.</p>
                        <div>
                            <TextField label="Event Name" />
                            <TextField label="Host Name" />
                            <TextField label="Start Date and Time" />
                            <TextField label="End Date and Time" />
                            <TextField label="Location" />
                            <TextField label="Event Photo" />
                        </div>
                        <button onClick={goToEventPage} className="btn-primary hidden md:inline-flex">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
