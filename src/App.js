import "./App.css";
// import 'antd/dist/antd.css';
import { Layout } from "antd";
import AppFooter from './components/common/Footer';

import AppHeader  from "./components/common/Header";
import AppHome from './views/home';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
      <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>    
    </Layout>
  );
}
export default App;
