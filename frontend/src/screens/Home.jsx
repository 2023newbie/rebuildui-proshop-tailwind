import Carousel from '../components/Carousel'
import Rating from '../components/UI/Rating'
import { Link } from 'react-router-dom'
import Loading from '../components/UI/Loading'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const [list, isLoading] = useFetch('/api/products')
  
  return (
    <>
      <Carousel />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section>
            <h3 className="text-4xl my-8 font-semibold text-slate-700">
              Latest Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8">
              {list.map(prod => (
                <figure
                  key={prod._id}
                  className="rounded shadow-md border border-gray-200 w-full"
                >
                  <div className="p-4">
                    <Link to={`/product/${prod._id}`}>
                      <img
                        className="rounded w-full"
                        src={prod.image}
                        alt={prod.name}
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${prod._id}`}>
                        <h4 className="truncate font-semibold mb-4 underline text-slate-700">
                          {prod.name}
                        </h4>
                      </Link>
                      <Rating rate={prod.rating} reviews={prod.numReviews} />
                      <div className="font-semibold text-2xl text-slate-500">
                        ${prod.price}
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Home
