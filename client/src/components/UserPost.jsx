import { Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CreatePost from './CreatePost'
import "../styles/post.css"
import UserPostSingle from './UserPostSingle'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPost } from '../redux/userPost/userPost.actions'
import LoadingSpinner from './LoadingSpinner'
import { useParams } from 'react-router-dom'

const UserPost = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.userPost)
    const { username } = useParams()
    console.log(data);
    useEffect(() => {
        dispatch(getUserPost(username))
    }, [username])
    if(data.loading){
        return <LoadingSpinner Sectionheight={"50px"} loaderWidth={"50px"} loaderHeight={"50px"} />
    }
    return (
        <Flex w="100%" border={"1px solid purple"} >
            {data.userPost.length === 0 ? <CreatePost /> : <SimpleGrid w="100%" columns={3} spacing={[0.5, 1, 3, 5, 8]}>
                {data.userPost.map((el)=><UserPostSingle imageUrl={el.imageUrl} key={el.id} />)}
            </SimpleGrid>}
        </Flex>
    )
}

export default UserPost