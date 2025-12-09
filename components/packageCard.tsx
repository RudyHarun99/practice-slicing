import BenefitList from "./benefitList"

type PackageItem = {
  id: number,
  name: string,
  description: string,
  price: number,
  benefits: string[],
}

type PackageCardProps = {
  item: PackageItem,
}

function PackageCard({
  item,
}: PackageCardProps) {
  return (
    <div
      className="border border-gray-200 bg-white rounded-2xl"
    >
      <div className="p-8">
        <div className="flex justify-center">
          <div className="border border-gray-300 rounded-[10px] flex justify-center items-center mb-6 p-1 w-max">
            <div
              className="flex flex-row items-center border border-gray-300 rounded-[10px] gap-1.5 p-2"
            >
              <div className="rounded-full p-0.5 bg-tertiery">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary">
                </div>
              </div>
              <p className="text-xs">{item.name}</p>
            </div>
            {
              item.id === 2 ?
              <p className="text-xs mx-3">Most popular</p> :
              ''
            }
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p
            className="text-4xl text-gray-900 font-semibold"
          >${item.price}/mth</p>
          <p
            className="text-xs text-gray-600"
          >{item.description}</p>
        </div>
      </div>
      <div className="px-8">
        <hr className="text-gray-200" />
      </div>
      <div className="flex flex-col p-8 gap-4">
        {
          item.benefits.map(el => (
            <BenefitList key={el} el={el} />
          ))
        }
      </div>
      <div className="px-8">
        <hr className="text-gray-200" />
      </div>
      <div className="flex justify-center p-8">
        <button
          className="w-full bg-secondary rounded-md text-white text-md font-semibold py-3"
        >Get started</button>
      </div>
    </div>
  )
}

export default PackageCard