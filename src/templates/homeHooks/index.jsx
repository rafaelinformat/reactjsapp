
import './styles.css';


import {Component, useState } from 'react';
import { PostCard } from '../../components/PostCard';
import {loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import Toggle from '../../components/Toggle';

export const HomeHook = () => {
   // const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(0);
    const[postsPerPage, setPostsPerPage] = useState(10);
    const[allPosts, setAllPosts] = useState([]);
    const[searchValue, setSearchValue]= useState('');

    const noMorePosts= page + postsPerPage >= allPosts.length;

     // carrega os posts  acessando uma API 
  const loadPosts = async  () => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }
  const loadMorePosts = () => {
    const {
      page, 
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page:nextPage});

  }
   const handleOnChange = (e) => {
    const {value } = e.target;
    this.setState({
      searchValue: value
    })
    
    
    
    return (
        <section  className="container">
          <div className="search-container">
            {!!searchValue &&  (
              <>
                <h1>Termos de busca :  {searchValue}</h1>
              </>
            )}
              <TextInput 
                searchValue={searchValue}
                handleOnChange={handleOnChange}
              />
          </div>

            {filteredPosts.length > 0 && (
                <Posts posts={filteredPosts} />
            ) }
            {filteredPosts.length ===0 && (
              <>
                <p>Não existem =(</p> 
                <Toggle />
              </>
         
            )}
 
          <div className="button-container">
            {!searchValue && (
              <Button 
                btnText="Load more posts" 
                handleOnClick={loadMorePosts}
                disabled= {noMorePosts}
               />
            )}

          </div>
      </section>
    );
  
}