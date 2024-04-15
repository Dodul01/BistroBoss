const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-2">
            <div>
                <img className="h-[100px] w-[100px] object-cover rounded-full" src={image} alt={`${name} image`} />
            </div>
            <div>
                <h3>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-600 font-semibold text-lg">${price}</p>
            </div>
        </div>
    )
}

export default MenuItem