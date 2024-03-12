import React, { useState } from "react";
import { searchAlbums, searchArtists, searchAudiobooks, searchPodcastEpisode, searchPodcastShow, searchTrack } from "@/app/lib/apiCall";
import { useSession } from "next-auth/react";
import "@/app/styles/styles.css"


export default function SearchComponent () {

    const { data: session } = useSession();
    const accessToken = session?.accessToken;
    const [searchResults, setSearchResults] = useState([]);
    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleSearch = async () => {
        console.log('Search initiated with category:', category, 'and keyword:', keyword );

        let results = [];

        switch (category) {
            case 'artist':
                console.log('Searching for artists...');
                results = await searchArtists(keyword, accessToken);
                break;
            case 'album':
                console.log('Searching for albums...');
                results = await searchAlbums(keyword, accessToken);
                break;
            case 'track':
                console.log('Searching for tracks...');
                results = await searchTrack(keyword, accessToken);
                break;
            case 'audiobook':
                console.log('Searching for audiobooks...');
                results = await searchAudiobooks(keyword, accessToken);
                break;
            case 'show':
                console.log('Searching for shows...');
                results = await searchPodcastShow(keyword, accessToken);
                break;
            case 'episode':
                console.log('Searching for episodes...');
                results = await searchPodcastEpisode(keyword, accessToken);
                break;
            default:
                break;
        }

        console.log('Search results:', results);
        
        setSearchResults(results);
    };

    return (
            <div className="bg-transparent ">

                <div className="pb-12 flex justify-center">
                    <select className="p-2 px-4 bg-green-600 font-medium text-lg rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                        <option>Select</option>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="song">Song</option>
                        <option value="book">Book</option>
                        <option value="podcast">Podcast</option>
                        
                    </select>
                </div>

               <div className="bg-white rounded-md">   
                    <input className="outline-none p-2 m-4 text-xl text-slate-800" 
                    type="text" 
                    placeholder="Title, Artist, Name..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                    
                    <button className="p-3 mr-4 pl-10 pr-10 bg-green-600 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
                    onClick={handleSearch}
                    >Search</button>
                </div>
            </div>
    )
}
/*flex items-center justify-center rounded-md 
bg-white flex items-center justify-center rounded-md*/