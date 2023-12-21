// pages/working-on-it.js
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
const montserrat=Montserrat({
    subsets:['latin']
});
const WorkingOnIt = () => {
  return (
    <div className="container">
      <Head>
        <title>We are working on it</title>
        
      </Head>
      <video autoPlay loop muted>
      <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"  >
      <h1 className={montserrat.className}>We are working on it</h1>
      <p className={montserrat.className}>Stay Tuned !</p>
      <p className={montserrat.className}>With {"\u2665"} Team Webwiz </p>
      </div>
    </div>
  );
};

export default WorkingOnIt;
