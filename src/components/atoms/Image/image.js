import { Image as I } from 'antd';

export const Image = ({ width, src, alt, preview = false }) => (
  <I
    width={width}
    src={src}
    alt={alt}
    preview={preview}
  />
)

