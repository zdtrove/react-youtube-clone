import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])
    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)
    const fetchData = () => {
        if (activeCategory === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container>
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={<div className='spinner-border text-danger d-block mx-auto'></div>}
                className='row'
            >
                {!loading ? videos.map((video, i) => (
                    <Col key={i} lg={3} md={4}>
                        <Video video={video} />
                    </Col>
                ))
                : [...Array(20)].map((val) => (
                    <Col key={val} lg={3} md={4}>
                        <SkeletonVideo />
                    </Col>
                ))}
            </InfiniteScroll>
        </Container>
    )
}

export default HomeScreen
