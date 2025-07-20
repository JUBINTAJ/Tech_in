import React from 'react'
import logo from '../assets/logo.jpg';
export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
      
        <div className="mb-8">
      
    
           <img 
           src={logo} 
            alt="Company Logo" 
            className="w-full h-full mx-auto mb-4 animate-pulse"
          />
        </div>
 
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

       
        
     
      </div>
    </div>
  )
}