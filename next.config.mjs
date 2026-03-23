/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // xuất ra static HTML
  images: {
    unoptimized: true, // tắt tối ưu ảnh để tránh lỗi export
  },
};

export default nextConfig;
