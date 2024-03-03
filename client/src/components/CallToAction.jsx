import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to learn more about Gorillas?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Types of gorillas
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                    Siggu Gorilla
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='https://media.istockphoto.com/id/489669192/photo/funny-gorilla-with-sunglasses-celebrating-party-by-blowing-a-horn.jpg?s=612x612&w=0&k=20&c=Z3nPbqmeXYO8kKrhlbza2cS3-I1oaLvi-fbwFkcP8Mk='
                alt='Gorrilla' />
        </div>
    </div>
  )
}
