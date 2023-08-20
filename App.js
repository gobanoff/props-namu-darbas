
import './App.css';
import Video from './Video';
function App() {
  return (<div>
    <Video
      videoID="XEjLoHdbVeE"
      autoplay={true}
      color="blue"
      controls={true}
      start="30"
      end="120"
      loop={false}
      thumbnail="https://picsum.photos/id/237/536/354"
    />
    <Video
      videoID=""
      autoplay={false}
      controls={true}
      thumbnail="https://picsum.photos/id/237/536/354"
    />
  </div>
    
  );
}

export default App;
