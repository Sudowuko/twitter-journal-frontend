import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Form from '../components/Form';
import Content from '../components/content'
import Tweets from '../components/tweets'
import LandingPage from '../components/LandingPage'
import PastInfo from '../components/PastInfo'


export default function Index() {
    return (
    <Layout>
    {/* <Navbar />
    <Form />
    <Content />
    <Tweets /> */}
    <LandingPage />
    <PastInfo />
    </Layout>
    )
  }
  
