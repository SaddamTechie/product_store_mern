import { Box, Container, Heading, Input, VStack,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import {useColorModeValue} from '../components/ui/color-mode'
import { Toaster,toaster } from "../components/ui/toaster"
import { useProductStore } from '../store/product'

const CreatePage = () => {
    const [newProduct,setNewProduct] = useState({
        name:"",
        price:"",
        image:"",
    })

const {createProduct} = useProductStore()

const handleAddProduct = async () =>{
    const {success,message} = await createProduct(newProduct)
    if(!success){
		toaster.create({
			description: message,
			type: "Error",
		  })
	}else{
		toaster.create({
			description: message,
			type: "Success",
			offset: { left: "20px", top: "20px", right: "20px", bottom: "20px" },
		  })
		
	}
	setNewProduct({name:"",price:"",image:""});
}

  return (
    <Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
				<Toaster/>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
  )
}

export default CreatePage