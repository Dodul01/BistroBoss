const Cover = ({ bgImg , title}) => {
    return (
        <section className={`relative h-[450px] w-full bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${bgImg})`}}>
            <div className="bg-black bg-opacity-30 h-full w-full flex items-center justify-center">
                <div className="flex items-center justify-center flex-col bg-black text-white p-2 bg-opacity-65 max-h-[300px] h-full max-w-[60%] w-full rounded-xl">
                    <h1 className="text-4xl">{title}</h1>
                    <p className=" text-gray-400 text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse blanditiis amet iste minima perferendis libero?</p>
                </div>
            </div>
        </section >
    )
}

export default Cover