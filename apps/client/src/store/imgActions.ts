

import { create } from 'zustand'

// type UploadType = {
//     imgUrl: string
//     imgID: string
// }

interface State {
    uploadedImage: string
    setUploadedImage: (arg: string) => void
    uploadedImageID: string
    setUploadedImageID: (arg: string) => void
}

export const useImgActionStore = create<State>((set) => {
    return {
        uploadedImage: "",
        setUploadedImage: (arg) => {
            set({ uploadedImage: arg })
        },
        uploadedImageID: "",
        setUploadedImageID: (arg) => {
            set({ uploadedImageID: arg })
        },
    }
})
