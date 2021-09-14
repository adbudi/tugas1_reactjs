import React,{Component}from "react"
import Header from "./Header"
import Footer from "./Footer"
class App extends Component {
  render(){
  return (
    <div className="App">
     <Header />
     <p>Isi Halaman Menu Utama</p>
     <p>Isi Halaman Menu Kontak</p>
     <p>Isi Halaman Menu Product</p>
     <p>Isi Halaman Menu Tentang Kami</p>   
     <Footer />
    </div>
  );
 }
}
export default App;
