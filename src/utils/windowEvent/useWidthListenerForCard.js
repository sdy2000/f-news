import { useEffect, useState } from "react";

const useWidthListenerForCard = () => {
    const [showImgCard, setShowImgCard] = useState()

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth >= 650 ?
                setShowImgCard(true) : setShowImgCard(false);
        })
    }, [])

    useEffect(() => {
        window.innerWidth >= 650 ?
            setShowImgCard(true) : setShowImgCard(false);
    }, [])


    return showImgCard
}

export default useWidthListenerForCard