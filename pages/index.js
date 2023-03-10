import Home from '../components/Home'
import Layout from '../components/layout/Layout'

import { getRooms } from '../redux/actions/roomActions'
import { wrapper } from '../redux/store'


const Index = () => {


  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getRooms(req))
})

export default Index
