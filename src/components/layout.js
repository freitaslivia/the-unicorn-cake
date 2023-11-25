
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';



function Layout({children}) {
  return (
    <div className="App">
      <HeaderPage />
        <main>{children}</main>   
      <FooterPage />
    </div>
  );
}

export default Layout;
