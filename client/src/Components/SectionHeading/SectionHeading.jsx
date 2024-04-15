const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="flex items-center justify-center flex-col max-w-[400px] mx-auto my-10">
            <p className="text-yellow-600 text-xl font-semibold py-3 border-t border-b border-yellow-600 w-full text-center">---{subHeading}---</p>
            <h3 className="text-4xl font-semibold uppercase py-3">{heading}</h3>
        </div>
    )
}

export default SectionHeading