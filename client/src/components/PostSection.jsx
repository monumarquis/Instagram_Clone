import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SinglePost from './SinglePost'
import LoadingSpinner from './LoadingSpinner'
import { getRandomPost } from '../redux/randomPost/randomPost.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PostSection = () => {
    const data = useSelector((state) => state.randomPost)
    const dispatch = useDispatch()
    console.log(data);
    useEffect(() => {
        dispatch(getRandomPost())
    }, [])
    return (
        <Box w="100%"
            border="1px solid green"
        >
            {data.loading ? <LoadingSpinner Sectionheight={"50px"} loaderWidth={"50px"} loaderHeight={"50px"} /> :
                data.randomPost.map((el) => <SinglePost imageUrl={el.imageUrl}
                    likes={el.likes} desc={el.description} key={el._id}
                    username={el.user.username} userImageUrl={el.user.imageUrl}
                />)
            }
        </Box>
    )
}

export default PostSection