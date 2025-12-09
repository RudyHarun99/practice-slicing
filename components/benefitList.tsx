function BenefitList({ el }: { el: string }) {
  return (
    <div
      key={el}
      className="flex flex-row gap-3"
    >
      <img
        src="./check.png"
        alt="check icon"
      />
      <p className="text-xs text-gray-600">{el}</p>
    </div>
  )
}

export default BenefitList