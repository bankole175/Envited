import {FaAngleRight, FaRegCalendarAlt} from "react-icons/fa";
import {HiOutlineLocationMarker} from "react-icons/hi";

export function ViewEvent() {
    document.body.style = 'background: rgba(251, 250, 255, 1)'

    return (
        <div className="min-h-[90vh] flex items-center max-w-[1400px]">
            <div className="inline-grid md:flex items-cente justify-between w-full">
                <div className="md:w-[40%] order-2 md:order-first">
                    <h2 className="text-primary font-[700] text-[28px] md:text-[48px] leading-[32px] md:leading-[55.2px]">Birthday bash</h2>
                    <p className="text-[#828282] font-[400] text-[14px] md:text-[18px] leading-[16px] md:leading-[55.2px]">Hosted by Elysia</p>
                    <div className="mt-8">
                        <div className="flex justify-between">
                            <div className="flex items-center mb-8">
                                <div className="card p-3 mr-5">
                                    <FaRegCalendarAlt color={'#8456EC'} size={26} />
                                </div>
                                <div>
                                    <p className="text-primary font-[700] text-[18px] leading-[21px]">18 August 6:00PM</p>
                                    <p className="text-darkGray font-[400] text-[18px] leading-[21px]">to <span className="font-[700]">19 August 1:00PM</span> UTC +10</p>
                                </div>
                            </div>
                            <div>
                                <FaAngleRight color={'#BDBDBD'} size={26} />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="card p-3 mr-5">
                                    <HiOutlineLocationMarker color={'#8456EC'} size={26} width={'26px'} />
                                </div>
                                <div>
                                    <p className="text-primary font-[700] text-[18px] leading-[21px]">Street Name</p>
                                    <p className="text-darkGray font-[400] text-[18px] leading-[21px]">Suburb, State, Postcode</p>
                                </div>
                            </div>
                            <div>
                                <FaAngleRight color={'#BDBDBD'} size={26} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] order-1 md:order-last mb-3">
                    <img src="/src/assets/images/event.svg" className="w-100 h-100" alt={'icon'}/>
                </div>
            </div>
        </div>
    )
}
