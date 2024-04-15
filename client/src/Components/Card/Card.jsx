const Card = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className="max-w-sm bg-[#E8E8E8] border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt={`${name} image`} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-[#737373]">{recipe}</p>
                <div className="flex items-center justify-center">
                    <button className="px-4 py-3 text-sm transition-all font-medium text-center border border-b-2 border-b-[#BB8506] text-white bg-[#BB8506] rounded-lg hover:bg-[#111827] hover:text-[#BB8506] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card