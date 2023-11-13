import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Modal from "./Modal";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import ApiService  from "../components/ApiService/ApiService";

export class App extends Component  {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    selectedImage: null,
    totalPage: 0,
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage) {
      this.fetchImages();
      }
  }

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });

      ApiService.fetchImages(searchQuery, currentPage).then((response) => {
        const { hits, totalHits } = response.data;
        this.setState((prevState) => ({
        images:
          currentPage === 1 ? hits : [
            ...prevState.images, ...hits
          ],
        totalPage: Math.ceil(totalHits / 12),
        }));
        }).catch((error) => { console.log('Error fetching images', error) }).finally(() =>
        {
          this.setState({ isLoading: false })
        })}
  
    


  handelSearchSubmit = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [], totalPages: 0  })
  }

  handelImageClick = (imageUrl
) => {
    this.setState({selectedImage: imageUrl
})
  }
  
  handelLoadMore = () => {
    const { currentPage, totalPage } = this.state;
    if (currentPage < totalPage) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage +1, isLoading: true
      }))
    }
  }

  handleCloseModal = () => {
    this.setState({selectedImage: null})
  }
 

  render() {
    const { images, currentPage, isLoading, totalPage , selectedImage,
    } = this.state;
    
    const showLoadMoreButton = images.length > 0 && currentPage < totalPage;
      return (
        <div>
          <Searchbar onSubmitForm={this.handelSearchSubmit} />
          <ImageGallery images={images} onItemClick={this.handelImageClick} />
          {isLoading && <Loader />}
          {showLoadMoreButton && <Button onClick={this.handelLoadMore} />}
          { selectedImage && <Modal imageUrl={selectedImage} onClose={this.handleCloseModal} />}
          
        </div>
      );
  }
  
};
