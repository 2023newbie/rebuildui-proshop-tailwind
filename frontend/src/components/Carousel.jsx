import Loading from './UI/Loading'
import useFetch from '../hooks/useFetch'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

const Carousel = () => {
  const [products, isLoading] = useFetch('/api/products/top')
  const i = useRef(0)
  const [pointProd, setPointProd] = useState(null)

  useEffect(() => {
    if (products.length > 0) {
      setPointProd(products[i.current])
    }
  }, [products])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(i);
      i.current = i.current === 2 ? 0 : ++i.current
      setPointProd(products[i.current])
    }, 4000)

    return () => clearInterval(timer)
  })

  const showNextProduct = () => {
    i.current = i.current === 2 ? 0 : ++i.current
    setPointProd(products[i.current])
  }

  const showPreviousProduct = () => {
    i.current = i.current === 0 ? 2 : --i.current
    setPointProd(products[i.current])
  }

  const chooseProduct = (num) => {
    i.current = num
    setPointProd(products[num])
  }

  return (
    <section className="mx-auto bg-slate-600">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative">
          <img className="mx-auto" src={pointProd?.image} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-slate-50 font-semibold p-4">
            <h3 className="text-center text-3xl">
              {pointProd?.name} (${pointProd?.price})
            </h3>
            <div className='flex justify-center p-4'>
              <div className={`w-8 h-1 mr-2 hover:bg-gray-50 rounded cursor-pointer ${i.current === 0 ? 'bg-gray-50' : 'bg-gray-400'}`} onClick={() => chooseProduct(0)}></div>
              <div className={`w-8 h-1 mr-2 hover:bg-gray-50 rounded cursor-pointer ${i.current === 1 ? 'bg-gray-50' : 'bg-gray-400'}`} onClick={() => chooseProduct(1)}></div>
              <div className={`w-8 h-1 mr-2 hover:bg-gray-50 rounded cursor-pointer ${i.current === 2 ? 'bg-gray-50' : 'bg-gray-400'}`} onClick={() => chooseProduct(2)}></div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 cursor-pointer flex items-center text-5xl text-slate-600 md:text-slate-50 hover:bg-gradient-to-l hover:from-transparent hover:to-slate-500/50 md:hover:to-slate-800/50 p-8" onClick={showPreviousProduct}>
            <FaAngleLeft />
          </div>
          <div className="absolute top-0 bottom-0 right-0 cursor-pointer flex items-center text-5xl text-slate-600 md:text-slate-50 hover:bg-gradient-to-r hover:from-transparent hover:to-slate-500/50 md:hover:to-slate-800/50 p-8" onClick={showNextProduct}>
            <FaAngleRight />
          </div>
        </div>
      )}
    </section>
  )
}

export default Carousel
