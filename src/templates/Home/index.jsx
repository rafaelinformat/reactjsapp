
import './styles.css';


import {Component } from 'react';
import { PostCard } from '../../components/PostCard';
import {loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import Toggle from '../../components/Toggle';

class Home extends Component {
  state = {
    posts : [], 
    allPosts: [],
    page: 0,
    postsPerPage: 10 ,
    searchValue: ''
  };

  componentDidMount(){
    this.loadPosts();
  
  }
  
  // carrega os posts  acessando uma API 
  loadPosts = async  () => {
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
        posts: postsAndPhotos.slice(page, postsPerPage),
        allPosts: postsAndPhotos,
    });
  }
  loadMorePosts = () => {
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
   handleOnChange = (e) => {
    const {value } = e.target;
    this.setState({
      searchValue: value
    })

  }
  
  render(){
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts= page + postsPerPage >= allPosts.length;
    const filteredPosts  = !!searchValue ? 
    allPosts.filter(post => {
              return post.title.toLowerCase().includes(
                  searchValue.toLocaleLowerCase());
            }) : posts;
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
                handleOnChange={this.handleOnChange}
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
                handleOnClick={this.loadMorePosts}
                disabled= {noMorePosts}
               />
            )}

          </div>
      </section>
    )
  }
}
export default Home;
