import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

import ImageNotFound from '@/assets/image-not-found.png'

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export function Image(props: ImageProps) {
  return (
    <img
      {...props}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = ImageNotFound
      }}
    />
  )
}
