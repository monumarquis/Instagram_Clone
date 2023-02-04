import { Avatar, Divider, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const AccountEdit = () => {
    return (
        <Flex flexDir={"row"} border={"1px solid #a19f9f"} m="7" >
            {/* Left side */}
            <Flex flexDir={"column"} w="22%">
                <Flex flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%" py="5" >
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Meta</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Some account settings are moving</Text>
                    <Text mb="2" w="77%" ml="4%" fontSize="13" fontWeight="400" >Soon, Accounts Centre will be the primary place to manage your account info, settings and experiences across Meta technologies such as Facebook and Instagram.</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="13" fontWeight="500" color="blue.400" >Learn More</Text>
                </Flex>
                <Divider orientation='horizontal' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                <Flex mt='4' flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%">
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Edit Profile</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Change password</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Apps and Websites</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Email notification</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Push notification</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Manage Contacts</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Privacy and Security</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Ads</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Supervision</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Login Activity</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Emails from Instagaram</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Help</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Digital collectibles</Text>
                </Flex>
                <Divider orientation='horizontal' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                <Flex flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%" py="5" >
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Meta</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" color="blue.400" >Account center</Text>
                    <Text mb="2" w="77%" ml="4%" fontSize="12" fontWeight="400" color="#878483" >Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing, and logging in.</Text>
                </Flex>
            </Flex>
            <Divider orientation='vertical' borderWidth={"0.5"} borderColor={'#a19f9f'} h="100%" />
            {/* rigth side */}
            <Flex w="75%">
                <Flex w="70%" m="auto" mt="4" flexDir={"column"} border={"1px solid green"} justifyContent="flex-end">
                    {/* Ist section */}
                    <Flex flexDir={"row"} w="70%" justifyContent={"space-between"} alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="23%">
                            <Avatar src="" borderRadius={"50%"} w="40px" h="40px" />
                        </Flex>
                        <Flex flexDir="column" w="65%">
                            <Text fontSize="18" fontWeight="400" >username</Text>
                            <Text cursor="pointer" fontSize="16" fontWeight="500" color="blue.400" mt="-1" >Change profile photo</Text>
                        </Flex>
                    </Flex>
                    {/* Second section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Third section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Fourth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Fifth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Sixth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Seventh section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                    {/* Eighth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="18" fontWeight="400" >Username</Text>
                        </Flex>
                        
                            <Input placeholder='medium size' size='sm' w="76%" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AccountEdit