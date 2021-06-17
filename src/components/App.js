import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar';
// import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/UseVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null); 
    const [videos, search] = useVideos('Pele');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);

    return(
        <div className="ui container">
            <SearchBar onFormSubmit={ search } />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video= { selectedVideo } />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={ setSelectedVideo } videos={ videos } />
                    </div>
                </div>
            </div>
        </div>
    );
};
// const App = () => {
//     const [videos, setVideos] = useState([]); 
//     const [selectedVideo, setSelectedVideo] = useState(null); 

//     useEffect(()=>{  
//         onTermSubmit('Video Streaming');
//     },[]);

//     const onTermSubmit = async term => {  
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });

//         //  console.log(response.data.items);
//         setVideos(response.data.items);
//         setSelectedVideo(response.data.items[0]);
//     };

//     return(
//         <div className="ui container">
//             <SearchBar onFormSubmit={ onTermSubmit } />
//             <div className="ui grid">
//                 <div className="ui row">
//                     <div className="eleven wide column">
//                         <VideoDetail video= { selectedVideo } />
//                     </div>
//                     <div className="five wide column">
//                         <VideoList onVideoSelect={ setSelectedVideo } videos={ videos } />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default App;