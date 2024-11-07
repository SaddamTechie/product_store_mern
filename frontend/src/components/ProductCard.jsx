//import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Modal from "./Modal";
import { useColorModeValue } from "./ui/color-mode";
import { Toaster,toaster } from "./ui/toaster";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { LuDelete, LuFileEdit } from "react-icons/lu";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
    const [isModalOpen, setIsModalOpen] = useState(false);
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toaster.create({
				description: message,
				type: "Error",
			  })
		} else {
			toaster.create({
				description: message,
				type: "Success",
			  })
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toaster.create({
				description: message,
				type: "Error",
			  })
		} else {
			toaster.create({
				description: "Product updated successfully",
				type: "Success",
			});
		}
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

                <HStack spacing={2}>
					<IconButton><button  onClick={() => setIsModalOpen(true)} ><LuFileEdit/></button></IconButton>
					<IconButton><button onClick={() => handleDeleteProduct(product._id)}><LuDelete/></button></IconButton>
				</HStack>
					<Toaster />
			</Box>
            <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        handleUpdateProduct={handleUpdateProduct}
      />
		</Box>
	);
};
export default ProductCard;