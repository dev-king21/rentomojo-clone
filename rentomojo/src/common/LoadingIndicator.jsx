import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import styles from "../styles/loading.module.css"

export const LoadingIndicator=()=>{
    const indicators = [1,2,3,4,5,6]
    return <>
    <div className={styles.loading_container}>
        {indicators.map(()=>(
            <Box className={styles.loading_card} padding='6' boxShadow='md' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={6} spacing='4' skeletonHeight='2' />
        </Box>
        ))}
    </div>
    </>
}