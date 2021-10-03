import {useEffect} from 'react';
import axios from 'axios';

import API from '../utils/API';

import PopularList from '../components/PopularList/PopularList'
import RecentList from '../components/RecentList/RecentList';

const Home = async () => {

  const pageData = async () => {
    await axios.get('/api').then((res)=>{
      console.log(res.data);
    })
    // try {
    //   const { data } = await axios.get('/api');
    //   console.log(data);
    //   return data;
    // }
    // catch {
    //   alert('401 error, it is good no problem');
    // }
  }
  console.log(10);
  
  useEffect (()=>{
    pageData();
  }, []);


  // const popularData = await pageData().popularData;
  // const recentData = await pageData().recentData;
  return (
    <main>
      <section className="headline">
      </section>
      <section className="popular-post">
        {/* <PopularList data={popularData}/> */}
      </section>
      <section className="recent-post">
        {/* <RecentList data={recentData}/> */}
      </section>
    </main>
  )
}

export default Home;