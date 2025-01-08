"use client"

const RoomRating = (props: { rating: number }) => {
  const ratingArr = [...Array(10).keys()];

  return (
    <div className="w-3/4 max-w-4xl mx-auto bg-gray-100 rounded-lg p-4">
      <h2 className='h3-bold mb-4 font-serif tracking-wider text-primary'>Rating</h2>
      <div className="rating rating-lg rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        {
          ratingArr.map((item, index) => (
            <input 
              key={index} 
              type="radio" 
              name="rating-10" 
              className={`mask mask-star-2 ${item % 2 === 0 ? "mask-half-1" : "mask-half-2"} bg-primary`}
              defaultChecked={item + 1 === props.rating * 2}
              disabled
            />
          ))
        }
      </div>
    </div>
  )
}

export default RoomRating