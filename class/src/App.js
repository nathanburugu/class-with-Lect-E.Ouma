import  Header  from './components/Header';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  // const inputRef = useRef(null);
  // var names = [];
  // const handleClick = () => {
  //   names.push(inputRef.current.value)

  //   console.log(inputRef.current.value)
  //   console.log(names)
  // }
  return (
    <div className='meza'>
      <Header/>
   <Blogs/>
   <Footer/>
    </div>
  );
}

export default App;
