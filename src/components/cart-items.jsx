

export function CartItems({data}) {
  return (
    <div className="shape-box">
      <img src={data.image} className="cart-image" />
      <div className="info-box">
        <h2>{data.name}</h2>
        <p>{data.price}</p>
      </div>
    </div>
  )
}