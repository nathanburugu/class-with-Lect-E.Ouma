import  Header  from './components/Header';
import Blogs from './components/Blogs';

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
    </div>
  );
}

export default App;
