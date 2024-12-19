import { useDisclosure } from '@nextui-org/react'
import { ImageUpscale } from 'lucide-react'
import { Modal } from '@nextui-org/react'
import { ModalContent } from '@nextui-org/react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function ImageModal({ image, alt }: { image: string; alt: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <div onClick={onOpen} className="flex justify-start items-center">
        <ImageUpscale className="hover:scale-110 cursor-pointer" />
      </div>
      <Modal
        closeButton={<X size={50} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="sm:mx-auto"
      >
        <ModalContent className="max-w-[90vw] max-h-[90vh]">
          <Image
            width={600}
            height={0}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            src={image}
            alt={alt}
            className="max-h-[80vh]"
          />
        </ModalContent>
      </Modal>
    </>
  )
}
