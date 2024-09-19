 import Carausel from '@/components/Carausel'
import ClientTestimonial from '@/components/ClientTestimonial'
import CollaborateContact from '@/components/CollaborateContact'
import CompanyAddress from '@/components/CompanyAddress'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import OurFeature from '@/components/OurFeature'
import OurServices from '@/components/OurServices'
import Partner from '@/components/Partner'
import CountryCustomer from '@/components/CountryCustomer'
// import Services3 from '@/components/Services3'
import React from 'react'
import Digital from '@/components/Digital'
import Industries from '@/components/Industries'
 
 const page = () => {
   return (
     <div>
           <Header/>
            <Navbar/>
            <Carausel/>
            <OurServices/>
            <OurFeature/>
            <Digital/>
            <Industries/>
            <Partner/>

            <CountryCustomer/>
            {/* <ClientTestimonial/> */}
            <CollaborateContact/>
            {/* <Partner/> */}
            {/* <Services3/> */}
            <CompanyAddress/>
            <Footer/>
     </div>
   )
 }
 
 export default page
 