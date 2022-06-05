import Head from 'next/head';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';
import MembershipMain from '../components/Membership/MembershipMain';


export default function Membership() {

  return (
    <>
      <Head>
        <title>Eduman - Education And Online Courses React, NextJs Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <HeaderFour />
      <MembershipMain />
      <Footer />
    </>
  )
}
